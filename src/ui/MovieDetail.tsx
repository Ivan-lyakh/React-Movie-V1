
import { DetailsBody } from "./DetailBody"
import { DetailsVideoPlayer } from "./DetailsPlayer"
import { DetailsActors } from "./DetailsActors"
import { DetailsRecomendation } from "./DetailsRecomendation"
import { useCredits } from "../bll/useCredits"
import { useTraillerKey } from "../bll/useTrailerKey"
import { useRecomenMovie } from "../bll/useRecomendMovie"

import * as searchActions
  from "../slicesStore/search";

import * as selectedMovieAction
  from "../slicesStore/selectedMovie";

import styles from '../css/MovieDetails.module.css'

import { useDispatch, useSelector } from "react-redux"
import { Loading } from "./Loading"

export function MovieDetail() {

  const dispatch = useDispatch()

  const selectedMovie = useSelector((state: any) => state.selectedMovie.selectedMovie)

  const loading = useSelector((state: any) => state.selectedMovie.loading)

  const { credits } = useCredits(selectedMovie)

  const { trailerMovieKey } = useTraillerKey(selectedMovie)

  const { recomendMovie } = useRecomenMovie(selectedMovie)



  return (

    <div className={styles.movieDetails}>
      {loading ? <Loading />
        : <div className={styles.container}>

          <div className={styles.movieDetailsHeader}>
            <button className={styles.btnGoHome} onClick={() => {
              dispatch(selectedMovieAction.resetSelectedMovie())
              dispatch(searchActions.searchActiveFalse())
            }}>На главную
            </button>
          </div>

          <DetailsBody
            credits={credits} />

          {trailerMovieKey &&
            <DetailsVideoPlayer
              traillerKey={trailerMovieKey.key}
            />}

          <DetailsRecomendation
            recomendMovies={recomendMovie}
          />

          <DetailsActors
            credits={credits}
          />
        </div>
      }
    </div>
  )
}


