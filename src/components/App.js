import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmsAction } from '../store/actions/films.actions';
import { getFilms } from '../store/selectors';

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