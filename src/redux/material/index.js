import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'materials',
  initialState: [],
  reducers: {
    FETCH_MATERIALS_SUCCEEDED: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { FETCH_MATERIALS_SUCCEEDED } = actions;

export default reducer;
