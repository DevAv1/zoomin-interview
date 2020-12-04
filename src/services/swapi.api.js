const URL = "https://swapi.dev/api/";

export const getFilms = async () => {
  const filmsURL = `${URL}films/`;
  const response = await fetch(filmsURL);
  const { results } = await response.json();
  return results;
}