import { useState } from "react";
import { getDetail } from "../dal/api";

export type MovieDetails = {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
  backdrop_path: string
  homepage: string
  vote_count: number
  genres: {
    id: number
    name: string
  }[]
  budget: number
  original_language: string
  origin_country: string
  runtime: number
  revenue: number
}

export function useSelectedMovie() {
  const [selectedMovie, setSelectedMovie] = useState<null | MovieDetails>(null)

  const [isLoading, setIsLoading] = useState(false)

  const getIsLoadingTrue = () => {
    setIsLoading(true)
  }

  const getIsLoadingFalse = () => {
    setIsLoading(false)
  }

  const getNullSelectedMovie = () => {
    setSelectedMovie(null)
  }

  const getMovieDetails = (id: number) => {
    getDetail(id).then(data => setSelectedMovie(data))
  }


  return { selectedMovie, getNullSelectedMovie, isLoading, getMovieDetails, getIsLoadingFalse, getIsLoadingTrue }
}

