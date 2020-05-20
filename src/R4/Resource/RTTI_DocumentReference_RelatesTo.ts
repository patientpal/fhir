import * as t from 'io-ts'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import { IReference, RTTI_Reference } from './RTTI_Reference'
export enum DocumentReference_RelatesToCodeKind {
  _replaces = 'replaces',
  _transforms = 'transforms',
  _signs = 'signs',
  _appends = 'appends',
}
import { createEnumType } from '../../EnumType'

export interface IDocumentReference_RelatesTo {
  /**
	 * The target document of this relationship.
	 */
  target: IReference

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
	 * The type of relationship that this document has with anther document.
	 */
  code?: DocumentReference_RelatesToCodeKind

  /**
	 * Extensions for code
	 */
  _code?: IElement
}

export const RTTI_DocumentReference_RelatesTo: t.Type<
  IDocumentReference_RelatesTo
> = t.recursion('IDocumentReference_RelatesTo', () =>
  t.intersection([
    t.type({
      target: RTTI_Reference,
    }),
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: createEnumType<DocumentReference_RelatesToCodeKind>(
        DocumentReference_RelatesToCodeKind,
        'DocumentReference_RelatesToCodeKind',
      ),
      _code: RTTI_Element,
    }),
  ]),
)
