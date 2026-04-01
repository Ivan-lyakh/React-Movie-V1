
type Props = {
  getIsLoadingFalse: () => void
  getIsLoadingTrue: () => void
  getMovieDetails: (id: number) => void
  getNullResultSearch: () => void
  title: string
  image: string
  id: number
}

export function MovieItem(props: Props) {

  return (
    <div
      className="movie__card"
      onClick={() => {
        props.getIsLoadingTrue()
        props.getNullResultSearch()
        props.getMovieDetails(props.id)
        window.scrollTo(0, 0)
        props.getIsLoadingFalse()
      }}  >
      <img className="movieCardImg" src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="#" />
      <h2 className="movieCardTitle">{props.title}</h2>
    </div>
  )
}