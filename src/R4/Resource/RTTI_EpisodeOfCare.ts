import * as t from 'io-ts'
import { RTTI_code } from '../Scalar/RTTI_code'
import { RTTI_id } from '../Scalar/RTTI_id'
import { RTTI_uri } from '../Scalar/RTTI_uri'
import { IResourceList, RTTI_ResourceList } from '../Union/RTTI_ResourceList'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IElement, RTTI_Element } from './RTTI_Element'
import {
  IEpisodeOfCare_Diagnosis,
  RTTI_EpisodeOfCare_Diagnosis,
} from './RTTI_EpisodeOfCare_Diagnosis'
import {
  IEpisodeOfCare_StatusHistory,
  RTTI_EpisodeOfCare_StatusHistory,
} from './RTTI_EpisodeOfCare_StatusHistory'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IIdentifier, RTTI_Identifier } from './RTTI_Identifier'
import { IMeta, RTTI_Meta } from './RTTI_Meta'
import { INarrative, RTTI_Narrative } from './RTTI_Narrative'
import { IPeriod, RTTI_Period } from './RTTI_Period'
import { IReference, RTTI_Reference } from './RTTI_Reference'
export enum EpisodeOfCareStatusKind {
  _planned = 'planned',
  _waitlist = 'waitlist',
  _active = 'active',
  _onhold = 'onhold',
  _finished = 'finished',
  _cancelled = 'cancelled',
  _enteredInError = 'entered-in-error',
}
import { createEnumType } from '../../EnumType'
import { IDomainResource } from './IDomainResource'

export interface IEpisodeOfCare extends IDomainResource {
  /**
	 * This is a EpisodeOfCare resource
	 */
  resourceType: 'EpisodeOfCare'

  /**
	 * The patient who is the focus of this episode of care.
	 */
  patient: IReference

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
	 * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
	 */
  identifier?: IIdentifier[]

  /**
	 * planned | waitlist | active | onhold | finished | cancelled.
	 */
  status?: EpisodeOfCareStatusKind

  /**
	 * Extensions for status
	 */
  _status?: IElement

  /**
	 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
	 */
  statusHistory?: IEpisodeOfCare_StatusHistory[]

  /**
	 * A classification of the type of episode of care; e.g. specialist referral, disease management, type of funded care.
	 */
  type?: ICodeableConcept[]

  /**
	 * The list of diagnosis relevant to this episode of care.
	 */
  diagnosis?: IEpisodeOfCare_Diagnosis[]

  /**
	 * The organization that has assumed the specific responsibilities for the specified duration.
	 */
  managingOrganization?: IReference

  /**
	 * The interval during which the managing organization assumes the defined responsibility.
	 */
  period?: IPeriod

  /**
	 * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
	 */
  referralRequest?: IReference[]

  /**
	 * The practitioner that is the care manager/care coordinator for this patient.
	 */
  careManager?: IReference

  /**
	 * The list of practitioners that may be facilitating this episode of care for specific purposes.
	 */
  team?: IReference[]

  /**
	 * The set of accounts that may be used for billing for this EpisodeOfCare.
	 */
  account?: IReference[]
}

export const RTTI_EpisodeOfCare: t.Type<IEpisodeOfCare> = t.recursion(
  'IEpisodeOfCare',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('EpisodeOfCare'),
        patient: RTTI_Reference,
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
        identifier: t.array(RTTI_Identifier),
        status: createEnumType<EpisodeOfCareStatusKind>(
          EpisodeOfCareStatusKind,
          'EpisodeOfCareStatusKind',
        ),
        _status: RTTI_Element,
        statusHistory: t.array(RTTI_EpisodeOfCare_StatusHistory),
        type: t.array(RTTI_CodeableConcept),
        diagnosis: t.array(RTTI_EpisodeOfCare_Diagnosis),
        managingOrganization: RTTI_Reference,
        period: RTTI_Period,
        referralRequest: t.array(RTTI_Reference),
        careManager: RTTI_Reference,
        team: t.array(RTTI_Reference),
        account: t.array(RTTI_Reference),
      }),
    ]),
)
