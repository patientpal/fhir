import * as t from 'io-ts'
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IPeriod, RTTI_Period } from './RTTI_Period'

export interface IMarketingStatus {
  /**
	 * The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements.
	 */
  country: ICodeableConcept

  /**
	 * This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples.
	 */
  status: ICodeableConcept

  /**
	 * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.
	 */
  dateRange: IPeriod

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
	 * Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified.
	 */
  jurisdiction?: ICodeableConcept

  /**
	 * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.
	 */
  restoreDate?: string

  /**
	 * Extensions for restoreDate
	 */
  _restoreDate?: IElement
}

export const RTTI_MarketingStatus: t.Type<IMarketingStatus> = t.recursion(
  'IMarketingStatus',
  () =>
    t.intersection([
      t.type({
        country: RTTI_CodeableConcept,
        status: RTTI_CodeableConcept,
        dateRange: RTTI_Period,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        jurisdiction: RTTI_CodeableConcept,
        restoreDate: RTTI_dateTime,
        _restoreDate: RTTI_Element,
      }),
    ]),
)
