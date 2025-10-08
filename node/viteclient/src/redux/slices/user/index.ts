import { createSlice, type ActionReducerMapBuilder } from '@reduxjs/toolkit';
import type { UserSlice } from './user.model';
import { buildUsersListMapper } from './extraUserReducers';

const initialState = {
  users:[],
  currentUserPage: 1,
  totalUsers: 0,
  totalUserPages: 1,
  isUsersFetching: false,
  isUsersFailed: false,
  isUsersSuccess: false,
} as UserSlice;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
     
  },
  extraReducers: (builder: ActionReducerMapBuilder<UserSlice>) => {
    buildUsersListMapper(builder);
  }
});

export default userSlice.reducer;