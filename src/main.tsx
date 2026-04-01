
import { createRoot } from 'react-dom/client'
import { MovieList } from './ui/MovieList'
import { Header } from './ui/Header'
import { Footer } from './ui/Footer'
import "./index.css"

import { useSelectedMovie } from './bll/useSelectedMovie'
import { useSearch } from './bll/useSearch'

createRoot(document.getElementById('root')!).render(<MainPage />
)

function MainPage() {

  const { selectedMovie, getNullSelectedMovie, isLoading, getMovieDetails, getIsLoadingFalse, getIsLoadingTrue } = useSelectedMovie()

  const { getMovieResultSearch, resultSearch, getNullResultSearch, setResultSearch, search, getStringInput, searchActive, setSearchActive, getFalseStringForSearch } = useSearch()

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        <Header
          getMovieResultSearch={getMovieResultSearch}
          getStringInput={getStringInput}
          getFalseStringForSearch={getFalseStringForSearch}
          getNullResultSearch={getNullResultSearch}
          getNullSelectedMovie={getNullSelectedMovie}
          search={search}
          resultSearch={resultSearch}
          setSearchActive={setSearchActive} />

      <div style={{ flex: "1" }}>
        <MovieList
          getIsLoadingFalse={getIsLoadingFalse}
          getIsLoadingTrue={getIsLoadingTrue}
          getMovieDetails={getMovieDetails}
          getNullSelectedMovie={getNullSelectedMovie}
          getNullResultSearch={getNullResultSearch}
          resultSearch={resultSearch}
          setResultSearch={setResultSearch}
          selectedMovie={selectedMovie}
          searchActive={searchActive}
          setSearchActive={setSearchActive}
          isLoading={isLoading}/>
      </div>

      <div >
        <Footer
          getNullSelectedMovie={getNullSelectedMovie} 
          setSearchActive={setSearchActive}
          getNullResultSearch={getNullResultSearch}/>
      </div>

    </div>
  )
}
