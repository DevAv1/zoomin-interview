import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux'
import { Film } from './Film';
import { getFilmsAction } from '../store/actions/films.actions'
import { getFilms } from '../store/selectors'
import { getFavorites  } from '../store/selectors'
import '../components/films.css'

export const Films = () => {
  const dispatch = useDispatch()
  const films = useSelector(getFilms)
  const favorites = useSelector(getFavorites)
  const [ localData, setLocalData ] = useState([])

  useEffect(() => {
    dispatch(getFilmsAction());
  }, [])

  useEffect(() => {
    localStorage.setItem('films', JSON.stringify(films))
  }, [films])

  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('films') || []))
  }, [films])


  return (
    <div className="films">
      <Film localData={localData} favorites={favorites}/>
    </div>
  )
}

