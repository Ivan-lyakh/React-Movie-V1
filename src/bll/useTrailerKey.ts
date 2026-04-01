import type { MovieDetails } from "./useSelectedMovie";
import { useState, useEffect } from "react";
import { getMovieKey } from "../dal/api";

export type Trailer = {
  key: string
}

export function useTraillerKey(selectedMovie: MovieDetails) {
  const [trailerMovieKey, setTrailerMovieKey] = useState<Trailer | null>(null)

  useEffect(() => {
    if (!selectedMovie) return

    getMovieKey(selectedMovie.id)
      .then(json => {

        const trailer = json.results.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube"
        )

        setTrailerMovieKey(trailer)
      })
  }, [selectedMovie])


  return { trailerMovieKey }
}

