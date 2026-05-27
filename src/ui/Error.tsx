import { useSelector } from "react-redux"

import styles from '../css/Error.module.css'

export function Error() {

  const errorMassage = useSelector((state: any) => state.error.error)


  return (
    <div className={styles.container} style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className={styles.erroBody}>
        <h1 >Произошла ошибка , попробуйте перезагрузить страницу :/</h1>
        <h2 >{errorMassage}</h2>
      </div>
    </div>
  )
} 