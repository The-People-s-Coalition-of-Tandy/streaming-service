import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: "",
  },
  reducers: {
    updateData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateData } = dataSlice.actions;
export const selectData = (state) => state.data.value;

export default dataSlice.reducer;
