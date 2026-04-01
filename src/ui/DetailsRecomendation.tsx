
type Props = {
  getNullMovieId: () => void
  getDetails: (id: number) => void
  recomendMovies: {
    id: number
    title: string
    poster_path: string
  }[]
}

export function DetailsRecomendation(props: Props) {

  const movieForPresent = props.recomendMovies.slice(-4)

  return (
    <div className="detailsRecomendation" >

      <h2 className="detailsRecomendationTittle">Похожие фильмы:</h2>

      <div className="detailsRecomendationBody">
        {movieForPresent.map((movie => {
          return (
            <div
              className="detailsRecomendationCard"
              key={movie.id}
              onClick={() => {
                props.getNullMovieId()
                props.getDetails(movie.id)
                window.scrollTo(0, 0)
              }}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
              <h2 style={{ textAlign: "center", marginTop: "15px" }}>{movie.title}</h2>
            </div>)
        }))}
      </div>
    </div>
  )
}