import * as t from 'io-ts'
import { RTTI_integer } from '../Scalar/RTTI_integer'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'

export interface IEffectEvidenceSynthesis_SampleSize {
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
	 * Human-readable summary of sample size.
	 */
  description?: string

  /**
	 * Extensions for description
	 */
  _description?: IElement

  /**
	 * Number of studies included in this evidence synthesis.
	 */
  numberOfStudies?: number

  /**
	 * Extensions for numberOfStudies
	 */
  _numberOfStudies?: IElement

  /**
	 * Number of participants included in this evidence synthesis.
	 */
  numberOfParticipants?: number

  /**
	 * Extensions for numberOfParticipants
	 */
  _numberOfParticipants?: IElement
}

export const RTTI_EffectEvidenceSynthesis_SampleSize: t.Type<
  IEffectEvidenceSynthesis_SampleSize
> = t.recursion('IEffectEvidenceSynthesis_SampleSize', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    description: t.string,
    _description: RTTI_Element,
    numberOfStudies: RTTI_integer,
    _numberOfStudies: RTTI_Element,
    numberOfParticipants: RTTI_integer,
    _numberOfParticipants: RTTI_Element,
  }),
)
