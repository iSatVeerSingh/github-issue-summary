
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App';

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv)
if(!rootDiv) {
  throw new Error('Can not find Root Div');
}

const root = createRoot(rootDiv);
root.render(<App />)



