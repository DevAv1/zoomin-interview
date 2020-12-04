import { combineReducers} from 'redux';
import { films } from './films';
import { favorites } from './favorites';

export const reducers = () => {
  return combineReducers({
    films,
    favorites
  })
}