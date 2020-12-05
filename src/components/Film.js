import React from 'react'
import {
  FAVORITE_MODE
} from '../consts'
import '../components/film.css'

import { 
  Checkbox,
  Tooltip,
 } from '@material-ui/core'

export const Film = ({title, id, status, onFavoriteModeChange}) => {

  return (
    <div className="film">
      <div>
        <Tooltip title="Mark/Unmark as favorite">
          <Checkbox
            checked={status === FAVORITE_MODE.FAVORITE}
            onChange={() => onFavoriteModeChange(id)}
          />
        </Tooltip>
      </div>
      
      <div>{title}</div>
      <div>
        {(status === FAVORITE_MODE.ONCE_SELECTED || status === FAVORITE_MODE.FAVORITE) && 
          <Tooltip title="once selected">
            <div className="star-icon"><i class="fas fa-star" ></i></div>
          </Tooltip>
        }
      </div>
    </div>
  )
}



 
