
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum FlagStatusKind {
                active,
inactive,
enteredInError
            }

        /**
         * Prospective warnings of potential issues when providing care to the patient. 
         */
        export class Flag  {

            constructor() {
                this.Code = new CodeableConcept();
this.Subject = new Reference();
            }

            
                /**
                 * This is a Flag resource
                 */
                ResourceType: string = 'Flag;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Business identifiers assigned to this flag by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Supports basic workflow.
                 */
                Status? : FlagStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Allows a flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
                 */
                Category? : Array<CodeableConcept>;
                

                /**
                 * The coded value or textual component of the flag to display to the user.
                 */
                Code : CodeableConcept;
                

                /**
                 * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
                 */
                Subject : Reference;
                

                /**
                 * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
                 */
                Period? : Period;
                

                /**
                 * This alert is only relevant during the encounter.
                 */
                Encounter? : Reference;
                

                /**
                 * The person, organization or device that created the flag.
                 */
                Author? : Reference;
                
        }
        