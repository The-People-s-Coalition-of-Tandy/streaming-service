import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../components/songSlice";
import queueReducer from "../components/Queue";
import pageReducer from "../components/pageSlice";

export const store = configureStore({
  reducer: {
    currentSong: songReducer,
    queue: queueReducer,
    page: pageReducer,
  },
});
