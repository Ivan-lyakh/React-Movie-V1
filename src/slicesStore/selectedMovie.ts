import { createSlice } from "@reduxjs/toolkit";
import type { MovieDetails } from "../App";

type SelectedMovieState = {
  selectedMovie: MovieDetails | null
  loading: boolean
}

const initialState:
  SelectedMovieState = {

  selectedMovie: null,
  loading: false
}

const selectedMovieSlice = createSlice({



  name: "selectedMovie",

  initialState,

  reducers: {
    onLoading: (state) => {
      state.loading = true
    },
    offLoading: (state) => {
      state.loading = false
    },
    resetSelectedMovie: (state) => {
      state.selectedMovie = null
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload
    }
  }
})


export const { onLoading, offLoading, resetSelectedMovie, setSelectedMovie } = selectedMovieSlice.actions

export default selectedMovieSlice.reducer