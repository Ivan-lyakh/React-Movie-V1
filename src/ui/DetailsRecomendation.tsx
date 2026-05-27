import { useDispatch } from "react-redux"
import { getSelectedMovie } from "../dal/api"

import * as selectedMovieAction
  from "../slicesStore/selectedMovie";



import styles from '../css/DetailsBody.module.css'

type Props = {
  recomendMovies: {
    id: number
    title: string
    poster_path: string
  }[]
}

export function DetailsRecomendation(props: Props) {

  const dispatch = useDispatch()

  const getDetailsMovie = async (id: number) => {
    const data = await getSelectedMovie(id)
    dispatch(selectedMovieAction.setSelectedMovie(data))
  }

  const movieForPresent = props.recomendMovies.slice(-4)

  return (
    <div className={styles.detailsRecomendation} >

      <h2 className={styles.detailsRecomendationTittle}>Похожие фильмы:</h2>

      <div className={styles.detailsRecomendationBody}>
        {movieForPresent.map((movie => {
          return (
            <div
              className={styles.detailsRecomendationCard}
              key={movie.id}
              onClick={async () => {
                dispatch(selectedMovieAction.onLoading())
                await getDetailsMovie(movie.id)
                window.scrollTo(0, 0)
                dispatch(selectedMovieAction.offLoading())
              }}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
              <h2 style={{ textAlign: "center", marginTop: "15px" }}>{movie.title}</h2>
            </div>)
        }))}
      </div>
    </div>
  )
}