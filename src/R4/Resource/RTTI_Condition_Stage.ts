import * as t from 'io-ts'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IReference, RTTI_Reference } from './RTTI_Reference'

export interface ICondition_Stage {
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
	 * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
	 */
  summary?: ICodeableConcept

  /**
	 * Reference to a formal record of the evidence on which the staging assessment is based.
	 */
  assessment?: IReference[]

  /**
	 * The kind of staging, such as pathological or clinical staging.
	 */
  type?: ICodeableConcept
}

export const RTTI_Condition_Stage: t.Type<ICondition_Stage> = t.recursion(
  'ICondition_Stage',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      summary: RTTI_CodeableConcept,
      assessment: t.array(RTTI_Reference),
      type: RTTI_CodeableConcept,
    }),
)
