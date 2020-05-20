import * as t from 'io-ts'
import { IContactPoint, RTTI_ContactPoint } from './RTTI_ContactPoint'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'

export interface IContactDetail {
  /**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
  id?: string

  /**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
  extension?: IExtension[]

  /**
	 * The name of an individual to contact.
	 */
  name?: string

  /**
	 * Extensions for name
	 */
  _name?: IElement

  /**
	 * The contact details for the individual (if a name was provided) or the organization.
	 */
  telecom?: IContactPoint[]
}

export const RTTI_ContactDetail: t.Type<IContactDetail> = t.recursion(
  'IContactDetail',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      name: t.string,
      _name: RTTI_Element,
      telecom: t.array(RTTI_ContactPoint),
    }),
)
