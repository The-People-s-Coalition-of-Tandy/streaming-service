import { createSlice } from "@reduxjs/toolkit";

export const playingSlice = createSlice({
  name: "playing",
  initialState: {
    value: false,
  },
  reducers: {
    updatePlayer: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePlayer } = playingSlice.actions;
export const selectPlaying = (state) => state.playing.value;

export default playingSlice.reducer;
