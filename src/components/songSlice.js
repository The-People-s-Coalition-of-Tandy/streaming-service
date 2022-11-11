import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "currentSong",
  initialState: {
    value: "",
  },
  reducers: {
    update: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = songSlice.actions;
export const selectSong = (state) => state.currentSong.value;

export default songSlice.reducer;
