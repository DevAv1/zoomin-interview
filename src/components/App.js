import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmsAction } from '../store/actions/films.actions';
import { getFilms } from '../store/selectors';
import { 
  Button,
  Checkbox
 } from '@material-ui/core'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFilmsAction());
  }, [])

  const films = useSelector(getFilms)

  return (
    <div className="app">
      <h1>Star Wars</h1>
        <Button variant="contained" color="secondary" >button</Button>
        <div className="movie-list">
           <h1>Star Wars Movies</h1>
           {
             films.map( film => {
              
             })
           }
           <Checkbox />
        </div>
    </div>
  );
}