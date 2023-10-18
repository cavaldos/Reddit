import countSlice from "./features/countSlice";
import themeSlice from "./features/themeSlice";
import messageSlice from "./features/messageSlice";
import userSlice from "./features/userSlice";
import tooglechatSlice from "./features/tooglechatSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["count", "theme"],
};
const rootReducer = combineReducers({
  count: countSlice,
  theme: themeSlice,
  message: messageSlice,
  user: userSlice,
  tooglechat: tooglechatSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);

export default store;
