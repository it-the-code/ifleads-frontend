import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: {
    signed: false,
    token: null,
  },
  reducers: {
    signInSuccess: (state, { payload }) => {
      state.signed = true;
      state.token = payload.token;
    },
  },
});

export const { signInSuccess } = actions;

export default reducer;
