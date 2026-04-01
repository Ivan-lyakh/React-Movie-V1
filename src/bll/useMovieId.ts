import { type MovieDetails } from "./useSelectedMovie";
import { useState, useEffect } from "react";

export type selectedMovieId = number | null

export function useMovieId(selectedMovie: MovieDetails | null) {

  const [movieId, setMovieId] = useState<null | number>(null)

  const getNullMovieId = () => {
    setMovieId(null)
  }

  useEffect(() => {
    selectedMovie !== null && setMovieId(selectedMovie.id)
  }, [selectedMovie])


  return { movieId, getNullMovieId }
}