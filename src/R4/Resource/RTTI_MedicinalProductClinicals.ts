
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_MedicinalProductClinicals_UndesirableEffects, IMedicinalProductClinicals_UndesirableEffects} from './RTTI_MedicinalProductClinicals_UndesirableEffects';
import {RTTI_MedicinalProductClinicals_TherapeuticIndication, IMedicinalProductClinicals_TherapeuticIndication} from './RTTI_MedicinalProductClinicals_TherapeuticIndication';
import {RTTI_MedicinalProductClinicals_Contraindication, IMedicinalProductClinicals_Contraindication} from './RTTI_MedicinalProductClinicals_Contraindication';
import {RTTI_MedicinalProductClinicals_Interactions, IMedicinalProductClinicals_Interactions} from './RTTI_MedicinalProductClinicals_Interactions';




            export interface IMedicinalProductClinicals {
                
                    /**
                     * This is a MedicinalProductClinicals resource
                     */
                    resourceType: 'MedicinalProductClinicals';
                    

                    /**
                     * Indication for the Medicinal Product.
                     */
                    therapeuticIndication : IMedicinalProductClinicals_TherapeuticIndication[];
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Describe the undesirable effects of the medicinal product.
                     */
                    undesirableEffects? : IMedicinalProductClinicals_UndesirableEffects[];
                    

                    /**
                     * Contraindication for the medicinal product.
                     */
                    contraindication? : IMedicinalProductClinicals_Contraindication[];
                    

                    /**
                     * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
                     */
                    interactions? : IMedicinalProductClinicals_Interactions[];
                    
            }
        


        export const RTTI_MedicinalProductClinicals: t.Type<IMedicinalProductClinicals> = t.recursion( 'IMedicinalProductClinicals', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('MedicinalProductClinicals'),
therapeuticIndication: t.array(RTTI_MedicinalProductClinicals_TherapeuticIndication)
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
undesirableEffects: t.array(RTTI_MedicinalProductClinicals_UndesirableEffects),
contraindication: t.array(RTTI_MedicinalProductClinicals_Contraindication),
interactions: t.array(RTTI_MedicinalProductClinicals_Interactions)
        })
        
            ])
        );
        

        