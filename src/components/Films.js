import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux'
import { Film } from './Film';
import { getFilmsAction } from '../store/actions/films.actions'
import { getFilms } from '../store/selectors'
import '../components/films.css'

export const Films = () => {
  const dispatch = useDispatch()
  const films = useSelector(getFilms)
  const localFilmsData = JSON.parse(localStorage.getItem('movies')) || [] ;

  useEffect(() => {
    dispatch(getFilmsAction());
  }, [])

  useEffect(() => {
    localStorage.setItem('films', JSON.stringify(films))
  }, [localFilmsData])

  return (
    <div className="films">
      <Film films={films}/>
    </div>
  )
}

