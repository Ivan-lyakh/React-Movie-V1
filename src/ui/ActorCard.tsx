import noPhoto from "../img/noPhotoActor.jpg"

type Props = {
  name: string
  img: string
}

export function ActorCard(props: Props) {
  return (
    <div style={{ textAlign: "center" }}>
      <img style={{width: "200px",height: "300px", objectFit: "cover"}} src={props.img
        ? `https://image.tmdb.org/t/p/w200${props.img}`
        : noPhoto 
      } />
    <h2 style={{ marginTop: "20px" }}>{props.name}</h2>
    </div>
  )
}