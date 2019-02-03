
        import { Extension } from '../Resource/Extension';
import { TestScript_Assert } from '../Resource/TestScript_Assert';
import { TestScript_Operation } from '../Resource/TestScript_Operation';

        

        /**
         * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. 
         */
        export class TestScript_Action1  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * An operation would involve a REST request to a server.
                 */
                Operation? : TestScript_Operation;
                

                /**
                 * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
                 */
                Assert? : TestScript_Assert;
                
        }
        