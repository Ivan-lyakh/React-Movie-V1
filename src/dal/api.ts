
export function getRecomendMovie(id: number){
  return (
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU`)
    .then(res => res.json())
  )
}

export function getCredits(id: number) {
  return (
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU`)
      .then(res => res.json())
  )
}

export function getMovieKey(id: number) {
  return (
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=9cba180fdcd19c6d0835e1737b407b85`)
      .then(res => res.json())
  )
}

export function getSearch(search: string) {
  return (
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&query=${search}`))
    .then(res => res.json())
}


export const getPopular = (page: number) => {
  return (
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&page=${page}`)
      .then(res => res.json())
  )
}

export const getDetail = (id :number) => {
  return (
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU`)
      .then(res => res.json())
  )
}

export const getTopRated = (page: number) => {
  return (
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&page=${page}`)
      .then(res => res.json())
  )
}

export const getNowPlaying = (page: number) => {
  return (
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&page=${page}`)
      .then(res => res.json())
  )
}

export const getComingSoon = (page: number) => {
  return (
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&page=${page}`)
      .then(res => res.json())
  )
}

export const getGanres = () => {
  return (
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU`)
      .then(res => res.json())
  )
}

export const getListMovieGenre = (id : number) => {
  return (
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9cba180fdcd19c6d0835e1737b407b85&language=ru-RU&with_genres=${id}`)
      .then(res => res.json())
  )
}
