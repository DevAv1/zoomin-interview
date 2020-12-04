import './App.css';
import React from 'react';
import { Films } from './Films';

export const App = () => {

  return (
    <div className="app">
      <h1>SWAPI APP - INTERVIEW</h1>
        <div className="app-wrapper">
          <Films />
        </div>
    </div>
  );
}