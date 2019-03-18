
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface ICoverage_Class {
                
                    /**
                     * The type of classification for which an insurer-specific class tag or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
                     */
                    type : ICoding;
                    
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * For example, the Group or Plan number.
                     */
                    value? : string;
                    

                    /**
                     * Extensions for value
                     */
                    _value? : IElement;
                    

                    /**
                     * A short description for the class.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    
            }
        


        export const RTTI_Coverage_Class: t.Type<ICoverage_Class> = t.recursion( 'ICoverage_Class', () =>
            t.intersection([
                
        t.type({
           type: RTTI_Coding
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
value: t.string,
_value: RTTI_Element,
name: t.string,
_name: RTTI_Element
        })
        
            ])
        );
        

        