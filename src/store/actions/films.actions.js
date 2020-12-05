import { getFilms } from '../../services/swapi.api'
import { 
  FILMS_SET,
  FAVORITE_SET
 } from '../actions/action-types'
 import { saveFavorites } from '../../services/favorites.api' 
 import { getFavorites } from '../selectors'

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

export const setFavoriteStatus = (id) => {
  return async ( dispatch, getState ) => {
    try {
      dispatch({
        type: FAVORITE_SET,
        id
      })
    const state = getState();
    const favorites = getFavorites(state) // GOD DAMNIT!
    saveFavorites(favorites)
    } catch (err) {
      console.error(err)
    }
  }
}