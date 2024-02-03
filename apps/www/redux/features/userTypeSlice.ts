import { createSlice } from '@reduxjs/toolkit';

const userTypeSlice = createSlice({
  name: 'userType',
  initialState: null,
  reducers: {
    setUserType: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserType } = userTypeSlice.actions;
export default userTypeSlice.reducer;