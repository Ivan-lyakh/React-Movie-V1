
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../dal/api";

import styles from "../css/Header.module.css"



import * as searchActions
  from "../slicesStore/search";

import * as selectedMovieAction
  from "../slicesStore/selectedMovie";

export function Header() {

  const dispatch = useDispatch()

  const search = useSelector((state: any) => state.search.search)

  const resultSearch = useSelector((state: any) => state.search.resultSearch)

  const getMovieResultSearch = async () => {
    const data = await getSearch(search)
    dispatch(searchActions.setResultSearch(data.results))
  }

  const handlerSearch = async () => {
    if (
      resultSearch.length === 0
    ) {
      dispatch(
        searchActions
          .searchActiveTrue()
      )
    }

    await getMovieResultSearch()

    dispatch(
      searchActions
        .resetSearch()
    )

  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerBody}>
          <div
            className={styles.headerLogo}
            onClick={() => {
              dispatch(selectedMovieAction.resetSelectedMovie())
              dispatch(searchActions.searchActiveFalse())
              dispatch(searchActions.resetResultSearch())
            }}>
            <h1 >Your GID-MOVIE</h1>
          </div>

          <div className={styles.inputHeader}>
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlerSearch()
                }
              }}
              value={search}
              onChange={(e) => dispatch(searchActions.setSearch(e.target.value))}
              placeholder="Что ищем?"
              type="text" />

            <button
              className={styles.btnHeader}
              onClick={() => handlerSearch()}
            >Найти</button>
          </div>

        </div>
      </div>
    </div >
  )
}