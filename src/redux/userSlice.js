import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Manjunath Kalburgi',
    email: '@manjumanav',
    bio: 'Full Stack JavaScript Developer. Creator of really good web development courses',
  },
  reducers: {
    displayUser: (state) => {
      return state;
    },
  },
});
export const { displayUser } = userSlice.actions;
export default userSlice.reducer;
