import * as t from 'io-ts'
import { RTTI_code } from '../Scalar/RTTI_code'
import { RTTI_id } from '../Scalar/RTTI_id'
import { RTTI_uri } from '../Scalar/RTTI_uri'
import { IResourceList, RTTI_ResourceList } from '../Union/RTTI_ResourceList'
import { IDomainResource } from './IDomainResource'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IIdentifier, RTTI_Identifier } from './RTTI_Identifier'
import { IMeta, RTTI_Meta } from './RTTI_Meta'
import { INarrative, RTTI_Narrative } from './RTTI_Narrative'
import {
  ISpecimenDefinition_TypeTested,
  RTTI_SpecimenDefinition_TypeTested,
} from './RTTI_SpecimenDefinition_TypeTested'

export interface ISpecimenDefinition extends IDomainResource {
  /**
	 * This is a SpecimenDefinition resource
	 */
  resourceType: 'SpecimenDefinition'

  /**
	 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
	 */
  id?: string

  /**
	 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
	 */
  meta?: IMeta

  /**
	 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
	 */
  implicitRules?: string

  /**
	 * Extensions for implicitRules
	 */
  _implicitRules?: IElement

  /**
	 * The base language in which the resource is written.
	 */
  language?: string

  /**
	 * Extensions for language
	 */
  _language?: IElement

  /**
	 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
	 */
  text?: INarrative

  /**
	 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
	 */
  contained?: IResourceList[]

  /**
	 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
  extension?: IExtension[]

  /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[]

  /**
	 * A business identifier associated with the kind of specimen.
	 */
  identifier?: IIdentifier

  /**
	 * The kind of material to be collected.
	 */
  typeCollected?: ICodeableConcept

  /**
	 * Preparation of the patient for specimen collection.
	 */
  patientPreparation?: ICodeableConcept[]

  /**
	 * Time aspect of specimen collection (duration or offset).
	 */
  timeAspect?: string

  /**
	 * Extensions for timeAspect
	 */
  _timeAspect?: IElement

  /**
	 * The action to be performed for collecting the specimen.
	 */
  collection?: ICodeableConcept[]

  /**
	 * Specimen conditioned in a container as expected by the testing laboratory.
	 */
  typeTested?: ISpecimenDefinition_TypeTested[]
}

export const RTTI_SpecimenDefinition: t.Type<ISpecimenDefinition> = t.recursion(
  'ISpecimenDefinition',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('SpecimenDefinition'),
      }),
      t.partial({
        id: RTTI_id,
        meta: RTTI_Meta,
        implicitRules: RTTI_uri,
        _implicitRules: RTTI_Element,
        language: RTTI_code,
        _language: RTTI_Element,
        text: RTTI_Narrative,
        contained: t.array(RTTI_ResourceList),
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        identifier: RTTI_Identifier,
        typeCollected: RTTI_CodeableConcept,
        patientPreparation: t.array(RTTI_CodeableConcept),
        timeAspect: t.string,
        _timeAspect: RTTI_Element,
        collection: t.array(RTTI_CodeableConcept),
        typeTested: t.array(RTTI_SpecimenDefinition_TypeTested),
      }),
    ]),
)
