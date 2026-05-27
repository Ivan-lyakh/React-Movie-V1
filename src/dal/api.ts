
export async function getRecomendMovie(id: number) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU`)

  if (!response.ok) {
    throw new Error("Ошибка загрузки рекомендаций")
  }

  const data = await response.json()

  return data
}

export async function getCredits(id: number) {

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU`)

  const data = await response.json()

  return data

}

export async function getMovieKey(id: number) {

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=9cba180fdcd19c6d0835e1737b407b85`)

  const data = await response.json()

  return data

}

export async function getSearch(search: string) {

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&query=${search}`)

  const data = await response.json()

  return data
}

export const getPopular = async (page: number) => {

  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&page=${page}`)

  if (!response.ok) {
    throw new Error("Ошибка загрузки популярных фильмов!")
  }

  const data = await response.json()
  return data
}

export const getSelectedMovie = async (id: number) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU`)

  if (!response.ok) {
    throw new Error("Ошибка загрузки выбраного фильма")
  }

  const data = await response.json()

  return data

}

export const getTopRated = async (page: number) => {

  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&page=${page}`)

  if (!response.ok) {
    throw new Error("Ошибка загрузки топ фильмов!")
  }

  const data = await response.json()

  return data

}

export const getNowPlaying = async (page: number) => {

  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&page=${page}`)

  if (!response.ok) {
    throw new Error("Ошибка загрузки сейчас в кино!")
  }

  const data = await response.json()

  return data

}

export const getComingSoon = async (page: number) => {

  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&page=${page}`)

  if (!response.ok) {
    throw new Error("Ошибка загрузки скоро выйдут!")
  }

  const data = await response.json()

  return data

}

export const getGanres = async () => {

  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU`)

  const data = await response.json()

  return data

}

export const getListMovieGenre = async (id: number) => {

  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&with_genres=${id}`)

  const data = await response.json()

  return data

}
