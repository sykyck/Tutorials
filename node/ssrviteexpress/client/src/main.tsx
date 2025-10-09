import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('app') as HTMLElement;
hydrateRoot(root, <App />);
