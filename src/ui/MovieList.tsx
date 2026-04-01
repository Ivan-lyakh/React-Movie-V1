import { type resultSearchType } from "../bll/useSearch";
import { type MovieDetails } from "../bll/useSelectedMovie";
import { useState } from "react"
import { MovieItem } from "./MovieItem";
import { MovieDetail } from "./MovieDetail";
import { PagesSetter } from "./PagesSetter";
import { Loading } from "./Loadning";
import { FastSearch } from "./FastSearch";
import { Category } from "./Category";
import { useMovie, type Movie } from "../bll/useMovie";
import { useMovieId } from "../bll/useMovieId";
import { usePage } from "../bll/usePage";

export type Genres = {
  id: number
  name: string
}

type Props = {
  getIsLoadingFalse: () => void
  getIsLoadingTrue: () => void
  getNullResultSearch: () => void
  getMovieDetails: (id: number) => void
  getNullSelectedMovie: () => void
  resultSearch: resultSearchType[] | null
  setResultSearch: React.Dispatch<React.SetStateAction<resultSearchType[] | null>>
  selectedMovie: MovieDetails | null
  searchActive: boolean
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
}

export function MovieList(props: Props) {

  const { page, pageGoStart, pageGoBack, pageGoNext } = usePage()

  const [activeFastSearch, setActiveFastSearch] = useState<number>(1)

  const { movies, getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getComingSoonMovies, getNullMovieList, getListGanre } = useMovie(page)

  const { movieId, getNullMovieId } = useMovieId(props.selectedMovie)

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

  if (props.isLoading) {
    return (
      <Loading />
    )
  }

  if (props.searchActive && props.resultSearch && props.resultSearch.length === 0) {
    return (
      <div className="container">
        <div className="notResultSearch">
          <h2 >К сожелению ничего не удалось найти:/</h2>
          <h2 style={{ fontSize: "20px", marginTop: "40px" }}>попробуйте проверить свой запрос поиска</h2>
        </div>
      </div>
    )
  }

  if (props.resultSearch !== null && props.searchActive) {

    return (
      <div className="container">
        <div className="mainListCenter">
          <div className="mainList">
            {props.resultSearch.map((resulSearchtMovie: resultSearchType) => {
              return (
                <MovieItem
                  key={resulSearchtMovie.id}
                  id={resulSearchtMovie.id}
                  title={resulSearchtMovie.title}
                  image={resulSearchtMovie.poster_path}
                  getMovieDetails={props.getMovieDetails}
                  getIsLoadingFalse={props.getIsLoadingFalse}
                  getIsLoadingTrue={props.getIsLoadingTrue}
                  getNullResultSearch={props.getNullResultSearch}
                />
              )
            })}
          </div>
        </div>

      </div>
    )
  }

  if (props.searchActive === false && props.selectedMovie === null) {
    return (
      <div className="container">

        <FastSearch
          getPopularMovies={getPopularMovies}
          getTopRatedMovies={getTopRatedMovies}
          getNowPlayingMovies={getNowPlayingMovies}
          getComingSoonMovies={getComingSoonMovies}
          getNullMovieList={getNullMovieList}
          pageGoStart={pageGoStart}
          activeFastSearch={activeFastSearch}
          setActiveFastSearch={setActiveFastSearch}
        />

        <Category
          getPopularMovies={getPopularMovies}
          getListGanre={getListGanre}
          movies={movies}
          page={page}
        />

        <div className="movieListContainer">
          <div className="mainList">
            {movies.map((movie: Movie) => {
              return (
                <MovieItem
                  getNullResultSearch={props.getNullResultSearch}
                  getMovieDetails={props.getMovieDetails}
                  getIsLoadingFalse={props.getIsLoadingFalse}
                  getIsLoadingTrue={props.getIsLoadingTrue}
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
          movies={movies}
          resultSearch={props.resultSearch}
          setResultSearch={props.setResultSearch} />

      </div>
    )
  }

  if (props.selectedMovie !== null) {
    return (
      <>
        <MovieDetail
          getDetails={props.getMovieDetails}
          getNullSelectedMovie={props.getNullSelectedMovie}
          getNullMovieId={getNullMovieId}
          selectedMovie={props.selectedMovie}
          selectedMovieId={movieId}
          setSearchActive={props.setSearchActive}
        />
      </>)
  }
}
