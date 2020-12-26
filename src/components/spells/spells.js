import React from 'react';
import { ContentCard } from "../contentCard";
import { useSpells } from './hooks';

export const Spells = () =>{
    const url = "/api/spells/";
    const spells = useSpells(url);
    if( spells.length > 0)
    { return <ContentCard name="Spells" type="spells" content={ spells }/> } 
    else return (<></>);
}
