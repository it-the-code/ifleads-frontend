import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    saveUser: (state, { payload: user }) => {
      state.user = user || null;
    },
  },
});

export const { saveUser } = actions;

export default reducer;
