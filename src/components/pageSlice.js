import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: { page: "Albums", artist: "" },
  },
  reducers: {
    setPage: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.page = action.payload;
    },
    setArtist: (state, action) => {
      state.value.artist = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPage, setArtist } = pageSlice.actions;
export const selectPage = (state) => state.page.value;

export default pageSlice.reducer;
