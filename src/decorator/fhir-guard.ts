import * as t from 'io-ts'
import 'reflect-metadata'

export type RefType<T> = new(...args: any[]) => T

export function decode<I, T extends t.Type<I>>(type: T, json: any): I {
    const validResult = type.decode(json)
    if (validResult.isLeft()) {
        throw 1
    }

    return <I> validResult.value
}


function FhirGuard4MethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // const returnType = Reflect.getMetadata("design:returntype", target, propertyKey); // should be interface Ixxx

    const returnType = new target[propertyKey]()


    const originalFunction = descriptor.value // save original function
    descriptor.value = function (...args: any[]) { // replace with this new one
        const result = originalFunction.apply(this, args)


        return decode(returnType, result)
    }
}


function FhirGuard4PropertyDecorator<T>(target: any, key: string) {
    // @ts-ignore
    let _val = this[key]

    // property getter
    const getter = function () {
        return _val
    }

    // property setter
    const setter = function (newVal: any) {
        // console.log(`Set: ${key} => ${newVal}`)
        _val = newVal
    }
}

// Decorator Factory
export function FHIRGuard<T>(...args: any[]) {
    switch (args.length) {
        /*case 1:
            return FhirGuard4ClassDecorator.apply(this, args);
        */
        case 2:
            // @ts-ignore
            return FhirGuard4PropertyDecorator.apply(this, args)
        case 3:
            /*if (typeof args[2] === "number") {
              return logParameter.apply(this, args);
            }*/
            // @ts-ignore
            return FhirGuard4MethodDecorator.apply(this, args)
        default:
            throw new Error('Decorators are not valid here!')
    }
}
