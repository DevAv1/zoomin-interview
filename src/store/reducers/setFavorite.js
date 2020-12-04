import { SET_FAVORITE } from '../actions/action-types'

const initialState = {
  id: null
}

export const setFavorite = (state = initialState, action, payload) => {
  switch (action.type){
    case SET_FAVORITE :
      return {
        ...state,

      }
  }
}