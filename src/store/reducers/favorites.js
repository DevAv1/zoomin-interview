import { SET_FAVORITE } from '../actions/action-types'

const initialState = {
  ids: [1,2,4]
}

export const favorites = (state = initialState, action) => {
  switch(action.type){
    case SET_FAVORITE :
      return {
        ...state,
        id: action.addId
      }
    default :
    return state;
  }
}