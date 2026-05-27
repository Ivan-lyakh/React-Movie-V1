import { useState, useEffect } from "react"
import { getPopular } from "../dal/api"
import { getTopRated } from "../dal/api"
import { getNowPlaying } from "../dal/api"
import { getComingSoon } from "../dal/api"
import { getListMovieGenre } from "../dal/api"
import { useDispatch } from "react-redux"

import * as errorActions
  from "../slicesStore/error";

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

export type Movie = {
  id: number
  title: string
  poster_path: string
  genre_ids: number
}

export type ActionMovie = {
  getNowPlayingMovies: () => void
  getPopularMovies: () => void
  getTopRatedMovies: () => void
  getComingSoonMovies: () => void
  getNullMovieList: () => void
  getListGanre: (id: number) => void
}

export function useMovie(page: number) {

  const dispatch = useDispatch()

  const [movies, setMovies] = useState<Movie[] | null>(null)



  const getPopularMovies = async () => {
    try {
      dispatch(errorActions.ressetError())

      const data = await getPopular(page)

      setMovies(data.results)

    } catch (error) {
      if (error instanceof Error) {
        dispatch(errorActions.setError(error.message))
      }
    }
  }

  const getTopRatedMovies = async () => {
    try {
      dispatch(errorActions.ressetError())

      const data = await getTopRated(page)

      setMovies(data.results)

    } catch (error) {
      if (error instanceof Error) {
        dispatch(errorActions.setError(error.message))
      }
    }
  }



  const getNowPlayingMovies = async () => {
    try {
      dispatch(errorActions.ressetError())

      const data = await getNowPlaying(page)

      setMovies(data.results)

    } catch (error) {
      if (error instanceof Error) {
        dispatch(errorActions.setError(error.message))
      }
    }
  }


  const getComingSoonMovies = async () => {
    try {
      dispatch(errorActions.ressetError())

      const data = await getComingSoon(page)

      setMovies(data.results)

    } catch (error) {
      if (error instanceof Error) {
        dispatch(errorActions.setError(error.message))
      }
    }
  }



  const getListGanre = (id: number) => {
    getListMovieGenre(id).then(json => setMovies(json.results))
  }

  const getNullMovieList = () => {
    setMovies(null)
  }

  const actionMovie = { getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getComingSoonMovies, getNullMovieList, getListGanre }


  useEffect(() => {
    getPopular(page).then(json => setMovies(json.results))
  }, [page]);


  return { movies, actionMovie }
}