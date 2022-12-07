import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "currentSong",
  initialState: {
    value: "",
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
