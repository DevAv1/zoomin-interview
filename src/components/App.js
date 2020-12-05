import './App.css';
import React, { useEffect } from 'react';
import { initAppAction } from '../store/actions/app.actions'
import { useDispatch } from 'react-redux'
import { Films } from './Films';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAppAction())
  }, [])

  return (
    <div className="app">
      <h1>SWAPI APP - INTERVIEW</h1>
        <div className="app-wrapper">
          <Films />
        </div>
    </div>
  );
}