import { createSlice } from "@reduxjs/toolkit";

export const tooglechatSlice = createSlice({
  name: "tooglechat",
  initialState: {
    value: false,
  },
  reducers: {
    togglechat: (state) => {
      state.value = !state.value;
    },
  },
});
export const { togglechat } = tooglechatSlice.actions;

export default tooglechatSlice.reducer;
