import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Placeholder tasks passed down to App.js via props
const DATA = [
  { id: "todo-0", name: "Pickup groceries", completed: true },
  { id: "todo-1", name: "Wash car", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();