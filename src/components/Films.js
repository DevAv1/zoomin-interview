import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux'
import { Film } from './Film';
import { getFilmsAction, setFavoriteStatus } from '../store/actions/films.actions'
import { getFilms, getFavorites } from '../store/selectors'
import '../components/films.css'

import {
  CircularProgress
} from '@material-ui/core'

export const Films = () => {
  const dispatch = useDispatch()
  const films = useSelector(getFilms)
  const favorites = useSelector(getFavorites)

  useEffect(() => {
    dispatch(getFilmsAction());
  }, [])

  const onFavoriteModeChange = (id) => {
    dispatch(setFavoriteStatus(id))
  }

  return (
    <div className="films">
      <div className="films_header">
        <h1>STAR WARS FILMS</h1>
      </div>
      {films.length > 0 ?
        films.map(({title, episode_id}) => {
          return (
            <Film key={episode_id} title={title} id={episode_id} status={favorites[episode_id]} onFavoriteModeChange={onFavoriteModeChange}/>
          )
        })
        :
        <CircularProgress color="secondary" />
      }
    </div>
  )
}

