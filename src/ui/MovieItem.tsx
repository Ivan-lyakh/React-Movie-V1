import { useDispatch } from "react-redux";
import { getSelectedMovie } from "../dal/api";
import { memo } from "react"

import * as searchActions
  from "../slicesStore/search";

import * as selectedMovieAction
  from "../slicesStore/selectedMovie";

import styles from '../css/MovieList.module.css'

type Props = {
  title: string
  image: string
  id: number
}

export const MovieItem = memo(function MovieItem(props: Props) {

  const dispatch = useDispatch()

  const getDetailsMovie = async (id: number) => {
    const data = await getSelectedMovie(id)
    dispatch(selectedMovieAction.setSelectedMovie(data))
  }

  return (
    <div
      className={styles.movie__card}
      onClick={async () => {
        dispatch(selectedMovieAction.onLoading())
        await getDetailsMovie(props.id)
        dispatch(searchActions.resetResultSearch())
        dispatch(searchActions.searchActiveFalse())
        window.scrollTo(0, 0)
        dispatch(selectedMovieAction.offLoading())
      }}  >
      <img className={styles.movieCardImg} src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="#" />
      <h2 className={styles.movieCardTitle}>{props.title}</h2>
    </div>
  )
})