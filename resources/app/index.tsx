import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const element = document.getElementById('app');
const root = ReactDOM.createRoot(element as HTMLElement);
root.render(
    // <BrowserRouter>
    <BrowserRouter children={routes} />
    // </BrowserRouter>
);
