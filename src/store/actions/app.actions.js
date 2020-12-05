import { getFavorites } from '../../services/favorites.api'
import { FAVORITE_INIT } from '../actions/action-types';
export const initAppAction = () => {
  return async (dispatch) => {
    try {
      const favorites = getFavorites();
      dispatch({
        type: FAVORITE_INIT,
        favorites

      })
    } catch (err) {
      console.error(err)
    }
  }
}