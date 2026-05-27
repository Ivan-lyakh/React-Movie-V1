
type Props = {
  traillerKey: string
}

import styles from '../css/DetailsBody.module.css'

export function DetailsVideoPlayer(props: Props) {

  return (
    <div>
      <h2 className={styles.detailsRecomendationTittle}
        style={{ marginTop: "20px" }}
      >Трейлер фильма:</h2>
      <div className={styles.movieDetailsVideo}>
        <iframe

          src={`https://www.youtube.com/embed/${props.traillerKey}`}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}