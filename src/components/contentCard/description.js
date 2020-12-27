import React, { useEffect, useState } from 'react'
import { useResource } from './hooks';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSpell } from '../../actions';


export const Description = (props) => {
    let cont = props.content;
    const content = useResource(cont.url, props.type);
    const dispatch = useDispatch();
    const globalState = useSelector(state => state);
    const [buttonText, setButtonText] = useState("");

    useEffect(() => {
        if (globalState){
            if(globalState.spells.spellList){
                let spells = globalState.spells.spellList;
                let i = spells.findIndex(( {index})=> index === cont.index);
                if(i != -1){
                    setButtonText('Remove from spellbook')
                }
                else {
                    setButtonText('Add to spellbook')
                }
            }
        }
    },[globalState])

    function buttonAction() {
        if (props.type == 'spells') {
            return dispatch(setSpell({ spell: cont }))
        }
        else return
    }

    return (
        <>
            <div>
                <button type="button" className="btn btn-primary" onClick={() => buttonAction()}> {buttonText}</button>
            </div>
            <br />
            {content}
        </>
    );
}