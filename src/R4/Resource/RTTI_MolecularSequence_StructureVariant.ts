import * as t from 'io-ts'
import { RTTI_integer } from '../Scalar/RTTI_integer'
import { ICodeableConcept, RTTI_CodeableConcept } from './RTTI_CodeableConcept'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import {
  IMolecularSequence_Inner,
  RTTI_MolecularSequence_Inner,
} from './RTTI_MolecularSequence_Inner'
import {
  IMolecularSequence_Outer,
  RTTI_MolecularSequence_Outer,
} from './RTTI_MolecularSequence_Outer'

export interface IMolecularSequence_StructureVariant {
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
	 * Information about chromosome structure variation DNA change type.
	 */
  variantType?: ICodeableConcept

  /**
	 * Used to indicate if the outer and inner start-end values have the same meaning.
	 */
  exact?: boolean

  /**
	 * Extensions for exact
	 */
  _exact?: IElement

  /**
	 * Length of the variant chromosome.
	 */
  length?: number

  /**
	 * Extensions for length
	 */
  _length?: IElement

  /**
	 * Structural variant outer.
	 */
  outer?: IMolecularSequence_Outer

  /**
	 * Structural variant inner.
	 */
  inner?: IMolecularSequence_Inner
}

export const RTTI_MolecularSequence_StructureVariant: t.Type<
  IMolecularSequence_StructureVariant
> = t.recursion('IMolecularSequence_StructureVariant', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    variantType: RTTI_CodeableConcept,
    exact: t.boolean,
    _exact: RTTI_Element,
    length: RTTI_integer,
    _length: RTTI_Element,
    outer: RTTI_MolecularSequence_Outer,
    inner: RTTI_MolecularSequence_Inner,
  }),
)
