import { IAccount, RTTI_Account } from '../Resource/RTTI_Account'
import { IActivityDefinition, RTTI_ActivityDefinition } from '../Resource/RTTI_ActivityDefinition'
import { IAdverseEvent, RTTI_AdverseEvent } from '../Resource/RTTI_AdverseEvent'
import { IAllergyIntolerance, RTTI_AllergyIntolerance } from '../Resource/RTTI_AllergyIntolerance'
import { IAppointment, RTTI_Appointment } from '../Resource/RTTI_Appointment'
import { IAppointmentResponse, RTTI_AppointmentResponse } from '../Resource/RTTI_AppointmentResponse'
import { IAuditEvent, RTTI_AuditEvent } from '../Resource/RTTI_AuditEvent'
import { IBasic, RTTI_Basic } from '../Resource/RTTI_Basic'
import { IBinary, RTTI_Binary } from '../Resource/RTTI_Binary'
import { IBiologicallyDerivedProduct, RTTI_BiologicallyDerivedProduct } from '../Resource/RTTI_BiologicallyDerivedProduct'
import { IBodyStructure, RTTI_BodyStructure } from '../Resource/RTTI_BodyStructure'
import { IBundle, RTTI_Bundle } from '../Resource/RTTI_Bundle'
import { ICapabilityStatement, RTTI_CapabilityStatement } from '../Resource/RTTI_CapabilityStatement'
import { ICarePlan, RTTI_CarePlan } from '../Resource/RTTI_CarePlan'
import { ICareTeam, RTTI_CareTeam } from '../Resource/RTTI_CareTeam'
import { IChargeItem, RTTI_ChargeItem } from '../Resource/RTTI_ChargeItem'
import { IChargeItemDefinition, RTTI_ChargeItemDefinition } from '../Resource/RTTI_ChargeItemDefinition'
import { IClaim, RTTI_Claim } from '../Resource/RTTI_Claim'
import { IClaimResponse, RTTI_ClaimResponse } from '../Resource/RTTI_ClaimResponse'
import { IClinicalImpression, RTTI_ClinicalImpression } from '../Resource/RTTI_ClinicalImpression'
import { ICodeSystem, RTTI_CodeSystem } from '../Resource/RTTI_CodeSystem'
import { ICommunication, RTTI_Communication } from '../Resource/RTTI_Communication'
import { ICommunicationRequest, RTTI_CommunicationRequest } from '../Resource/RTTI_CommunicationRequest'
import { ICompartmentDefinition, RTTI_CompartmentDefinition } from '../Resource/RTTI_CompartmentDefinition'
import { IComposition, RTTI_Composition } from '../Resource/RTTI_Composition'
import { IConceptMap, RTTI_ConceptMap } from '../Resource/RTTI_ConceptMap'
import { ICondition, RTTI_Condition } from '../Resource/RTTI_Condition'
import { IConsent, RTTI_Consent } from '../Resource/RTTI_Consent'
import { IContract, RTTI_Contract } from '../Resource/RTTI_Contract'
import { ICoverage, RTTI_Coverage } from '../Resource/RTTI_Coverage'
import { ICoverageEligibilityRequest, RTTI_CoverageEligibilityRequest } from '../Resource/RTTI_CoverageEligibilityRequest'
import { ICoverageEligibilityResponse, RTTI_CoverageEligibilityResponse } from '../Resource/RTTI_CoverageEligibilityResponse'
import { IDetectedIssue, RTTI_DetectedIssue } from '../Resource/RTTI_DetectedIssue'
import { IDevice, RTTI_Device } from '../Resource/RTTI_Device'
import { IDeviceDefinition, RTTI_DeviceDefinition } from '../Resource/RTTI_DeviceDefinition'
import { IDeviceMetric, RTTI_DeviceMetric } from '../Resource/RTTI_DeviceMetric'
import { IDeviceRequest, RTTI_DeviceRequest } from '../Resource/RTTI_DeviceRequest'
import { IDeviceUseStatement, RTTI_DeviceUseStatement } from '../Resource/RTTI_DeviceUseStatement'
import { IDiagnosticReport, RTTI_DiagnosticReport } from '../Resource/RTTI_DiagnosticReport'
import { IDocumentManifest, RTTI_DocumentManifest } from '../Resource/RTTI_DocumentManifest'
import { IDocumentReference, RTTI_DocumentReference } from '../Resource/RTTI_DocumentReference'
import { IEncounter, RTTI_Encounter } from '../Resource/RTTI_Encounter'
import { IEndpoint, RTTI_Endpoint } from '../Resource/RTTI_Endpoint'
import { IEnrollmentRequest, RTTI_EnrollmentRequest } from '../Resource/RTTI_EnrollmentRequest'
import { IEnrollmentResponse, RTTI_EnrollmentResponse } from '../Resource/RTTI_EnrollmentResponse'
import { IEpisodeOfCare, RTTI_EpisodeOfCare } from '../Resource/RTTI_EpisodeOfCare'
import { IEventDefinition, RTTI_EventDefinition } from '../Resource/RTTI_EventDefinition'
import { IExampleScenario, RTTI_ExampleScenario } from '../Resource/RTTI_ExampleScenario'
import { IExplanationOfBenefit, RTTI_ExplanationOfBenefit } from '../Resource/RTTI_ExplanationOfBenefit'
import { IFamilyMemberHistory, RTTI_FamilyMemberHistory } from '../Resource/RTTI_FamilyMemberHistory'
import { IFlag, RTTI_Flag } from '../Resource/RTTI_Flag'
import { IGoal, RTTI_Goal } from '../Resource/RTTI_Goal'
import { IGraphDefinition, RTTI_GraphDefinition } from '../Resource/RTTI_GraphDefinition'
import { IGroup, RTTI_Group } from '../Resource/RTTI_Group'
import { IGuidanceResponse, RTTI_GuidanceResponse } from '../Resource/RTTI_GuidanceResponse'
import { IHealthcareService, RTTI_HealthcareService } from '../Resource/RTTI_HealthcareService'
import { IImagingStudy, RTTI_ImagingStudy } from '../Resource/RTTI_ImagingStudy'
import { IImmunization, RTTI_Immunization } from '../Resource/RTTI_Immunization'
import { IImmunizationEvaluation, RTTI_ImmunizationEvaluation } from '../Resource/RTTI_ImmunizationEvaluation'
import { IImmunizationRecommendation, RTTI_ImmunizationRecommendation } from '../Resource/RTTI_ImmunizationRecommendation'
import { IImplementationGuide, RTTI_ImplementationGuide } from '../Resource/RTTI_ImplementationGuide'
import { IInsurancePlan, RTTI_InsurancePlan } from '../Resource/RTTI_InsurancePlan'
import { IInvoice, RTTI_Invoice } from '../Resource/RTTI_Invoice'
import { ILibrary, RTTI_Library } from '../Resource/RTTI_Library'
import { ILinkage, RTTI_Linkage } from '../Resource/RTTI_Linkage'
import { IList, RTTI_List } from '../Resource/RTTI_List'
import { ILocation, RTTI_Location } from '../Resource/RTTI_Location'
import { IMeasure, RTTI_Measure } from '../Resource/RTTI_Measure'
import { IMeasureReport, RTTI_MeasureReport } from '../Resource/RTTI_MeasureReport'
import { IMedia, RTTI_Media } from '../Resource/RTTI_Media'
import { IMedication, RTTI_Medication } from '../Resource/RTTI_Medication'
import { IMedicationAdministration, RTTI_MedicationAdministration } from '../Resource/RTTI_MedicationAdministration'
import { IMedicationDispense, RTTI_MedicationDispense } from '../Resource/RTTI_MedicationDispense'
import { IMedicationKnowledge, RTTI_MedicationKnowledge } from '../Resource/RTTI_MedicationKnowledge'
import { IMedicationRequest, RTTI_MedicationRequest } from '../Resource/RTTI_MedicationRequest'
import { IMedicationStatement, RTTI_MedicationStatement } from '../Resource/RTTI_MedicationStatement'
import { IMedicinalProduct, RTTI_MedicinalProduct } from '../Resource/RTTI_MedicinalProduct'
import { IMedicinalProductAuthorization, RTTI_MedicinalProductAuthorization } from '../Resource/RTTI_MedicinalProductAuthorization'
import { IMedicinalProductContraindication, RTTI_MedicinalProductContraindication } from '../Resource/RTTI_MedicinalProductContraindication'
import { IMedicinalProductIndication, RTTI_MedicinalProductIndication } from '../Resource/RTTI_MedicinalProductIndication'
import { IMedicinalProductIngredient, RTTI_MedicinalProductIngredient } from '../Resource/RTTI_MedicinalProductIngredient'
import { IMedicinalProductInteraction, RTTI_MedicinalProductInteraction } from '../Resource/RTTI_MedicinalProductInteraction'
import { IMedicinalProductManufactured, RTTI_MedicinalProductManufactured } from '../Resource/RTTI_MedicinalProductManufactured'
import { IMedicinalProductPackaged, RTTI_MedicinalProductPackaged } from '../Resource/RTTI_MedicinalProductPackaged'
import { IMedicinalProductPharmaceutical, RTTI_MedicinalProductPharmaceutical } from '../Resource/RTTI_MedicinalProductPharmaceutical'
import { IMedicinalProductUndesirableEffect, RTTI_MedicinalProductUndesirableEffect } from '../Resource/RTTI_MedicinalProductUndesirableEffect'
import { IMessageDefinition, RTTI_MessageDefinition } from '../Resource/RTTI_MessageDefinition'
import { IMessageHeader, RTTI_MessageHeader } from '../Resource/RTTI_MessageHeader'
import { INamingSystem, RTTI_NamingSystem } from '../Resource/RTTI_NamingSystem'
import { INutritionOrder, RTTI_NutritionOrder } from '../Resource/RTTI_NutritionOrder'
import { IObservation, RTTI_Observation } from '../Resource/RTTI_Observation'
import { IObservationDefinition, RTTI_ObservationDefinition } from '../Resource/RTTI_ObservationDefinition'
import { IOperationDefinition, RTTI_OperationDefinition } from '../Resource/RTTI_OperationDefinition'
import { IOperationOutcome, RTTI_OperationOutcome } from '../Resource/RTTI_OperationOutcome'
import { IOrganization, RTTI_Organization } from '../Resource/RTTI_Organization'
import { IOrganizationAffiliation, RTTI_OrganizationAffiliation } from '../Resource/RTTI_OrganizationAffiliation'
import { IParameters, RTTI_Parameters } from '../Resource/RTTI_Parameters'
import { IPatient, RTTI_Patient } from '../Resource/RTTI_Patient'
import { IPaymentNotice, RTTI_PaymentNotice } from '../Resource/RTTI_PaymentNotice'
import { IPaymentReconciliation, RTTI_PaymentReconciliation } from '../Resource/RTTI_PaymentReconciliation'
import { IPerson, RTTI_Person } from '../Resource/RTTI_Person'
import { IPlanDefinition, RTTI_PlanDefinition } from '../Resource/RTTI_PlanDefinition'
import { IPractitioner, RTTI_Practitioner } from '../Resource/RTTI_Practitioner'
import { IPractitionerRole, RTTI_PractitionerRole } from '../Resource/RTTI_PractitionerRole'
import { IProcedure, RTTI_Procedure } from '../Resource/RTTI_Procedure'
import { IProvenance, RTTI_Provenance } from '../Resource/RTTI_Provenance'
import { IQuestionnaire, RTTI_Questionnaire } from '../Resource/RTTI_Questionnaire'
import { IQuestionnaireResponse, RTTI_QuestionnaireResponse } from '../Resource/RTTI_QuestionnaireResponse'
import { IRelatedPerson, RTTI_RelatedPerson } from '../Resource/RTTI_RelatedPerson'
import { IRequestGroup, RTTI_RequestGroup } from '../Resource/RTTI_RequestGroup'
import { IResearchStudy, RTTI_ResearchStudy } from '../Resource/RTTI_ResearchStudy'
import { IResearchSubject, RTTI_ResearchSubject } from '../Resource/RTTI_ResearchSubject'
import { IRiskAssessment, RTTI_RiskAssessment } from '../Resource/RTTI_RiskAssessment'
import { ISchedule, RTTI_Schedule } from '../Resource/RTTI_Schedule'
import { ISearchParameter, RTTI_SearchParameter } from '../Resource/RTTI_SearchParameter'
import { IServiceRequest, RTTI_ServiceRequest } from '../Resource/RTTI_ServiceRequest'
import { ISlot, RTTI_Slot } from '../Resource/RTTI_Slot'
import { ISpecimen, RTTI_Specimen } from '../Resource/RTTI_Specimen'
import { ISpecimenDefinition, RTTI_SpecimenDefinition } from '../Resource/RTTI_SpecimenDefinition'
import { IStructureDefinition, RTTI_StructureDefinition } from '../Resource/RTTI_StructureDefinition'
import { IStructureMap, RTTI_StructureMap } from '../Resource/RTTI_StructureMap'
import { ISubscription, RTTI_Subscription } from '../Resource/RTTI_Subscription'
import { ISubstance, RTTI_Substance } from '../Resource/RTTI_Substance'
import { ISubstancePolymer, RTTI_SubstancePolymer } from '../Resource/RTTI_SubstancePolymer'
import { ISubstanceReferenceInformation, RTTI_SubstanceReferenceInformation } from '../Resource/RTTI_SubstanceReferenceInformation'
import { ISubstanceSpecification, RTTI_SubstanceSpecification } from '../Resource/RTTI_SubstanceSpecification'
import { ISupplyDelivery, RTTI_SupplyDelivery } from '../Resource/RTTI_SupplyDelivery'
import { ISupplyRequest, RTTI_SupplyRequest } from '../Resource/RTTI_SupplyRequest'
import { ITask, RTTI_Task } from '../Resource/RTTI_Task'
import { ITerminologyCapabilities, RTTI_TerminologyCapabilities } from '../Resource/RTTI_TerminologyCapabilities'
import { ITestReport, RTTI_TestReport } from '../Resource/RTTI_TestReport'
import { ITestScript, RTTI_TestScript } from '../Resource/RTTI_TestScript'
import { IValueSet, RTTI_ValueSet } from '../Resource/RTTI_ValueSet'
import { IVerificationResult, RTTI_VerificationResult } from '../Resource/RTTI_VerificationResult'
import { IVisionPrescription, RTTI_VisionPrescription } from '../Resource/RTTI_VisionPrescription'


import * as t from 'io-ts'

export type IResourceList =
    IAccount |
    IActivityDefinition |
    IAdverseEvent |
    IAllergyIntolerance |
    IAppointment |
    IAppointmentResponse |
    IAuditEvent |
    IBasic |
    IBinary |
    IBiologicallyDerivedProduct |
    IBodyStructure |
    IBundle |
    ICapabilityStatement |
    ICarePlan |
    ICareTeam |
    IChargeItem |
    IChargeItemDefinition |
    IClaim |
    IClaimResponse |
    IClinicalImpression |
    ICodeSystem |
    ICommunication |
    ICommunicationRequest |
    ICompartmentDefinition |
    IComposition |
    IConceptMap |
    ICondition |
    IConsent |
    IContract |
    ICoverage |
    ICoverageEligibilityRequest |
    ICoverageEligibilityResponse |
    IDetectedIssue |
    IDevice |
    IDeviceDefinition |
    IDeviceMetric |
    IDeviceRequest |
    IDeviceUseStatement |
    IDiagnosticReport |
    IDocumentManifest |
    IDocumentReference |
    IEncounter |
    IEndpoint |
    IEnrollmentRequest |
    IEnrollmentResponse |
    IEpisodeOfCare |
    IEventDefinition |
    IExampleScenario |
    IExplanationOfBenefit |
    IFamilyMemberHistory |
    IFlag |
    IGoal |
    IGraphDefinition |
    IGroup |
    IGuidanceResponse |
    IHealthcareService |
    IImagingStudy |
    IImmunization |
    IImmunizationEvaluation |
    IImmunizationRecommendation |
    IImplementationGuide |
    IInsurancePlan |
    IInvoice |
    ILibrary |
    ILinkage |
    IList |
    ILocation |
    IMeasure |
    IMeasureReport |
    IMedia |
    IMedication |
    IMedicationAdministration |
    IMedicationDispense |
    IMedicationKnowledge |
    IMedicationRequest |
    IMedicationStatement |
    IMedicinalProduct |
    IMedicinalProductAuthorization |
    IMedicinalProductContraindication |
    IMedicinalProductIndication |
    IMedicinalProductIngredient |
    IMedicinalProductInteraction |
    IMedicinalProductManufactured |
    IMedicinalProductPackaged |
    IMedicinalProductPharmaceutical |
    IMedicinalProductUndesirableEffect |
    IMessageDefinition |
    IMessageHeader |
    INamingSystem |
    INutritionOrder |
    IObservation |
    IObservationDefinition |
    IOperationDefinition |
    IOperationOutcome |
    IOrganization |
    IOrganizationAffiliation |
    IParameters |
    IPatient |
    IPaymentNotice |
    IPaymentReconciliation |
    IPerson |
    IPlanDefinition |
    IPractitioner |
    IPractitionerRole |
    IProcedure |
    IProvenance |
    IQuestionnaire |
    IQuestionnaireResponse |
    IRelatedPerson |
    IRequestGroup |
    IResearchStudy |
    IResearchSubject |
    IRiskAssessment |
    ISchedule |
    ISearchParameter |
    IServiceRequest |
    ISlot |
    ISpecimen |
    ISpecimenDefinition |
    IStructureDefinition |
    IStructureMap |
    ISubscription |
    ISubstance |
    ISubstancePolymer |
    ISubstanceReferenceInformation |
    ISubstanceSpecification |
    ISupplyDelivery |
    ISupplyRequest |
    ITask |
    ITerminologyCapabilities |
    ITestReport |
    ITestScript |
    IValueSet |
    IVerificationResult |
    IVisionPrescription

export const RTTI_ResourceList: t.Type<IResourceList> = t.recursion('IResourceList', () =>
    t.union([
        RTTI_Account,
        RTTI_ActivityDefinition,
        RTTI_AdverseEvent,
        RTTI_AllergyIntolerance,
        RTTI_Appointment,
        RTTI_AppointmentResponse,
        RTTI_AuditEvent,
        RTTI_Basic,
        RTTI_Binary,
        RTTI_BiologicallyDerivedProduct,
        RTTI_BodyStructure,
        RTTI_Bundle,
        RTTI_CapabilityStatement,
        RTTI_CarePlan,
        RTTI_CareTeam,
        RTTI_ChargeItem,
        RTTI_ChargeItemDefinition,
        RTTI_Claim,
        RTTI_ClaimResponse,
        RTTI_ClinicalImpression,
        RTTI_CodeSystem,
        RTTI_Communication,
        RTTI_CommunicationRequest,
        RTTI_CompartmentDefinition,
        RTTI_Composition,
        RTTI_ConceptMap,
        RTTI_Condition,
        RTTI_Consent,
        RTTI_Contract,
        RTTI_Coverage,
        RTTI_CoverageEligibilityRequest,
        RTTI_CoverageEligibilityResponse,
        RTTI_DetectedIssue,
        RTTI_Device,
        RTTI_DeviceDefinition,
        RTTI_DeviceMetric,
        RTTI_DeviceRequest,
        RTTI_DeviceUseStatement,
        RTTI_DiagnosticReport,
        RTTI_DocumentManifest,
        RTTI_DocumentReference,
        RTTI_Encounter,
        RTTI_Endpoint,
        RTTI_EnrollmentRequest,
        RTTI_EnrollmentResponse,
        RTTI_EpisodeOfCare,
        RTTI_EventDefinition,
        RTTI_ExampleScenario,
        RTTI_ExplanationOfBenefit,
        RTTI_FamilyMemberHistory,
        RTTI_Flag,
        RTTI_Goal,
        RTTI_GraphDefinition,
        RTTI_Group,
        RTTI_GuidanceResponse,
        RTTI_HealthcareService,
        RTTI_ImagingStudy,
        RTTI_Immunization,
        RTTI_ImmunizationEvaluation,
        RTTI_ImmunizationRecommendation,
        RTTI_ImplementationGuide,
        RTTI_InsurancePlan,
        RTTI_Invoice,
        RTTI_Library,
        RTTI_Linkage,
        RTTI_List,
        RTTI_Location,
        RTTI_Measure,
        RTTI_MeasureReport,
        RTTI_Media,
        RTTI_Medication,
        RTTI_MedicationAdministration,
        RTTI_MedicationDispense,
        RTTI_MedicationKnowledge,
        RTTI_MedicationRequest,
        RTTI_MedicationStatement,
        RTTI_MedicinalProduct,
        RTTI_MedicinalProductAuthorization,
        RTTI_MedicinalProductContraindication,
        RTTI_MedicinalProductIndication,
        RTTI_MedicinalProductIngredient,
        RTTI_MedicinalProductInteraction,
        RTTI_MedicinalProductManufactured,
        RTTI_MedicinalProductPackaged,
        RTTI_MedicinalProductPharmaceutical,
        RTTI_MedicinalProductUndesirableEffect,
        RTTI_MessageDefinition,
        RTTI_MessageHeader,
        RTTI_NamingSystem,
        RTTI_NutritionOrder,
        RTTI_Observation,
        RTTI_ObservationDefinition,
        RTTI_OperationDefinition,
        RTTI_OperationOutcome,
        RTTI_Organization,
        RTTI_OrganizationAffiliation,
        RTTI_Parameters,
        RTTI_Patient,
        RTTI_PaymentNotice,
        RTTI_PaymentReconciliation,
        RTTI_Person,
        RTTI_PlanDefinition,
        RTTI_Practitioner,
        RTTI_PractitionerRole,
        RTTI_Procedure,
        RTTI_Provenance,
        RTTI_Questionnaire,
        RTTI_QuestionnaireResponse,
        RTTI_RelatedPerson,
        RTTI_RequestGroup,
        RTTI_ResearchStudy,
        RTTI_ResearchSubject,
        RTTI_RiskAssessment,
        RTTI_Schedule,
        RTTI_SearchParameter,
        RTTI_ServiceRequest,
        RTTI_Slot,
        RTTI_Specimen,
        RTTI_SpecimenDefinition,
        RTTI_StructureDefinition,
        RTTI_StructureMap,
        RTTI_Subscription,
        RTTI_Substance,
        RTTI_SubstancePolymer,
        RTTI_SubstanceReferenceInformation,
        RTTI_SubstanceSpecification,
        RTTI_SupplyDelivery,
        RTTI_SupplyRequest,
        RTTI_Task,
        RTTI_TerminologyCapabilities,
        RTTI_TestReport,
        RTTI_TestScript,
        RTTI_ValueSet,
        RTTI_VerificationResult,
        RTTI_VisionPrescription,
    ]),
)
