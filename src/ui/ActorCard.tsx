import noPhoto from "../img/noPhotoActor.jpg"

import styles from "../css/ActorCard.module.css"

type Props = {
  name: string
  img: string
}

export function ActorCard(props: Props) {

  return (
    <div className={styles.card}>
      <img src={props.img
        ? `https://image.tmdb.org/t/p/w200${props.img}`
        : noPhoto
      } />
      <h2>{props.name}</h2>
    </div>
  )
}