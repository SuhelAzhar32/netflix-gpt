import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSeacrchView: false,
    gptMoviesList: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSeacrch: (state) => {
      state.gptSeacrchView = !state.gptSeacrchView;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieNames = movieNames;
      state.gptMoviesList = movieResult;
    },
  },
});

export const { toggleGptSeacrch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
