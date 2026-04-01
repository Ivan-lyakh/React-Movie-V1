import { useState, useEffect } from "react"
import { getPopular } from "../dal/api"
import { getTopRated } from "../dal/api"
import { getNowPlaying } from "../dal/api"
import { getComingSoon } from "../dal/api"
import { getListMovieGenre } from "../dal/api"

export type Movie = {
  id: number
  title: string
  poster_path: string
  genre_ids: number
}

export function useMovie(page: number) {

  const [movies, setMovies] = useState<Movie[] | null>(null)

  const getPopularMovies = () => {
    return getPopular(page).then(json => setMovies(json.results))
  }

  const getTopRatedMovies = () => {
    return getTopRated(page).then(json => setMovies(json.results))
  }

  const getNowPlayingMovies = () => {
    return getNowPlaying(page).then(json => setMovies(json.results))
  }

  const getComingSoonMovies = () => {
    return getComingSoon(page).then(json => setMovies(json.results))
  }

  const getListGanre = (id: number) => {
    getListMovieGenre(id).then(json => setMovies(json.results))
  }

  const getNullMovieList = () => {
    setMovies(null)
  }


  useEffect(() => {
    getPopular(page).then(json => setMovies(json.results))
  }, [page]);


  return { movies, getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getComingSoonMovies, getNullMovieList, getListGanre }
}