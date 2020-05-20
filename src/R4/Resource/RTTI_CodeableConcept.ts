import * as t from 'io-ts'
import { ICoding, RTTI_Coding } from './RTTI_Coding'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'

export interface ICodeableConcept {
  /**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
  id?: string

  /**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
  extension?: IExtension[]

  /**
	 * A reference to a code defined by a terminology system.
	 */
  coding?: ICoding[]

  /**
	 * A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.
	 */
  text?: string

  /**
	 * Extensions for text
	 */
  _text?: IElement
}

export const RTTI_CodeableConcept: t.Type<ICodeableConcept> = t.recursion(
  'ICodeableConcept',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      coding: t.array(RTTI_Coding),
      text: t.string,
      _text: RTTI_Element,
    }),
)
