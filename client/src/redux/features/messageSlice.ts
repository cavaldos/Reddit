import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    SEND_ID: "",
    RECEIVE_ID: "",
    chat: [
      {
        id: 1,
        createdAt: Date.now(),
        text: "helloo",
        role: true,
      },
      {
        id: 2,
        createdAt: Date.now(),
        text: "hahahah",
        role: false,
      },
      {
        id: 3,
        createdAt: Date.now(),
        text: "sdfdfsdafsdfasdfsd",
        role: true,
      },
    ],
  },
  reducers: {
    setSendID: (state, action) => {
      state.SEND_ID = action.payload;
    },
    setReceiveID: (state, action) => {
      state.RECEIVE_ID = action.payload;
    },
    setChat: (state, action) => {
      state.chat.push({

        //random id
        id: Math.floor(Math.random() * 1000),
        createdAt: Date.now(),
        text: action.payload.text,
        role: action.payload.role,
      })
    },
    removeChat: (state, action) => {
      state.chat.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setSendID, setReceiveID, setChat, removeChat } =
  messageSlice.actions;
export default messageSlice.reducer;
