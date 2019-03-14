
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
translations: t.boolean,
_translations: RTTI_Element
        });
        

        export var RTTI_TerminologyCapabilities_ValidateCode:any = t.intersection([mandatory, partial]);
        

export type ITerminologyCapabilities_ValidateCode = t.TypeOf<typeof RTTI_TerminologyCapabilities_ValidateCode>;
        
        