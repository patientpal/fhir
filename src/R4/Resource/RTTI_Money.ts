import * as t from 'io-ts'
import { RTTI_code } from '../Scalar/RTTI_code'
import { RTTI_decimal } from '../Scalar/RTTI_decimal'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'

export interface IMoney {
  /**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
  id?: string

  /**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
  extension?: IExtension[]

  /**
	 * Numerical value (with implicit precision).
	 */
  value?: number

  /**
	 * Extensions for value
	 */
  _value?: IElement

  /**
	 * ISO 4217 Currency Code.
	 */
  currency?: string

  /**
	 * Extensions for currency
	 */
  _currency?: IElement
}

export const RTTI_Money: t.Type<IMoney> = t.recursion('IMoney', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    value: RTTI_decimal,
    _value: RTTI_Element,
    currency: RTTI_code,
    _currency: RTTI_Element,
  }),
)
