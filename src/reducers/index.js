import { combineReducers } from 'redux';
import app from './app';
import user from './user'
import animals from './animals'
import carecenters from './carecenters'
import helps from './helps'

export default combineReducers({
    app,
    user,
    animals,
    carecenters,
    helps,
});