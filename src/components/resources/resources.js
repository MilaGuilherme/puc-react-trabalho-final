import React from 'react';
import { Link } from 'react-router-dom';
import { ResourceRoute } from '../../routes'


export const Resources = () => {

    return (
        <>
            <div className="card text-left" >
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <Link to="/spells" className="nav-link active">Spells</Link>
                        </li>
                        <li className="nav-item">
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <ResourceRoute />
                </div>
            </div>
        </>
    );
}