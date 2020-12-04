import React from 'react'
import '../components/film.css'

import { 
  Button,
  Checkbox,
  CircularProgress,
  Tooltip
 } from '@material-ui/core'

export const Film = ({films}) => {

  return (
    <div className="film">
      <div className="film-header">
        <h2>STAR WARS FILMS</h2>
      </div>
      {films.length > 0 ?
        films.map((film) => {
          return (
            <ul>
              <Tooltip title="Mark/Unmark as favorite">
                <Checkbox />
              </Tooltip>
              <li key={film.title}>{film.title}</li>
              { // here will be a condition if marked as fav before only then show start
                <i class="fas fa-star" style={{color: "yellow"}}></i>
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



 
