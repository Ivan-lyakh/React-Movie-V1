import { type resultSearchType } from "../types/typesMovie";
import { useState } from "react"
import { MovieItem } from "./MovieItem";
import { MovieDetail } from "./MovieDetail";
import { PagesSetter } from "./PagesSetter";
import { Loading } from "./Loading";
import { FastSearch } from "./FastSearch";
import { Category } from "./Category";
import { useMovie, type Movie } from "../bll/useMovie";
import { usePage } from "../bll/usePage";
import { useSelector } from "react-redux";
import { Error } from "./Error";

import styles from '../css/MovieList.module.css'

export function MovieList() {

  const resultSearch = useSelector((state: any) => state.search.resultSearch)

  const searchActive = useSelector((state: any) => state.search.searchActive)

  const selectedMovie = useSelector((state: any) => state.selectedMovie.selectedMovie)

  const selectedLoading = useSelector((state: any) => state.selectedMovie.loading)

  const error = useSelector((state: any) => state.error.error)

  const { page, pageGoStart, pageGoBack, pageGoNext } = usePage()

  const [activeFastSearch, setActiveFastSearch] = useState<number>(1)

  const { movies, actionMovie } = useMovie(page)

  if (error) {
    return (
      <Error />
    )
  }

  if (movies === null) {
    return (
      <Loading />
    )
  }

  if (movies.length === 0) {
    return (
      <div>
        <h1>Movies not loading :/</h1>
      </div>
    )
  }

  if (selectedLoading) {
    return (
      <Loading />
    )
  }

  if (searchActive && resultSearch.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.notResultSearch}>
          <h2 >К сожелению ничего не удалось найти:/</h2>
          <h2 style={{ fontSize: "20px", marginTop: "40px" }}>попробуйте проверить свой запрос поиска</h2>
        </div>
      </div>
    )
  }

  if (resultSearch.length !== 0 && searchActive) {

    return (
      <div className={styles.container}>
        <div className={styles.mainListCenter}>
          <div className={styles.mainList}>
            {resultSearch.map((resulSearchtMovie: resultSearchType) => {
              return (
                <MovieItem
                  key={resulSearchtMovie.id}
                  id={resulSearchtMovie.id}
                  title={resulSearchtMovie.title}
                  image={resulSearchtMovie.poster_path}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  if (searchActive === false && selectedMovie === null) {
    return (
      <div className={styles.container}>

        <FastSearch
          actionMovie={actionMovie}
          pageGoStart={pageGoStart}
          activeFastSearch={activeFastSearch}
          setActiveFastSearch={setActiveFastSearch}
        />

        <Category
          actionMovie={actionMovie}
          page={page}
        />

        <div className={styles.movieListContainer}>
          <div className={styles.mainList}>
            {movies.map((movie: Movie) => {
              return (
                <MovieItem
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={movie.poster_path} />
              )
            })}
          </div>
        </div>

        <PagesSetter
          pageGoBack={pageGoBack}
          pageGoNext={pageGoNext}
          page={page}
          movies={movies} />

      </div>
    )
  }

  if (selectedMovie !== null) {
    return (
      <>
        <MovieDetail
        />
      </>)
  }
}
