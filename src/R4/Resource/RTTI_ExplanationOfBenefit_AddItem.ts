
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';

import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_ExplanationOfBenefit_Adjudication, IExplanationOfBenefit_Adjudication} from './RTTI_ExplanationOfBenefit_Adjudication';
import {RTTI_ExplanationOfBenefit_Detail1, IExplanationOfBenefit_Detail1} from './RTTI_ExplanationOfBenefit_Detail1';




            export interface IExplanationOfBenefit_AddItem {
                
                
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
                     * List of input service items which this service line is intended to replace.
                     */
                    itemSequence? : number[]
                    

                    /**
                     * Extensions for itemSequence
                     */
                    _itemSequence? : IElement[];
                    

                    /**
                     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
                     */
                    detailSequence? : number[]
                    

                    /**
                     * Extensions for detailSequence
                     */
                    _detailSequence? : IElement[];
                    

                    /**
                     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
                     */
                    subDetailSequence? : number[]
                    

                    /**
                     * Extensions for subDetailSequence
                     */
                    _subDetailSequence? : IElement[];
                    

                    /**
                     * The providers who are authorized for the services rendered to the patient.
                     */
                    provider? : IReference[];
                    

                    /**
                     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
                     */
                    billcode? : ICodeableConcept;
                    

                    /**
                     * Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                     */
                    modifier? : ICodeableConcept[];
                    

                    /**
                     * For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program.
                     */
                    programCode? : ICodeableConcept[];
                    

                    /**
                     * The date or dates when the service or product was supplied, performed or completed.
                     */
                    servicedDate? : string;
                    

                    /**
                     * Extensions for servicedDate
                     */
                    _servicedDate? : IElement;
                    

                    /**
                     * The date or dates when the service or product was supplied, performed or completed.
                     */
                    servicedPeriod? : IPeriod;
                    

                    /**
                     * Where the service was provided.
                     */
                    locationCodeableConcept? : ICodeableConcept;
                    

                    /**
                     * Where the service was provided.
                     */
                    locationAddress? : IAddress;
                    

                    /**
                     * Where the service was provided.
                     */
                    locationReference? : IReference;
                    

                    /**
                     * The number of repetitions of a service or product.
                     */
                    quantity? : IQuantity;
                    

                    /**
                     * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
                     */
                    unitPrice? : IMoney;
                    

                    /**
                     * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
                     */
                    factor? : number;
                    

                    /**
                     * Extensions for factor
                     */
                    _factor? : IElement;
                    

                    /**
                     * The quantity times the unit price for an additional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
                     */
                    net? : IMoney;
                    

                    /**
                     * Physical service site on the patient (limb, tooth, etc.).
                     */
                    bodySite? : ICodeableConcept;
                    

                    /**
                     * A region or surface of the site, e.g. limb region or tooth surface(s).
                     */
                    subSite? : ICodeableConcept[];
                    

                    /**
                     * A list of note references to the notes provided below.
                     */
                    noteNumber? : number[]
                    

                    /**
                     * Extensions for noteNumber
                     */
                    _noteNumber? : IElement[];
                    

                    /**
                     * The adjudication results.
                     */
                    adjudication? : IExplanationOfBenefit_Adjudication[];
                    

                    /**
                     * The second-tier service adjudications for payor added services.
                     */
                    detail? : IExplanationOfBenefit_Detail1[];
                    
            }
        


        export const RTTI_ExplanationOfBenefit_AddItem: t.Type<IExplanationOfBenefit_AddItem> = t.recursion( 'IExplanationOfBenefit_AddItem', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
itemSequence: t.array(t.number),
_itemSequence: t.array(RTTI_Element),
detailSequence: t.array(t.number),
_detailSequence: t.array(RTTI_Element),
subDetailSequence: t.array(t.number),
_subDetailSequence: t.array(RTTI_Element),
provider: t.array(RTTI_Reference),
billcode: RTTI_CodeableConcept,
modifier: t.array(RTTI_CodeableConcept),
programCode: t.array(RTTI_CodeableConcept),
servicedDate: t.string,
_servicedDate: RTTI_Element,
servicedPeriod: RTTI_Period,
locationCodeableConcept: RTTI_CodeableConcept,
locationAddress: RTTI_Address,
locationReference: RTTI_Reference,
quantity: RTTI_Quantity,
unitPrice: RTTI_Money,
factor: t.number,
_factor: RTTI_Element,
net: RTTI_Money,
bodySite: RTTI_CodeableConcept,
subSite: t.array(RTTI_CodeableConcept),
noteNumber: t.array(t.number),
_noteNumber: t.array(RTTI_Element),
adjudication: t.array(RTTI_ExplanationOfBenefit_Adjudication),
detail: t.array(RTTI_ExplanationOfBenefit_Detail1)
        })
        
        );
        

        