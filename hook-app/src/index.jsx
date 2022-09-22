import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HooksApp from './HooksApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';

const root = createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <SimpleForm />
  //</React.StrictMode>
);

