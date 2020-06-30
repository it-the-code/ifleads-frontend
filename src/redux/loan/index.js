import { createSlice } from '@reduxjs/toolkit';
import { formatActivityDate } from '../../helpers';

const { actions, reducer } = createSlice({
  name: 'loan',
  initialState: [],
  reducers: {
    FETCH_LOANS_SUCCEEDED: (state, action) => {
      const loans = action.payload.map((loan) => {
        if (!loan.return_time) {
          loan.loan_time = formatActivityDate(loan.loan_time);
        } else {
          loan.return_time = formatActivityDate(loan.return_time);
        }
        return loan;
      });

      state.push(...loans);
    },
  },
});

export const { FETCH_LOANS_SUCCEEDED } = actions;

export default reducer;
