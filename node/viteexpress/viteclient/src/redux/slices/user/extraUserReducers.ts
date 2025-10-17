import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import type { User, UserSlice } from "./user.model";
import { fetchUsers } from "./actions";

export const buildUsersListMapper = (
  builder: ActionReducerMapBuilder<UserSlice>
) => {
        builder
          .addCase(fetchUsers.pending, state => {
              state.isUsersFetching = true;
              state.isUsersSuccess = false;
              state.isUsersFailed = false;
          })
          .addCase(fetchUsers.fulfilled, (state, action:PayloadAction<{users:User[]; currentPage: number; totalUserPages: number; totalUsers:number}>) => {
              const data = action?.payload;
              const existingIds = new Set(state.users.map(u => u._id));
              const newUsers = state.users.filter(u => !existingIds.has(u._id));
              state.users = [...state.users, ...newUsers];
              state.currentUserPage = data.currentPage;
              state.totalUserPages = data.totalUserPages;
              state.totalUsers = data.totalUsers;
  
              state.isUsersFetching = false;
              state.isUsersSuccess = true;
              state.isUsersFailed = false;
          })
          .addCase(fetchUsers.rejected, state => {
              state.isUsersFetching = false;
              state.isUsersSuccess = false;
              state.isUsersFailed = true;
          });
};