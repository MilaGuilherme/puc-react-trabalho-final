import { useState, useEffect } from 'react';
import { getResource } from '../../../api/dndApi'

export function useSpells(url) {
    const [resource, setResource] = useState([]);
    
    async function getResources(){
        let resource =  await getResource(url);
        resource = Object.entries(resource.results);
        resource =  resource.flat();
        resource = resource.filter(item => typeof item != "string" )
        setResource(resource);
        return resource;
    }

    useEffect(()=>{
        getResources();
    },[])
    
    return resource;
}