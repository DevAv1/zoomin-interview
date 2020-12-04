import { FILMS_SET } from '../actions/action-types'

const initialState = {
  items: []
}

export const films = (state = initialState, action) => {
  switch(action.type) {
    case FILMS_SET :
      return {
        ...state,
        items: action.films
      }
    default:
      return state;
  }
}