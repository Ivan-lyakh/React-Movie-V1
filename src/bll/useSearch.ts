import { useState } from "react";
import { getSearch } from "../dal/api";

export type resultSearchType = {
  id: number
  title: string
  poster_path: string
}

export function useSearch() {
  const [resultSearch, setResultSearch] = useState<resultSearchType[] | null>(null)
  const [search, setSearch] = useState<string>("")
  const [searchActive, setSearchActive] = useState(false)

  const getNullResultSearch = () => {
    setResultSearch(null)
  }

  const getFalseStringForSearch = () => {
    setSearch('')
  }

  const getStringInput = (value: string) => {
    setSearch(value)
  }

  const getMovieResultSearch = (search: string) => {
    getSearch(search).then(json => setResultSearch(json.results))
  }


  return { resultSearch, getNullResultSearch, setResultSearch, search, setSearch, searchActive, setSearchActive, getFalseStringForSearch, getStringInput, getMovieResultSearch }
}