import { type Movie } from "../bll/useMovie"
import { type resultSearchType } from "../bll/useSearch"
import left from "../img/left.png"
import right from "../img/right.png"


type Props = {
  pageGoBack: () => void
  pageGoNext: () => void
  page: number
  movies: Movie[] | null
  resultSearch: resultSearchType[] | null
  setResultSearch: React.Dispatch<React.SetStateAction<resultSearchType[] | null>>
}

export function PagesSetter(props: Props) {

  if (props.movies && props.movies.length >= 20 && !props.resultSearch) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "50px" }}>

        <button
          style={{ display: "flex", alignItems: "center" }}
          className="setPage"
          onClick={() => {
            if (props.page > 1) {
              props.pageGoBack()
              window.scrollTo(0, 0)
            }
          }}><img style={{ maxWidth: "30px" }} src={left} /></button>

        <span style={{ padding: "0px 20px" }}>Страница - {props.page}</span>

        <button style={{ display: "flex", alignItems: "center" }} className="setPage" onClick={() => {
          props.pageGoNext()
          window.scrollTo(0, 0)
        }}><img style={{ maxWidth: "30px" }} src={right} /></button>
      </div>
    )
  }
}