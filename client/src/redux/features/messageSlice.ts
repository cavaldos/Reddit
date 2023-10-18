import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    chat: [
      {
        id: 1,
        createdAt: Date.now(),
        text:"",
        role : "user" || "guest",
      },
    ],
  },
    reducers: {
    addMessage: (state, action) => {
      state.chat.push(action.payload);
    },
    
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
