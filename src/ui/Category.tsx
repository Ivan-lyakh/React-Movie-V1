import { type ActionMovie } from "../bll/useMovie"
import { type Genres } from "../bll/useGenre"
import { useState } from "react"
import { useGenre } from "../bll/useGenre"

import styles from "../css/Cattegory.module.css"

type Props = {
  actionMovie: ActionMovie
  page: number
}

export function Category(props: Props) {

  const [activeCategoryBg, setActiveCategoryBg] = useState(0)

  const { ganres, isOpen, isOpenToggle } = useGenre()

  return (

    <div className={styles.filter}>

      <div className={styles.filterHeader}>
        <h2>Категории:</h2>
        <button
          className={styles.filterBtnToggle}
          onClick={() => {
            isOpenToggle()
            props.actionMovie.getPopularMovies()
            setActiveCategoryBg(0)
          }}
        >{isOpen === false ? "Показать" : "Скрыть"}</button>
      </div>

      {isOpen &&
        <div>
          <div className={styles.filterBody}>
            {ganres.map((ganre: Genres) => {
              if (ganre.name !== "телевизионный фильм") {
                {
                  return (
                    <div>
                      <div key={ganre.id}>
                        <button
                          className={styles.bntForFilter}
                          key={ganre.id}
                          onClick={() => {
                            setActiveCategoryBg(ganre.id)
                            props.actionMovie.getListGanre(ganre.id)
                          }}
                          style={activeCategoryBg === ganre.id
                            ? { backgroundColor: "#fff", color: "grey" }
                            : { backgroundColor: "inherit", color: "inherit" }}
                        >{ganre.name}</button>
                      </div>
                    </div>
                  )
                }
              }
            }
            )}
          </div>
        </div>}
    </div>
  )
}