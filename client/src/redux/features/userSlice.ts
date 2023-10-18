import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: "default",
    photoURL: "default",
    disPlayName: "default",
    email: "default",
  },
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.photoURL = action.payload.photoURL;
      state.disPlayName = action.payload.disPlayName;
      state.email = action.payload.email;
    },
    resetUser: (state) => {
      state.uid = "default";
      state.photoURL = "default";
      state.disPlayName = "default";
      state.email = "default";
    },
    updateUser: (state, action) => {
      state.photoURL = action.payload.photoURL;
      state.disPlayName = action.payload.disPlayName;
      state.email = action.payload.email;
    },
  },
});

export const { setUser, resetUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
