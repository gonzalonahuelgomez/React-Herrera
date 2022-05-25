import React from 'react'
import { createRoot } from "react-dom/client";
import './index.css'
import CounterApp from './CounterApp';

// const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#root')

createRoot(divRoot).render(<CounterApp value={ 100 }/>)
