import { SET_SPELLS } from '../actions/spells';

const spellList = [];
const initialState = {
    spellList,
};

export const spells = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPELLS:
            var payload =  {...action.payload.spell}
            if (spellList.find(( {index})=> index === payload.index)) {
                payload =  {};
                return state;
            }

            else { 
            spellList.push(payload);
            console.log(spellList);
            return {
                ...state,
                spellList
            }
        }
            
        default:
            return state;
    }
}