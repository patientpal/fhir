
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import { createEnumType } from '../../EnumType'

export enum Encounter_StatusHistoryStatusKind {
                planned = 'planned',
arrived = 'arrived',
triaged = 'triaged',
inProgress = 'in-progress',
onleave = 'onleave',
finished = 'finished',
cancelled = 'cancelled',
enteredInError = 'entered-in-error',
unknown = 'unknown'
            }
const Encounter_StatusHistoryStatusKindKeys = t.keyof({
                [Encounter_StatusHistoryStatusKind.planned]: null,
[Encounter_StatusHistoryStatusKind.arrived]: null,
[Encounter_StatusHistoryStatusKind.triaged]: null,
[Encounter_StatusHistoryStatusKind.inProgress]: null,
[Encounter_StatusHistoryStatusKind.onleave]: null,
[Encounter_StatusHistoryStatusKind.finished]: null,
[Encounter_StatusHistoryStatusKind.cancelled]: null,
[Encounter_StatusHistoryStatusKind.enteredInError]: null,
[Encounter_StatusHistoryStatusKind.unknown]: null
            });


            export interface IEncounter_StatusHistory {
                
                    /**
                     * The time that the episode was in the specified status.
                     */
                    period : IPeriod;
                    
                
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
                     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
                     */
                    status? : Encounter_StatusHistoryStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    
            }
        


        export const RTTI_Encounter_StatusHistory: t.Type<IEncounter_StatusHistory> = t.recursion( 'IEncounter_StatusHistory', () =>
            t.intersection([
                
        t.type({
           period: RTTI_Period
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
status: createEnumType<Encounter_StatusHistoryStatusKind>(Encounter_StatusHistoryStatusKind, 'Encounter_StatusHistoryStatusKind'),
_status: RTTI_Element
        })
        
            ])
        );
        

        
