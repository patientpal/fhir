import * as t from 'io-ts'
import { RTTI_markdown } from '../Scalar/RTTI_markdown'
import { IElement, RTTI_Element } from './RTTI_Element'
import {
  IExampleScenario_Step,
  RTTI_ExampleScenario_Step,
} from './RTTI_ExampleScenario_Step'
import { IExtension, RTTI_Extension } from './RTTI_Extension'

export interface IExampleScenario_Alternative {
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
	 * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
	 */
  title?: string

  /**
	 * Extensions for title
	 */
  _title?: IElement

  /**
	 * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
	 */
  description?: string

  /**
	 * Extensions for description
	 */
  _description?: IElement

  /**
	 * What happens in each alternative option.
	 */
  step?: IExampleScenario_Step[]
}

export const RTTI_ExampleScenario_Alternative: t.Type<
  IExampleScenario_Alternative
> = t.recursion('IExampleScenario_Alternative', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    title: t.string,
    _title: RTTI_Element,
    description: RTTI_markdown,
    _description: RTTI_Element,
    step: t.array(RTTI_ExampleScenario_Step),
  }),
)
