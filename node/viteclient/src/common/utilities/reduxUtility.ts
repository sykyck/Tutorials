
import type { AsyncThunkConfig, GetThunkAPI } from '@reduxjs/toolkit';
import axios from 'axios';

const errorCodes = [
  'UNIQUEF400E',
  'INVALIDPRO400E',
  'MISSINGINF400E',
  'ACOUNTDSBL403E',
  'INVALOGIN401E',
  'DELCONT403E',
  'UNSPSCERR400E',
  'PUBSUPBMI400E'
];

export const handleAsyncThunkError = (
  error: unknown,
  thunkAPI: GetThunkAPI<AsyncThunkConfig>
) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.data.code === 'REGLINKINV401E') {
      return thunkAPI.rejectWithValue({
        message: error.response?.data
      });
    }
    if (error.response?.data.code === 'MFACODENOTSENT500E') {
      return thunkAPI.rejectWithValue({
        message: error.response?.data.message,
        code: error.response?.data.code
      });
    }
    if (errorCodes?.includes(error.response?.data.code)) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }

    return thunkAPI.rejectWithValue({
      message: error.response?.data?.message || error.message
    });
  }
  return thunkAPI.rejectWithValue({
    message: 'An unknown error occurred'
  });
};
