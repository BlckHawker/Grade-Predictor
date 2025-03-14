import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './component/Home'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GradeCalculator from './component/GradeCalculator';
import AssignmentWorth from './component/AssignmentWorth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/GradeCalculator" element={<GradeCalculator/>}/>
        <Route path="/AssignmentWorth" element={<AssignmentWorth/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
