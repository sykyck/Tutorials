import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './user';

export const commonReducer = combineReducers({
  userSlice: userSlice
});
