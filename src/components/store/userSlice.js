import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isSignedIn: false,
  posts: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.user = action.payload;
      state.isSignedIn = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isSignedIn = false;
    },
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload); 
    },
  },
});

export const { signUpUser, logoutUser,updateUserProfile , addPost} = userSlice.actions;
export default userSlice.reducer;