import { getFilms } from '../../services/swapi.api'
import { 
  FILMS_SET,
  SET_FAVORITE
 } from '../actions/action-types'

export const getFilmsAction = () => {
  return async (dispatch) => {
    try {
      const films = await getFilms();
      dispatch({
        type: FILMS_SET,
        films
      })
    } catch (err){
      console.error(err)
    }
  }
}

export const setFavorite = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_FAVORITE,
      })

    } catch (err) {
      console.error(err)
    }
  }
}