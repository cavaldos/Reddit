import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "light",
  },
  reducers: {
    toggle: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});
export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
