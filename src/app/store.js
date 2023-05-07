import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../components/songSlice";
import playingReducer from "../components/playingSlice";
import queueReducer from "../components/Queue";
import pageReducer from "../components/pageSlice";
import { songsApi } from "../components/apiSlice";
import dataReducer from "../components/dataSlice";

export const store = configureStore({
  reducer: {
    currentSong: songReducer,
    queue: queueReducer,
    page: pageReducer,
    playing: playingReducer,
    [songsApi.reducerPath]: songsApi.reducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(songsApi.middleware),
});
