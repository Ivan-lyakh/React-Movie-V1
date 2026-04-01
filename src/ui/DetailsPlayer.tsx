
type Props = {
  traillerKey: string
}

export function DetailsVideoPlayer(props: Props) {
  return (
    <div>
      <h2 className="detailsRecomendationTittle"
      style={{marginTop: "20px"}}
      >Трейлер фильма:</h2>
      <div className="movieDetailsVideo">
      <iframe 
        
        src={`https://www.youtube.com/embed/${props.traillerKey}`}
        title="Movie Trailer"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  )
}