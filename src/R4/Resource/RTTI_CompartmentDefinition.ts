
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_ContactDetail, IContactDetail } from './RTTI_ContactDetail';
import { RTTI_UsageContext, IUsageContext } from './RTTI_UsageContext';
import { RTTI_CompartmentDefinition_Resource, ICompartmentDefinition_Resource } from './RTTI_CompartmentDefinition_Resource';
import { createEnumType } from '../../EnumType';

export enum CompartmentDefinitionStatusKind {
    draft = 'draft',
    active = 'active',
    retired = 'retired',
    unknown = 'unknown'
}
export enum CompartmentDefinitionCodeKind {
    patient = 'Patient',
    encounter = 'Encounter',
    relatedPerson = 'RelatedPerson',
    practitioner = 'Practitioner',
    device = 'Device'
}


export interface ICompartmentDefinition {

    /**
     * This is a CompartmentDefinition resource
     */
    resourceType: 'CompartmentDefinition';


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * An absolute URI that is used to identify this compartment definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this compartment definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the compartment definition is stored on different servers.
     */
    url?: string;


    /**
     * Extensions for url
     */
    _url?: IElement;


    /**
     * The identifier that is used to identify this version of the compartment definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the compartment definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;


    /**
     * Extensions for version
     */
    _version?: IElement;


    /**
     * A natural language name identifying the compartment definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;


    /**
     * Extensions for name
     */
    _name?: IElement;


    /**
     * The status of this compartment definition. Enables tracking the life-cycle of the content.
     */
    status?: CompartmentDefinitionStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * A Boolean value to indicate that this compartment definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;


    /**
     * Extensions for experimental
     */
    _experimental?: IElement;


    /**
     * The date  (and optionally time) when the compartment definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the compartment definition changes.
     */
    date?: string;


    /**
     * Extensions for date
     */
    _date?: IElement;


    /**
     * The name of the organization or individual that published the compartment definition.
     */
    publisher?: string;


    /**
     * Extensions for publisher
     */
    _publisher?: IElement;


    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: IContactDetail[];


    /**
     * A free text natural language description of the compartment definition from a consumer's perspective.
     */
    description?: string;


    /**
     * Extensions for description
     */
    _description?: IElement;


    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate compartment definition instances.
     */
    useContext?: IUsageContext[];


    /**
     * Explanation of why this compartment definition is needed and why it has been designed as it has.
     */
    purpose?: string;


    /**
     * Extensions for purpose
     */
    _purpose?: IElement;


    /**
     * Which compartment this definition describes.
     */
    code?: CompartmentDefinitionCodeKind;


    /**
     * Extensions for code
     */
    _code?: IElement;


    /**
     * Whether the search syntax is supported,.
     */
    search?: boolean;


    /**
     * Extensions for search
     */
    _search?: IElement;


    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: ICompartmentDefinition_Resource[];

}



export const RTTI_CompartmentDefinition: t.Type<ICompartmentDefinition> = t.recursion('ICompartmentDefinition', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('CompartmentDefinition')
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
            url: t.string,
            _url: RTTI_Element,
            version: t.string,
            _version: RTTI_Element,
            name: t.string,
            _name: RTTI_Element,
            status: createEnumType<CompartmentDefinitionStatusKind>(CompartmentDefinitionStatusKind, 'CompartmentDefinitionStatusKind'),
            _status: RTTI_Element,
            experimental: t.boolean,
            _experimental: RTTI_Element,
            date: t.string,
            _date: RTTI_Element,
            publisher: t.string,
            _publisher: RTTI_Element,
            contact: t.array(RTTI_ContactDetail),
            description: t.string,
            _description: RTTI_Element,
            useContext: t.array(RTTI_UsageContext),
            purpose: t.string,
            _purpose: RTTI_Element,
            code: createEnumType<CompartmentDefinitionCodeKind>(CompartmentDefinitionCodeKind, 'CompartmentDefinitionCodeKind'),
            _code: RTTI_Element,
            search: t.boolean,
            _search: RTTI_Element,
            resource: t.array(RTTI_CompartmentDefinition_Resource)
        })

    ])
);



