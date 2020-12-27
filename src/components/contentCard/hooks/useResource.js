import { useState, useEffect } from 'react';
import { FormatResource } from './formatResource';
import { getResource } from '../../../api/dndApi'

export function useResource(url,type) {
    const [resource, setResource] = useState(null);

    async function getResources() {
        if (url) {
            let resource = await getResource(url);
            resource = await FormatResource(type,resource);
            setResource(resource);
            return resource;
        }
        else return;
    }

    useEffect(() => {
        getResources();
    }, [])

    return resource;
}