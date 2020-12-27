import React from 'react';
import { Route } from 'react-router-dom';
import { Spells } from '../components/spells';

export const ResourceRoute = () => (
    <Route path="/spells" component = { Spells }/>
    );