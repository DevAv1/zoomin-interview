import React from 'react'
import { setFavorite } from '../store/actions/films.actions'
import '../components/film.css'

import { 
  Button,
  Checkbox,
  CircularProgress,
  Tooltip,
 } from '@material-ui/core'

export const Film = ({localData, favorites}) => {

  const setFavoriteStatus = (film) => {
    const id = film.episode_id;
    setFavorite(id)
  }
  console.log(favorites)
  console.log(localData)
  return (
    <div className="film">
      <div className="film-header">
        <h2>STAR WARS FILMS</h2>
        <h1>list of favs:</h1>
        <p>{favorites}</p>
      </div>
      {localData.length > 0 ?
        localData.map((film) => {
          return (
            <ul>
              <Tooltip title="Mark/Unmark as favorite">
                <Checkbox
                  checked
                  onChange={() => setFavoriteStatus(film)}
                />
              </Tooltip>
              <li key={film.title}>{film.title}</li>
              { // here will be a condition if marked as fav before only then show start
                <i class="fas fa-star" style={{color: "grey"}}></i>
              }
            </ul>
          )
        })
        :
        <CircularProgress className="progress" color="secondary" />
      }
    </div>
  )
}



 
