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
import { IReference, RTTI_Reference } from './RTTI_Reference'
import {
  ISubstanceSpecification_Code,
  RTTI_SubstanceSpecification_Code,
} from './RTTI_SubstanceSpecification_Code'
import {
  ISubstanceSpecification_Moiety,
  RTTI_SubstanceSpecification_Moiety,
} from './RTTI_SubstanceSpecification_Moiety'
import {
  ISubstanceSpecification_MolecularWeight,
  RTTI_SubstanceSpecification_MolecularWeight,
} from './RTTI_SubstanceSpecification_MolecularWeight'
import {
  ISubstanceSpecification_Name,
  RTTI_SubstanceSpecification_Name,
} from './RTTI_SubstanceSpecification_Name'
import {
  ISubstanceSpecification_Property,
  RTTI_SubstanceSpecification_Property,
} from './RTTI_SubstanceSpecification_Property'
import {
  ISubstanceSpecification_Relationship,
  RTTI_SubstanceSpecification_Relationship,
} from './RTTI_SubstanceSpecification_Relationship'
import {
  ISubstanceSpecification_Structure,
  RTTI_SubstanceSpecification_Structure,
} from './RTTI_SubstanceSpecification_Structure'

export interface ISubstanceSpecification extends IDomainResource {
  /**
	 * This is a SubstanceSpecification resource
	 */
  resourceType: 'SubstanceSpecification'

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
	 * Identifier by which this substance is known.
	 */
  identifier?: IIdentifier

  /**
	 * High level categorization, e.g. polymer or nucleic acid.
	 */
  type?: ICodeableConcept

  /**
	 * Status of substance within the catalogue e.g. approved.
	 */
  status?: ICodeableConcept

  /**
	 * If the substance applies to only human or veterinary use.
	 */
  domain?: ICodeableConcept

  /**
	 * Textual description of the substance.
	 */
  description?: string

  /**
	 * Extensions for description
	 */
  _description?: IElement

  /**
	 * Supporting literature.
	 */
  source?: IReference[]

  /**
	 * Textual comment about this record of a substance.
	 */
  comment?: string

  /**
	 * Extensions for comment
	 */
  _comment?: IElement

  /**
	 * Moiety, for structural modifications.
	 */
  moiety?: ISubstanceSpecification_Moiety[]

  /**
	 * General specifications for this substance, including how it is related to other substances.
	 */
  property?: ISubstanceSpecification_Property[]

  /**
	 * General information detailing this substance.
	 */
  referenceInformation?: IReference

  /**
	 * Structural information.
	 */
  structure?: ISubstanceSpecification_Structure

  /**
	 * Codes associated with the substance.
	 */
  code?: ISubstanceSpecification_Code[]

  /**
	 * Names applicable to this substance.
	 */
  name?: ISubstanceSpecification_Name[]

  /**
	 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
	 */
  molecularWeight?: ISubstanceSpecification_MolecularWeight[]

  /**
	 * A link between this substance and another, with details of the relationship.
	 */
  relationship?: ISubstanceSpecification_Relationship[]

  /**
	 * Data items specific to nucleic acids.
	 */
  nucleicAcid?: IReference

  /**
	 * Data items specific to polymers.
	 */
  polymer?: IReference

  /**
	 * Data items specific to proteins.
	 */
  protein?: IReference

  /**
	 * Material or taxonomic/anatomical source for the substance.
	 */
  sourceMaterial?: IReference
}

export const RTTI_SubstanceSpecification: t.Type<
  ISubstanceSpecification
> = t.recursion('ISubstanceSpecification', () =>
  t.intersection([
    t.type({
      resourceType: t.literal('SubstanceSpecification'),
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
      type: RTTI_CodeableConcept,
      status: RTTI_CodeableConcept,
      domain: RTTI_CodeableConcept,
      description: t.string,
      _description: RTTI_Element,
      source: t.array(RTTI_Reference),
      comment: t.string,
      _comment: RTTI_Element,
      moiety: t.array(RTTI_SubstanceSpecification_Moiety),
      property: t.array(RTTI_SubstanceSpecification_Property),
      referenceInformation: RTTI_Reference,
      structure: RTTI_SubstanceSpecification_Structure,
      code: t.array(RTTI_SubstanceSpecification_Code),
      name: t.array(RTTI_SubstanceSpecification_Name),
      molecularWeight: t.array(RTTI_SubstanceSpecification_MolecularWeight),
      relationship: t.array(RTTI_SubstanceSpecification_Relationship),
      nucleicAcid: RTTI_Reference,
      polymer: RTTI_Reference,
      protein: RTTI_Reference,
      sourceMaterial: RTTI_Reference,
    }),
  ]),
)
