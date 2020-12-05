const FAVORITES_FILMS_KEY = 'favoritesFilms'

export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_FILMS_KEY, JSON.stringify(favorites))
}

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(FAVORITES_FILMS_KEY));
}