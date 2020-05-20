import * as t from 'io-ts'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
export enum PlanDefinition_ParticipantTypeKind {
  _patient = 'patient',
  _practitioner = 'practitioner',
  _relatedPerson = 'related-person',
  _device = 'device',
}
import { createEnumType } from '../../EnumType'

export interface IPlanDefinition_Participant {
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
	 * The type of participant in the action.
	 */
  type?: PlanDefinition_ParticipantTypeKind

  /**
	 * Extensions for type
	 */
  _type?: IElement

  /**
	 * The role the participant should play in performing the described action.
	 */
  role?: ICodeableConcept
}

export const RTTI_PlanDefinition_Participant: t.Type<
  IPlanDefinition_Participant
> = t.recursion('IPlanDefinition_Participant', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    type: createEnumType<PlanDefinition_ParticipantTypeKind>(
      PlanDefinition_ParticipantTypeKind,
      'PlanDefinition_ParticipantTypeKind',
    ),
    _type: RTTI_Element,
    role: RTTI_CodeableConcept,
  }),
)
