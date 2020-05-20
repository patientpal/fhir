import * as t from 'io-ts'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IDuration, RTTI_Duration } from './RTTI_Duration'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IPeriod, RTTI_Period } from './RTTI_Period'
import { IQuantity, RTTI_Quantity } from './RTTI_Quantity'
import { IReference, RTTI_Reference } from './RTTI_Reference'

export interface ISpecimen_Collection {
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
	 * Person who collected the specimen.
	 */
  collector?: IReference

  /**
	 * Time when specimen was collected from subject - the physiologically relevant time.
	 */
  collectedDateTime?: string

  /**
	 * Extensions for collectedDateTime
	 */
  _collectedDateTime?: IElement

  /**
	 * Time when specimen was collected from subject - the physiologically relevant time.
	 */
  collectedPeriod?: IPeriod

  /**
	 * The span of time over which the collection of a specimen occurred.
	 */
  duration?: IDuration

  /**
	 * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
	 */
  quantity?: IQuantity

  /**
	 * A coded value specifying the technique that is used to perform the procedure.
	 */
  method?: ICodeableConcept

  /**
	 * Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.
	 */
  bodySite?: ICodeableConcept

  /**
	 * Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.
	 */
  fastingStatusCodeableConcept?: ICodeableConcept

  /**
	 * Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.
	 */
  fastingStatusDuration?: IDuration
}

export const RTTI_Specimen_Collection: t.Type<
  ISpecimen_Collection
> = t.recursion('ISpecimen_Collection', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    collector: RTTI_Reference,
    collectedDateTime: t.string,
    _collectedDateTime: RTTI_Element,
    collectedPeriod: RTTI_Period,
    duration: RTTI_Duration,
    quantity: RTTI_Quantity,
    method: RTTI_CodeableConcept,
    bodySite: RTTI_CodeableConcept,
    fastingStatusCodeableConcept: RTTI_CodeableConcept,
    fastingStatusDuration: RTTI_Duration,
  }),
)
