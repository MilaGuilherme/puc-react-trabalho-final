import { useState, useEffect } from 'react';
import { getResource } from '../../../api/dndApi'

export function useResource(url) {
    const [resource, setResource] = useState([]);

    async function getResources() {
        if (url) {
            let resource = await getResource(url);
            setResource(resource);
            return resource;
        }
    }

    useEffect(() => {
        getResources();
    }, [url])

    return resource;
}