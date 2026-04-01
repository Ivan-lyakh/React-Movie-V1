
import { type MovieDetails } from "../bll/useSelectedMovie"
import { type selectedMovieId } from "../bll/useMovieId"
import { type Credits } from "../bll/useCredits"

type Props = {
  getNullMovieId: () => void
  selectedMovie: MovieDetails
  selectedMovieId: selectedMovieId
  credits: Credits[]
}

function language(code: string) {
  const language = new Intl.DisplayNames(['ru'], { type: 'language' })
  return language.of(code)
}

function country(code: string) {
  const country = new Intl.DisplayNames(['ru'], { type: 'region' })
  return country.of(code)
}

function ratingMovie(x: number) {
  if (x > 9) return "⭐⭐⭐⭐⭐"
  if (x > 8) return "⭐⭐⭐⭐⯪"
  if (x > 7.5) return "⭐⭐⭐⭐☆"
  if (x > 7) return "⭐⭐⭐⯪☆"
  if (x > 6) return "⭐⭐⭐☆☆"
  if (x > 5) return "⭐⭐⯪☆☆"
  if (x > 4) return "⭐⭐☆☆☆"
  if (x > 3) return "⭐⯪☆☆☆"
  if (x > 2) return "⭐☆☆☆☆"

  return "☆☆☆☆☆"
}

function voteCount(vote: number) {
  return (
    (vote / 1000).toFixed(1) + "K"
  )
}

export function DetailsBody(props: Props) {

  const credits = props.credits

  const mainCredits = credits.filter(actor => actor.order <= 2)

  return (
    <div className="movieDetailsBody">

      <div className="movieDetailsMain">

        <div className="movieDetailsMainImg">
          <img src={`https://image.tmdb.org/t/p/w500${props.selectedMovie.poster_path}`} alt="#" />
        </div>

        <div className="movieDetailsMainText">
          <h1 className="movieDetailsTitle"><b>Названия фильма:</b> {props.selectedMovie.title}</h1>

          <div className="DetailsMainRoleContainer">
            <h4 style={{ marginRight: "15px" }} className="detailsh4" ><b>В главных ролях:</b> </h4>
            {mainCredits.map(actor =>
              <p className="detailsh4" style={{ marginRight: "15px" }} key={actor.id}>{actor.name}</p>)}
          </div>

          <h4 className="detailsh4" style={{ fontWeight: "400" }}><b>Дата выпуска</b>: {props.selectedMovie.release_date}</h4>

          <h4 className="detailsh4"><b>Рейтинг:</b>
            {ratingMovie(props.selectedMovie.vote_average)} {props.selectedMovie.vote_average.toFixed(1)}

            ({props.selectedMovie.vote_count < 1000 ?
              props.selectedMovie.vote_count : voteCount(props.selectedMovie.vote_count)})
          </h4>

          <div className="detailsGanreContainer">
            <h4 className="detailsh4" style={{ marginRight: "15px" }} ><b>Категории:</b> </h4>
            {props.selectedMovie.genres.map((genre) =>
              <p className="detailsh4" style={{ marginRight: "15px" }} key={genre.id}>{genre.name}</p>)}
          </div>

          <h4 className="detailsh4"><b>Бюджет фильма:</b> {props.selectedMovie.budget === 0 ? "Неизвестно" : props.selectedMovie.budget.toLocaleString() + "$"}</h4>

          <h4 className="detailsh4"><b>Кассовые сборы:</b> {props.selectedMovie.revenue === 0 ? "Неизвестно" : props.selectedMovie.revenue.toLocaleString() + "$"}</h4>

          <h4 className="detailsh4"><b>Оригинальный язык:</b> {language(props.selectedMovie.original_language)}</h4>

          <h4 className="detailsh4"><b>Страна производитель</b> {country(props.selectedMovie.origin_country[0])} </h4>

          <h4 className="detailsh4"><b>Длительность фильма:</b> {props.selectedMovie.runtime + "min"}</h4>

        </div>
      </div>

      <div className="movieDetailsRead">
        <h4 ><b>Описание:</b> <span style={{ fontWeight: "400", lineHeight: "200%" }}>{props.selectedMovie.overview}</span></h4>
      </div>
    </div>
  )
}