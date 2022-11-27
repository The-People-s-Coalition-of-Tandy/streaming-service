import { createSlice } from "@reduxjs/toolkit";

export const queueSlice = createSlice({
  name: "queue",
  initialState: {
    value: [],
  },
  reducers: {
    addToQueue: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = [...state.value, action.payload];
    },
    popQueue: (state) => {
      state.value = state.value.slice(1, state.value.length);
    },
    addQueueArray: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToQueue, addQueueArray, popQueue } = queueSlice.actions;
export const selectQueue = (state) => state.queue.value;

export default queueSlice.reducer;
