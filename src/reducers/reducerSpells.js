import { SET_SPELLS } from '../actions/setSpell';

const spellList = [];
const initialState = {
    spellList,
};

export const spells = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPELLS:
            var payload =  action.payload.spell
            if (spellList.find(( {index})=> index === payload.index)) {
                let i = spellList.findIndex(( {index})=> index === payload.index)
                var l = spellList.splice(i,1)
                return {
                    ...state,
                    l
                }
            }

            else { 
            spellList.push(payload);
            return {
                ...state,
                spellList
            }
        }
            
        default:
            return state;
    }
}