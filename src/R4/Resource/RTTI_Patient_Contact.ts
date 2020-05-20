import * as t from 'io-ts'
import { IAddress, RTTI_Address } from './RTTI_Address'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IContactPoint, RTTI_ContactPoint } from './RTTI_ContactPoint'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IHumanName, RTTI_HumanName } from './RTTI_HumanName'
import { IPeriod, RTTI_Period } from './RTTI_Period'
import { IReference, RTTI_Reference } from './RTTI_Reference'
export enum Patient_ContactGenderKind {
  _male = 'male',
  _female = 'female',
  _other = 'other',
  _unknown = 'unknown',
}
import { createEnumType } from '../../EnumType'

export interface IPatient_Contact {
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
	 * The nature of the relationship between the patient and the contact person.
	 */
  relationship?: ICodeableConcept[]

  /**
	 * A name associated with the contact person.
	 */
  name?: IHumanName

  /**
	 * A contact detail for the person, e.g. a telephone number or an email address.
	 */
  telecom?: IContactPoint[]

  /**
	 * Address for the contact person.
	 */
  address?: IAddress

  /**
	 * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
	 */
  gender?: Patient_ContactGenderKind

  /**
	 * Extensions for gender
	 */
  _gender?: IElement

  /**
	 * Organization on behalf of which the contact is acting or for which the contact is working.
	 */
  organization?: IReference

  /**
	 * The period during which this contact person or organization is valid to be contacted relating to this patient.
	 */
  period?: IPeriod
}

export const RTTI_Patient_Contact: t.Type<IPatient_Contact> = t.recursion(
  'IPatient_Contact',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      relationship: t.array(RTTI_CodeableConcept),
      name: RTTI_HumanName,
      telecom: t.array(RTTI_ContactPoint),
      address: RTTI_Address,
      gender: createEnumType<Patient_ContactGenderKind>(
        Patient_ContactGenderKind,
        'Patient_ContactGenderKind',
      ),
      _gender: RTTI_Element,
      organization: RTTI_Reference,
      period: RTTI_Period,
    }),
)
