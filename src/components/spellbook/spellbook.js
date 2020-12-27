import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSpell } from '../../actions';


export const Spellbook = () => {
    const spells = useSelector(state => state.spells);
    const dispatch = useDispatch();

    if(spells.spellList) {
        return (
            <div className="card">
                <h2 className="card-header">Spellbook</h2>
                {spells.spellList.map((m) => {
                    return (
                        <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} key={m.index}>
                            {m.name}
                            <button className="btn btn-primary" onClick={() => dispatch(setSpell({ spell: m }))}>Remove</button>
                        </div>);
                })}
            </div>
        );
    }
    else {return (
        <div className="card">
            <h2 className="card-header">Spellbook</h2>
        </div>
    );}
}