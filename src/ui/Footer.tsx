
import { useDispatch } from "react-redux";

import styles from '../css/Footer.module.css'

import * as searchActions
  from "../slicesStore/search";

import * as selectedMovieAction
  from "../slicesStore/selectedMovie";

export function Footer() {

  const dispatch = useDispatch()

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerBody}>
          <div>
            <h2 className={styles.footerTitle}>Footer</h2>
          </div>
          <div>
            <button
              className={styles.btnFooter}
              onClick={() => {
                dispatch(selectedMovieAction.resetSelectedMovie())
                dispatch(searchActions.searchActiveFalse())
                dispatch(searchActions.resetResultSearch())
                window.scrollTo(0, 0)
              }}>На Главную
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}