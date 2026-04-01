import { type MovieDetails } from "../bll/useSelectedMovie"
import { type Dispatch, type SetStateAction } from "react"
import { type selectedMovieId } from "../bll/useMovieId"
import { DetailsBody } from "./DetailBody"
import { DetailsVideoPlayer } from "./DetailsPlayer"
import { DetailsActors } from "./DetailsActors"
import { DetailsRecomendation } from "./DetailsRecomendation"
import { useCredits } from "../bll/useCredits"
import { useTraillerKey } from "../bll/useTrailerKey"
import { useRecomenMovie } from "../bll/useRecomendMovie"

type Props = {
  getNullMovieId: () => void
  getDetails: (id: number) => void
  getNullSelectedMovie: () => void
  selectedMovie: MovieDetails
  selectedMovieId: selectedMovieId
  setSearchActive: Dispatch<SetStateAction<boolean>>
}

export function MovieDetail(props: Props) {

  const { credits } = useCredits(props.selectedMovie)

  const { trailerMovieKey } = useTraillerKey(props.selectedMovie)

  const { recomendMovie } = useRecomenMovie(props.selectedMovie)

  return (
    <div className="movieDetails">
      <div className="container">

        <div className="movieDetailsHeader">
          <button className="btnGoHome" onClick={() => {
            props.getNullSelectedMovie()
            props.getNullMovieId()
            props.setSearchActive(false)
          }}>На главную
          </button>
        </div>

        <DetailsBody
          selectedMovie={props.selectedMovie}

          selectedMovieId={props.selectedMovieId}
          getNullMovieId={props.getNullMovieId}
          credits={credits} />

        {trailerMovieKey &&
          <DetailsVideoPlayer
            traillerKey={trailerMovieKey.key}
          />}

        <DetailsRecomendation
          recomendMovies={recomendMovie}
          getDetails={props.getDetails}
          getNullMovieId={props.getNullMovieId}
        />

        <DetailsActors
          credits={credits}
        />
      </div>
    </div>
  )
}

