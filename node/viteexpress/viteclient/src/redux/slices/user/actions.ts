import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '@api/user.api';
import { handleAsyncThunkError } from '@common/utilities/reduxUtility';

export const fetchUsers = createAsyncThunk(
  'fetch-app-users',
  async (payload:{page:number, limit:number}, thunkAPI) => {
    try {
      return await getUsers(payload.page, payload.limit);
    } catch (error) {
      return handleAsyncThunkError(error, thunkAPI);
    }
  }
);