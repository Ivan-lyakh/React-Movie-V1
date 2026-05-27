import { type Movie } from "../bll/useMovie"
import left from "../img/left.png"
import right from "../img/right.png"
import { useSelector } from "react-redux"

import styles from '../css/PagesSetter.module.css'

type Props = {
  pageGoBack: () => void
  pageGoNext: () => void
  page: number
  movies: Movie[] | null
}

export function PagesSetter(props: Props) {

  const resultSearch = useSelector((state: any) => state.search.resultSearch)

  if (props.movies && props.movies.length >= 20 && resultSearch.length === 0) {
    return (
      <div className={styles.pagesSetterBody}>


        <button
          className="setPage"
          onClick={() => {
            if (props.page > 1) {
              props.pageGoBack()
              window.scrollTo(0, 0)
            }
          }}><img className={styles.buttonImg} src={left} />
        </button>

        <span>Страница - {props.page}</span>

        <button className="setPage" onClick={() => {
          props.pageGoNext()
          window.scrollTo(0, 0)
        }}><img className={styles.buttonImg} src={right} /></button>

      </div>
    )
  }
}