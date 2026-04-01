import { type Movie } from "../bll/useMovie"
import { type Genres } from "../bll/useGenre"
import { useState } from "react"
import { useGenre } from "../bll/useGenre"

type Props = {
  getPopularMovies: () => void
  getListGanre: (id: number) => void
  movies: Movie[]
  page: number
}

export function Category(props: Props) {

  const [activeCategoryBg, setActiveCategoryBg] = useState(0)

  const { ganres, isOpen, isOpenToggle } = useGenre()

  return (

    <div className="filter">

      <div className="filterHeader">
        <h2>Категории:</h2>
        <button
          className="filterBtnToggle"
          onClick={() => {
            isOpenToggle()
            props.getPopularMovies()
            setActiveCategoryBg(0)
          }}
        >{isOpen === false ? "Показать" : "Скрыть"}</button>
      </div>

      {isOpen &&
        <div>
          <div className="filterBody">
            {ganres.map((ganre: Genres) => {
              if (ganre.name !== "телевизионный фильм") {
                {
                  return (
                    <div>
                      <div key={ganre.id}>
                        <button
                          className="bntForFilter"
                          key={ganre.id}
                          onClick={() => {
                            setActiveCategoryBg(ganre.id)
                            props.getListGanre(ganre.id)
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