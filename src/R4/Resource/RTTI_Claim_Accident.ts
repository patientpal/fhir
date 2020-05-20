import * as t from 'io-ts'
import { RTTI_date } from '../Scalar/RTTI_date'
import { IAddress, RTTI_Address } from './RTTI_Address'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IReference, RTTI_Reference } from './RTTI_Reference'

export interface IClaim_Accident {
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
	 * Date of an accident event  related to the products and services contained in the claim.
	 */
  date?: string

  /**
	 * Extensions for date
	 */
  _date?: IElement

  /**
	 * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
	 */
  type?: ICodeableConcept

  /**
	 * The physical location of the accident event.
	 */
  locationAddress?: IAddress

  /**
	 * The physical location of the accident event.
	 */
  locationReference?: IReference
}

export const RTTI_Claim_Accident: t.Type<IClaim_Accident> = t.recursion(
  'IClaim_Accident',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      date: RTTI_date,
      _date: RTTI_Element,
      type: RTTI_CodeableConcept,
      locationAddress: RTTI_Address,
      locationReference: RTTI_Reference,
    }),
)
