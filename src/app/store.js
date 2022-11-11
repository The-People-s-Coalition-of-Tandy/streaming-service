import { configureStore } from '@reduxjs/toolkit';
import songReducer from '../components/songSlice'

export const store = configureStore({
  reducer: {
    currentSong: songReducer
  },
});
