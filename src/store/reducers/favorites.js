import { SET_FAVORITE } from '../actions/action-types'

const initialState = {
  ids: [0,2,5]
}

export const favorites = (state = initialState, action) => {
  switch(action.type){
    case SET_FAVORITE :
      return {
        ...state,
        id: action.id
      }
    default :
    return state;
  }
}