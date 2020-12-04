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

export const setFavorite = (id) => {
  return async (dispatch) => {
    try {
      const addId = id
      dispatch({
        type: SET_FAVORITE,
        addId
      })

    } catch (err) {
      console.error(err)
    }
  }
}