import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../components/songSlice";
import queueReducer from "../components/Queue";

export const store = configureStore({
  reducer: {
    currentSong: songReducer,
    queue: queueReducer,
  },
});
