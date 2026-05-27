import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slicesStore/search"
import selectedMovieReducer from "../slicesStore/selectedMovie"
import errorReducer from "../slicesStore/error"


export const store = configureStore({
  reducer: {
    search: searchReducer,
    selectedMovie: selectedMovieReducer,
    error: errorReducer
  }
});

export type RootState =
  ReturnType<
    typeof store.getState
  >