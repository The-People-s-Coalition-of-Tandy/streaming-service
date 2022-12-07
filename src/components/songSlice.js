import { createSlice } from "@reduxjs/toolkit";
import { data } from "../list";

export const songSlice = createSlice({
  name: "currentSong",
  initialState: {
    value: data[0],
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = songSlice.actions;
export const selectSong = (state) => state.currentSong.value;

export default songSlice.reducer;
