import { useState, useEffect } from 'react';
import { getResourceList } from '../../../api/dndApi'

export function useResourceList() {
    
    const [resourceList, setResourceList] = useState([]);

    async function getResources(){
        let resource =  await getResourceList();
        resource = Object.entries(resource);
        setResourceList(resource);
        return resource;
    }
    
    useEffect(()=>{
        resourceList.length > 0 ? setResourceList([]) : getResources();
    },[])
    
    return resourceList;
}