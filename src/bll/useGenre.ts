import { useState, useEffect } from "react";
import { getGanres } from "../dal/api";

export type Genres = {
  id: number
  name: string
}

export function useGenre() {
  const [ganres, setGanres] = useState<Genres[]>([])

  const [isOpen, setIsOpen] = useState(false)

  const isOpenToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    getGanres()
      .then(json => setGanres(json.genres))
  }, [])


  return { ganres, isOpen, isOpenToggle }
}