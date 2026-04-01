
import { type resultSearchType } from "../bll/useSearch"

type Props = {
  getMovieResultSearch: (search: string) => void
  getFalseStringForSearch: () => void
  getStringInput: (value: string) => void
  getNullResultSearch: () => void
  getNullSelectedMovie: () => void
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>
  search: string
  resultSearch: resultSearchType[] | null
}

export function Header(props: Props) {

  return (
    <div className="header">
      <div className="container">
        <div className="headerBody">
          <div
            className="headerLogo"
            onClick={() => {
              props.getNullSelectedMovie()
              props.setSearchActive(false)
              props.getNullResultSearch()
            }}>
            <h1 >Your GID-MOVIE</h1>
          </div>

          <div className="inputHeader">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  props.resultSearch === null && props.setSearchActive(true)
                  props.getFalseStringForSearch()
                  props.getNullResultSearch()
                  props.getMovieResultSearch(props.search)
                }
              }}
              value={props.search}
              onChange={(e) => props.getStringInput(e.target.value)}
              placeholder="Что ищем?"
              type="text" />

            <button
              className="btnHeader"
              onClick={() => {
                { props.resultSearch === null && props.setSearchActive(true) }
                props.getFalseStringForSearch()
                props.getNullResultSearch()
                props.getMovieResultSearch(props.search)
              }}
            >Найти</button>
          </div>

        </div>
      </div>
    </div >
  )
}