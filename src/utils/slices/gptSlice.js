import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSeacrchView: false,
  },
  reducers: {
    toggleGptSeacrch: (state) => {
      state.gptSeacrchView = !state.gptSeacrchView;
    },
  },
});

export const { toggleGptSeacrch } = gptSlice.actions;
export default gptSlice.reducer;
