import { createSlice, current } from "@reduxjs/toolkit";

export const queueSlice = createSlice({
  name: "queue",
  initialState: {
    value: { previous: [], next: [] },
  },
  reducers: {
    addToQueue: (state, action) => {
      state.value.next = [...state.value.next, action.payload];
    },
    addToPreviousQueue: (state, action) => {
      if (state.value.previous[0] != action.payload) {
        state.value.previous = [action.payload, ...state.value.previous];
      }
    },
    popQueue: (state) => {
      if (current(state.value).previous[0] != current(state.value).next[0]) {
        console.log("how?");
        console.log(current(state.value).previous[0]);
        console.log(current(state.value).next[0]);
        state.value.previous = [state.value.next[0], ...state.value.previous];
      }
      state.value.next = state.value.next.slice(1, state.value.next.length);
    },
    popPreviousQueue: (state) => {
      if (
        state.value.next.length &&
        state.value.previous[0] !== state.value.next[0]
      ) {
        state.value.next = [state.value.previous[0], ...state.value.next];
      }
      state.value.previous = state.value.previous.slice(
        1,
        state.value.previous.length
      );
    },
    addQueueArray: (state, action) => {
      state.value.next = [...state.value.next, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToQueue,
  addToPreviousQueue,
  addQueueArray,
  popQueue,
  popPreviousQueue,
} = queueSlice.actions;
export const selectQueue = (state) => state.queue.value;

export default queueSlice.reducer;
