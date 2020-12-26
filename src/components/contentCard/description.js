import React from 'react'
import { useResource } from './hooks';

export const Description = (props) =>{
    const content = useResource(props.url).toString();
    console.log(content);
    return (
        <>
            teste
        </>
    );
}