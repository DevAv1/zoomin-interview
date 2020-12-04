import { combineReducers} from 'redux';
import { films } from './films';

export const reducers = () => {
  return combineReducers({
    films
  })
}