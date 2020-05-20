import * as t from 'io-ts'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExpression, RTTI_Expression } from './RTTI_Expression'
import { IExtension, RTTI_Extension } from './RTTI_Extension'

export interface IMeasure_Population {
  /**
	 * An expression that specifies the criteria for the population, typically the name of an expression in a library.
	 */
  criteria: IExpression

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
	 * The type of population criteria.
	 */
  code?: ICodeableConcept

  /**
	 * The human readable description of this population criteria.
	 */
  description?: string

  /**
	 * Extensions for description
	 */
  _description?: IElement
}

export const RTTI_Measure_Population: t.Type<IMeasure_Population> = t.recursion(
  'IMeasure_Population',
  () =>
    t.intersection([
      t.type({
        criteria: RTTI_Expression,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        code: RTTI_CodeableConcept,
        description: t.string,
        _description: RTTI_Element,
      }),
    ]),
)
