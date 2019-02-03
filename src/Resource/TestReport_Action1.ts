
        import { Extension } from '../Resource/Extension';
import { TestReport_Assert } from '../Resource/TestReport_Assert';
import { TestReport_Operation } from '../Resource/TestReport_Operation';

        

        /**
         * A summary of information based on the results of executing a TestScript. 
         */
        export class TestReport_Action1  {

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
                Operation? : TestReport_Operation;
                

                /**
                 * The results of the assertion performed on the previous operations.
                 */
                Assert? : TestReport_Assert;
                
        }
        