import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth';
import collections from './collections';
export default combineReducers({
  auth,
  collections,
});
