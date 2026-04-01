import type { MovieDetails } from "./useSelectedMovie";
import { useState, useEffect } from "react";
import { getCredits } from "../dal/api";

export type Credits = {
  name: string
  id: number
  profile_path: string
  order: number
}

export function useCredits(selectedMovie: MovieDetails) {

  const [credits, setCredits] = useState<Credits[] | []>([])

  useEffect(() => {
    getCredits(selectedMovie.id)
      .then(json => setCredits(json.cast))
  }, [selectedMovie.id])

  return { credits }
}