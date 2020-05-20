import * as t from 'io-ts'
import { RTTI_canonical } from '../Scalar/RTTI_canonical'
import { IElement, RTTI_Element } from './RTTI_Element'
import { IExtension, RTTI_Extension } from './RTTI_Extension'
import {
  ITerminologyCapabilities_Version,
  RTTI_TerminologyCapabilities_Version,
} from './RTTI_TerminologyCapabilities_Version'

export interface ITerminologyCapabilities_CodeSystem {
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
	 * URI for the Code System.
	 */
  uri?: string

  /**
	 * For the code system, a list of versions that are supported by the server.
	 */
  version?: ITerminologyCapabilities_Version[]

  /**
	 * True if subsumption is supported for this version of the code system.
	 */
  subsumption?: boolean

  /**
	 * Extensions for subsumption
	 */
  _subsumption?: IElement
}

export const RTTI_TerminologyCapabilities_CodeSystem: t.Type<
  ITerminologyCapabilities_CodeSystem
> = t.recursion('ITerminologyCapabilities_CodeSystem', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    uri: RTTI_canonical,
    version: t.array(RTTI_TerminologyCapabilities_Version),
    subsumption: t.boolean,
    _subsumption: RTTI_Element,
  }),
)
