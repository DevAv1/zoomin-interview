import React from 'react'
import { setFavorite } from '../store/actions/films.actions'
import '../components/film.css'

import { 
  Button,
  Checkbox,
  CircularProgress,
  Tooltip,
 } from '@material-ui/core'

export const Film = ({films, favorites}) => {

  const setFavoriteStatus = (film) => {
    const id = film.episode_id;
    setFavorite(id)
  }
  console.log(favorites)
  console.log(films)
  return (
    <div className="film">
      <div className="film-header">
        <h2>STAR WARS FILMS</h2>
        <h1>list of favs:</h1>
        <p>{favorites}</p>
      </div>
      {films.length > 0 ?
        films.map((film) => {
          return (
            <ul key={film.episode_id}>
              <Tooltip title="Mark/Unmark as favorite">
                <Checkbox
                  checked={favorites.find(item => item === film.episode_id)}
                  onChange={() => setFavoriteStatus(film)}
                />
              </Tooltip>
              <li>{film.title}</li>
                { favorites.find(item => item === film.episode_id) && 
                  <Tooltip title="once selected">
                   <div className="star-icon"><i class="fas fa-star" ></i></div>
                  </Tooltip>

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



 
