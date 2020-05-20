import * as t from 'io-ts'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IPeriod, RTTI_Period } from './RTTI_Period'
import { IReference, RTTI_Reference } from './RTTI_Reference'

export interface IBiologicallyDerivedProduct_Processing {
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
	 * Description of of processing.
	 */
  description?: string

  /**
	 * Extensions for description
	 */
  _description?: IElement

  /**
	 * Procesing code.
	 */
  procedure?: ICodeableConcept

  /**
	 * Substance added during processing.
	 */
  additive?: IReference

  /**
	 * Time of processing.
	 */
  timeDateTime?: string

  /**
	 * Extensions for timeDateTime
	 */
  _timeDateTime?: IElement

  /**
	 * Time of processing.
	 */
  timePeriod?: IPeriod
}

export const RTTI_BiologicallyDerivedProduct_Processing: t.Type<
  IBiologicallyDerivedProduct_Processing
> = t.recursion('IBiologicallyDerivedProduct_Processing', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    description: t.string,
    _description: RTTI_Element,
    procedure: RTTI_CodeableConcept,
    additive: RTTI_Reference,
    timeDateTime: t.string,
    _timeDateTime: RTTI_Element,
    timePeriod: RTTI_Period,
  }),
)
