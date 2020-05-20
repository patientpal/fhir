import * as t from 'io-ts'
import { IElement, RTTI_Element } from './RTTI_Element'
import {
  IExampleScenario_Alternative,
  RTTI_ExampleScenario_Alternative,
} from './RTTI_ExampleScenario_Alternative'
import {
  IExampleScenario_Operation,
  RTTI_ExampleScenario_Operation,
} from './RTTI_ExampleScenario_Operation'
import {
  IExampleScenario_Process,
  RTTI_ExampleScenario_Process,
} from './RTTI_ExampleScenario_Process'
import { IExtension, RTTI_Extension } from './RTTI_Extension'

export interface IExampleScenario_Step {
  /**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
  id?: string

  /**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
  extension?: IExtension[]

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[]

  /**
	 * Nested process.
	 */
  process?: IExampleScenario_Process[]

  /**
	 * If there is a pause in the flow.
	 */
  pause?: boolean

  /**
	 * Extensions for pause
	 */
  _pause?: IElement

  /**
	 * Each interaction or action.
	 */
  operation?: IExampleScenario_Operation

  /**
	 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
	 */
  alternative?: IExampleScenario_Alternative[]
}

export const RTTI_ExampleScenario_Step: t.Type<
  IExampleScenario_Step
> = t.recursion('IExampleScenario_Step', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    process: t.array(RTTI_ExampleScenario_Process),
    pause: t.boolean,
    _pause: RTTI_Element,
    operation: RTTI_ExampleScenario_Operation,
    alternative: t.array(RTTI_ExampleScenario_Alternative),
  }),
)
