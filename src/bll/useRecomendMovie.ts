import type { MovieDetails } from "./useSelectedMovie";
import { useState, useEffect } from "react";
import { getRecomendMovie } from "../dal/api";

type recomendMovie = {
  id: number
  title: string
  poster_path: string
}

export function useRecomenMovie(selectedMovie: MovieDetails) {

  const [recomendMovie, setRecomendMovie] = useState<recomendMovie[] | []>([])

  useEffect(() => {
    getRecomendMovie(selectedMovie.id)
      .then(json => setRecomendMovie(json.results))
  }, [selectedMovie.id])


  return { recomendMovie }
}