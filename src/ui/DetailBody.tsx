
import { type Credits } from "../bll/useCredits"
import { useSelector } from "react-redux"

import styles from "../css/DetailsBody.module.css"

import type {
  RootState
}
  from "../store/store"

type Props = {
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

  const selectedMovie = useSelector((state: RootState) => state.selectedMovie.selectedMovie)

  if (!selectedMovie) {
    return null
  }

  const credits = props.credits

  const mainCredits = credits.filter(actor => actor.order <= 2)

  return (
    <div>

      <div className={styles.movieDetailsMain}>

        <div className={styles.movieDetailsMainImg}>
          <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt="#" />
        </div>

        <div className={styles.movieDetailsMainText}>
          <h1 className={styles.movieDetailsTitle}><b>Названия фильма:</b> {selectedMovie.title}</h1>

          <div className={styles.DetailsMainRoleContainer}>
            <h4 style={{ marginRight: "15px" }} className={styles.detailsh4} ><b>В главных ролях:</b> </h4>
            {mainCredits.map(actor =>
              <p className={styles.detailsh4} style={{ marginRight: "15px" }} key={actor.id}>{actor.name}</p>)}
          </div>

          <h4 className={styles.detailsh4} style={{ fontWeight: "400" }}><b>Дата выпуска</b>: {selectedMovie.release_date}</h4>

          <h4 className={styles.detailsh4}><b>Рейтинг:</b>
            {ratingMovie(selectedMovie.vote_average)} {selectedMovie.vote_average.toFixed(1)}

            ({selectedMovie.vote_count < 1000 ?
              selectedMovie.vote_count : voteCount(selectedMovie.vote_count)})
          </h4>

          <div className={styles.detailsGanreContainer}>
            <h4 className={styles.detailsh4} style={{ marginRight: "15px" }} ><b>Категории:</b> </h4>
            {selectedMovie.genres.map((genre: any) =>
              <p className={styles.detailsh4} style={{ marginRight: "15px" }} key={genre.id}>{genre.name}</p>)}
          </div>

          <h4 className={styles.detailsh4}><b>Бюджет фильма:</b> {selectedMovie.budget === 0 ? "Неизвестно" : selectedMovie.budget.toLocaleString() + "$"}</h4>

          <h4 className={styles.detailsh4}><b>Кассовые сборы:</b> {selectedMovie.revenue === 0 ? "Неизвестно" : selectedMovie.revenue.toLocaleString() + "$"}</h4>

          <h4 className={styles.detailsh4}><b>Оригинальный язык:</b> {language(selectedMovie.original_language)}</h4>

          <h4 className={styles.detailsh4}><b>Страна производитель</b> {country(selectedMovie.origin_country[0])} </h4>

          <h4 className={styles.detailsh4}><b>Длительность фильма:</b> {selectedMovie.runtime + "min"}</h4>

        </div>
      </div>

      <div className={styles.movieDetailsRead}>
        <h4 ><b>Описание:</b> <span style={{ fontWeight: "400", lineHeight: "200%" }}>{selectedMovie.overview}</span></h4>
      </div>
    </div>
  )
}