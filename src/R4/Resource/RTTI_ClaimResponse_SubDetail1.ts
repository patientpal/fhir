import * as t from 'io-ts'
import { RTTI_decimal } from '../Scalar/RTTI_decimal'
import { RTTI_positiveInt } from '../Scalar/RTTI_positiveInt'
import {
  IClaimResponse_Adjudication,
  RTTI_ClaimResponse_Adjudication,
} from './RTTI_ClaimResponse_Adjudication'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IMoney, RTTI_Money } from './RTTI_Money'
import { IQuantity, RTTI_Quantity } from './RTTI_Quantity'

export interface IClaimResponse_SubDetail1 {
  /**
	 * When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
	 */
  productOrService: ICodeableConcept

  /**
	 * The adjudication results.
	 */
  adjudication: IClaimResponse_Adjudication[]

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
	 * Item typification or modifiers codes to convey additional context for the product or service.
	 */
  modifier?: ICodeableConcept[]

  /**
	 * The number of repetitions of a service or product.
	 */
  quantity?: IQuantity

  /**
	 * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
	 */
  unitPrice?: IMoney

  /**
	 * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
	 */
  factor?: number

  /**
	 * Extensions for factor
	 */
  _factor?: IElement

  /**
	 * The quantity times the unit price for an additional service or product or charge.
	 */
  net?: IMoney

  /**
	 * The numbers associated with notes below which apply to the adjudication of this item.
	 */
  noteNumber?: number[]

  /**
	 * Extensions for noteNumber
	 */
  _noteNumber?: IElement[]
}

export const RTTI_ClaimResponse_SubDetail1: t.Type<
  IClaimResponse_SubDetail1
> = t.recursion('IClaimResponse_SubDetail1', () =>
  t.intersection([
    t.type({
      productOrService: RTTI_CodeableConcept,
      adjudication: t.array(RTTI_ClaimResponse_Adjudication),
    }),
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      modifier: t.array(RTTI_CodeableConcept),
      quantity: RTTI_Quantity,
      unitPrice: RTTI_Money,
      factor: RTTI_decimal,
      _factor: RTTI_Element,
      net: RTTI_Money,
      noteNumber: t.array(RTTI_positiveInt),
      _noteNumber: t.array(RTTI_Element),
    }),
  ]),
)
