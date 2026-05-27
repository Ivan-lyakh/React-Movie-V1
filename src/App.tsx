
import { MovieList } from './ui/MovieList'
import { Header } from './ui/Header'
import { Footer } from './ui/Footer'
import "./index.css"

export function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      <Header />

      <div style={{ flex: "1" }}>
        <MovieList />
      </div>

      <div >
        <Footer />
      </div>

    </div>
  )
}