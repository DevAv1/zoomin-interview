import { FAVORITE_SET, FAVORITE_INIT } from '../actions/action-types'
import {
  FAVORITE_MODE
} from '../../consts'

const initialState = {
  statuses: {}
}
const getNewStatus = (curr) => {
  if(curr !== FAVORITE_MODE.FAVORITE) {
    return FAVORITE_MODE.FAVORITE
  }
  return FAVORITE_MODE.ONCE_SELECTED
}

export const favorites = (state = initialState, action) => {
  switch(action.type){
    case FAVORITE_SET :
      const currentStatus = state.statuses[action.id]
      return {
        ...state,
        statuses: {
          ...state.statuses,
          [action.id]:getNewStatus(currentStatus)
        }
      }
    case FAVORITE_INIT :
      return {
        ...state,
        statuses: action.favorites || {}
      }
    default :
    return state;
  }
}