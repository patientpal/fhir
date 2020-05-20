import * as t from 'io-ts'
import { RTTI_uri } from '../Scalar/RTTI_uri'
import { IAddress, RTTI_Address } from './RTTI_Address'
import { IAge, RTTI_Age } from './RTTI_Age'
import { IAnnotation, RTTI_Annotation } from './RTTI_Annotation'
import { IAttachment, RTTI_Attachment } from './RTTI_Attachment'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { ICoding, RTTI_Coding } from './RTTI_Coding'
import { IContactDetail, RTTI_ContactDetail } from './RTTI_ContactDetail'
import { IContactPoint, RTTI_ContactPoint } from './RTTI_ContactPoint'
import { IContributor, RTTI_Contributor } from './RTTI_Contributor'
import { ICount, RTTI_Count } from './RTTI_Count'
import { IDataRequirement, RTTI_DataRequirement } from './RTTI_DataRequirement'
import { IDistance, RTTI_Distance } from './RTTI_Distance'
import { IDosage, RTTI_Dosage } from './RTTI_Dosage'
import { IDuration, RTTI_Duration } from './RTTI_Duration'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExpression, RTTI_Expression } from './RTTI_Expression'
import { IHumanName, RTTI_HumanName } from './RTTI_HumanName'
import { IIdentifier, RTTI_Identifier } from './RTTI_Identifier'
import { IMoney, RTTI_Money } from './RTTI_Money'
import {
  IParameterDefinition,
  RTTI_ParameterDefinition,
} from './RTTI_ParameterDefinition'
import { IPeriod, RTTI_Period } from './RTTI_Period'
import { IQuantity, RTTI_Quantity } from './RTTI_Quantity'
import { IRange, RTTI_Range } from './RTTI_Range'
import { IRatio, RTTI_Ratio } from './RTTI_Ratio'
import { IReference, RTTI_Reference } from './RTTI_Reference'
import { IRelatedArtifact, RTTI_RelatedArtifact } from './RTTI_RelatedArtifact'
import { ISampledData, RTTI_SampledData } from './RTTI_SampledData'
import { ISignature, RTTI_Signature } from './RTTI_Signature'
import { ITiming, RTTI_Timing } from './RTTI_Timing'
import {
  ITriggerDefinition,
  RTTI_TriggerDefinition,
} from './RTTI_TriggerDefinition'
import { IUsageContext, RTTI_UsageContext } from './RTTI_UsageContext'

export interface IExtension {
  /**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
  id?: string

  /**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
  extension?: IExtension[]

  /**
	 * Source of the definition for the extension code - a logical name or a URL.
	 */
  url?: string

  /**
	 * Extensions for url
	 */
  _url?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueBase64Binary?: string

  /**
	 * Extensions for valueBase64Binary
	 */
  _valueBase64Binary?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueBoolean?: boolean

  /**
	 * Extensions for valueBoolean
	 */
  _valueBoolean?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueCanonical?: string

  /**
	 * Extensions for valueCanonical
	 */
  _valueCanonical?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueCode?: string

  /**
	 * Extensions for valueCode
	 */
  _valueCode?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueDate?: string

  /**
	 * Extensions for valueDate
	 */
  _valueDate?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueDateTime?: string

  /**
	 * Extensions for valueDateTime
	 */
  _valueDateTime?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueDecimal?: number

  /**
	 * Extensions for valueDecimal
	 */
  _valueDecimal?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueId?: string

  /**
	 * Extensions for valueId
	 */
  _valueId?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueInstant?: string

  /**
	 * Extensions for valueInstant
	 */
  _valueInstant?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueInteger?: number

  /**
	 * Extensions for valueInteger
	 */
  _valueInteger?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueMarkdown?: string

  /**
	 * Extensions for valueMarkdown
	 */
  _valueMarkdown?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueOid?: string

  /**
	 * Extensions for valueOid
	 */
  _valueOid?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valuePositiveInt?: number

  /**
	 * Extensions for valuePositiveInt
	 */
  _valuePositiveInt?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueString?: string

  /**
	 * Extensions for valueString
	 */
  _valueString?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueTime?: string

  /**
	 * Extensions for valueTime
	 */
  _valueTime?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueUnsignedInt?: number

  /**
	 * Extensions for valueUnsignedInt
	 */
  _valueUnsignedInt?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueUri?: string

  /**
	 * Extensions for valueUri
	 */
  _valueUri?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueUrl?: string

  /**
	 * Extensions for valueUrl
	 */
  _valueUrl?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueUuid?: string

  /**
	 * Extensions for valueUuid
	 */
  _valueUuid?: IElement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueAddress?: IAddress

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueAge?: IAge

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueAnnotation?: IAnnotation

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueAttachment?: IAttachment

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueCodeableConcept?: ICodeableConcept

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueCoding?: ICoding

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueContactPoint?: IContactPoint

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueCount?: ICount

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueDistance?: IDistance

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueDuration?: IDuration

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueHumanName?: IHumanName

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueIdentifier?: IIdentifier

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueMoney?: IMoney

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valuePeriod?: IPeriod

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueQuantity?: IQuantity

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueRange?: IRange

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueRatio?: IRatio

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueReference?: IReference

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueSampledData?: ISampledData

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueSignature?: ISignature

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueTiming?: ITiming

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueContactDetail?: IContactDetail

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueContributor?: IContributor

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueDataRequirement?: IDataRequirement

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueExpression?: IExpression

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueParameterDefinition?: IParameterDefinition

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueRelatedArtifact?: IRelatedArtifact

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueTriggerDefinition?: ITriggerDefinition

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueUsageContext?: IUsageContext

  /**
	 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
	 */
  valueDosage?: IDosage
}

export const RTTI_Extension: t.Type<IExtension> = t.recursion(
  'IExtension',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      url: RTTI_uri,
      _url: RTTI_Element,
      valueBase64Binary: t.string,
      _valueBase64Binary: RTTI_Element,
      valueBoolean: t.boolean,
      _valueBoolean: RTTI_Element,
      valueCanonical: t.string,
      _valueCanonical: RTTI_Element,
      valueCode: t.string,
      _valueCode: RTTI_Element,
      valueDate: t.string,
      _valueDate: RTTI_Element,
      valueDateTime: t.string,
      _valueDateTime: RTTI_Element,
      valueDecimal: t.number,
      _valueDecimal: RTTI_Element,
      valueId: t.string,
      _valueId: RTTI_Element,
      valueInstant: t.string,
      _valueInstant: RTTI_Element,
      valueInteger: t.number,
      _valueInteger: RTTI_Element,
      valueMarkdown: t.string,
      _valueMarkdown: RTTI_Element,
      valueOid: t.string,
      _valueOid: RTTI_Element,
      valuePositiveInt: t.number,
      _valuePositiveInt: RTTI_Element,
      valueString: t.string,
      _valueString: RTTI_Element,
      valueTime: t.string,
      _valueTime: RTTI_Element,
      valueUnsignedInt: t.number,
      _valueUnsignedInt: RTTI_Element,
      valueUri: t.string,
      _valueUri: RTTI_Element,
      valueUrl: t.string,
      _valueUrl: RTTI_Element,
      valueUuid: t.string,
      _valueUuid: RTTI_Element,
      valueAddress: RTTI_Address,
      valueAge: RTTI_Age,
      valueAnnotation: RTTI_Annotation,
      valueAttachment: RTTI_Attachment,
      valueCodeableConcept: RTTI_CodeableConcept,
      valueCoding: RTTI_Coding,
      valueContactPoint: RTTI_ContactPoint,
      valueCount: RTTI_Count,
      valueDistance: RTTI_Distance,
      valueDuration: RTTI_Duration,
      valueHumanName: RTTI_HumanName,
      valueIdentifier: RTTI_Identifier,
      valueMoney: RTTI_Money,
      valuePeriod: RTTI_Period,
      valueQuantity: RTTI_Quantity,
      valueRange: RTTI_Range,
      valueRatio: RTTI_Ratio,
      valueReference: RTTI_Reference,
      valueSampledData: RTTI_SampledData,
      valueSignature: RTTI_Signature,
      valueTiming: RTTI_Timing,
      valueContactDetail: RTTI_ContactDetail,
      valueContributor: RTTI_Contributor,
      valueDataRequirement: RTTI_DataRequirement,
      valueExpression: RTTI_Expression,
      valueParameterDefinition: RTTI_ParameterDefinition,
      valueRelatedArtifact: RTTI_RelatedArtifact,
      valueTriggerDefinition: RTTI_TriggerDefinition,
      valueUsageContext: RTTI_UsageContext,
      valueDosage: RTTI_Dosage,
    }),
)
