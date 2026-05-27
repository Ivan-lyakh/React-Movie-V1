import type { ActionMovie } from "../bll/useMovie"

import styles from '../css/FastSearch.module.css'

type Props = {
  pageGoStart: () => void
  actionMovie: ActionMovie
  activeFastSearch: number
  setActiveFastSearch: React.Dispatch<React.SetStateAction<number>>
}

export function FastSearch(props: Props) {

  return (
    <div className={styles.fastSearch}>
      <div className={styles.fastSearchBody}>
        <h1 >Быстрый фильтр: </h1>
        <div className={styles.fastSearchBodyButton}>

          <button
            className={styles.btnForFastSearch}
            onClick={() => {
              props.setActiveFastSearch(1)
              props.actionMovie.getNullMovieList()
              props.pageGoStart()
              props.actionMovie.getPopularMovies()
            }}
            style={props.activeFastSearch === 1 ? { backgroundColor: "#fff", border: "none", color: "grey" } : { backgroundColor: "inherit" }}
          >Популярные</button>

          <button
            className={styles.btnForFastSearch}
            onClick={() => {
              props.setActiveFastSearch(2)
              props.actionMovie.getNullMovieList()
              props.pageGoStart()
              props.actionMovie.getTopRatedMovies()
            }}
            style={props.activeFastSearch === 2 ? { backgroundColor: "#fff", border: "none", color: "grey" } : { backgroundColor: "inherit" }}
          >Топ рейтинг</button>

          <button className={styles.btnForFastSearch}
            onClick={() => {
              props.setActiveFastSearch(3)
              props.actionMovie.getNullMovieList()
              props.pageGoStart()
              props.actionMovie.getNowPlayingMovies()
            }}
            style={props.activeFastSearch === 3 ? { backgroundColor: "#fff", border: "none", color: "grey" } : { backgroundColor: "inherit" }}
          >Сейчас в кино</button>

          <button className={styles.btnForFastSearch}
            onClick={() => {
              props.setActiveFastSearch(4)
              props.actionMovie.getNullMovieList()
              props.pageGoStart()
              props.actionMovie.getComingSoonMovies()
            }}
            style={props.activeFastSearch === 4 ? { backgroundColor: "#fff", border: "none", color: "grey" } : { backgroundColor: "inherit" }}
          >Скоро выйдут</button>

        </div>
      </div>
    </div>
  )
}