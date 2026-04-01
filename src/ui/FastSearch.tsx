
type Props = {

  pageGoStart: () => void
  getNowPlayingMovies: () => void
  getPopularMovies: () => void
  getTopRatedMovies: () => void
  getComingSoonMovies: () => void
  getNullMovieList: () => void
  activeFastSearch: number
  setActiveFastSearch: React.Dispatch<React.SetStateAction<number>>
}

export function FastSearch(props: Props) {

  return (
    <div className="fastSearch">
      <div className="fastSearchBody">
        <h1 >Быстрый фильтр: </h1>
        <div className="fastSearchBodyButton">

          <button
            className="btnForFastSearch"
            onClick={() => {
              props.setActiveFastSearch(1)
              props.getNullMovieList()
              props.pageGoStart()
              props.getPopularMovies()
            }}
            style={props.activeFastSearch === 1 ? { backgroundColor: "#fff", border: "none", color: "grey" } : { backgroundColor: "inherit" }}
          >Популярные</button>

          <button
            className="btnForFastSearch"
            onClick={() => {
              props.setActiveFastSearch(2)
              props.getNullMovieList()
              props.pageGoStart()
              props.getTopRatedMovies()
            }}
            style={props.activeFastSearch === 2 ? { backgroundColor: "#fff", border: "none", color: "grey" } : { backgroundColor: "inherit" }}
          >Топ рейтинг</button>

          <button className="btnForFastSearch"
            onClick={() => {
              props.setActiveFastSearch(3)
              props.getNullMovieList()
              props.pageGoStart()
              props.getNowPlayingMovies()
            }}
            style={props.activeFastSearch === 3 ? { backgroundColor: "#fff", border: "none", color: "grey" } : { backgroundColor: "inherit" }}
          >Сейчас в кино</button>

          <button className="btnForFastSearch"
            onClick={() => {
              props.setActiveFastSearch(4)
              props.getNullMovieList()
              props.pageGoStart()
              props.getComingSoonMovies()
            }}
            style={props.activeFastSearch === 4 ? { backgroundColor: "#fff", border: "none", color: "grey" } : { backgroundColor: "inherit" }}
          >Скоро выйдут</button>

        </div>
      </div>
    </div>
  )
}