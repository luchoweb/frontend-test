import axios from "axios";
import {sortArrayASC} from "./helpers";

const apiURI =
  process.env.NODE_ENV === "development" ?
  process.env.REACT_APP_JSON_SERVER_API_DEV :
  process.env.REACT_APP_JSON_SERVER_API_PRO;

export const getArticles = (page, limit, favorites, query = "") => {
  const q = query && `q=${query}`;
  let favoritesUri = "";

  if  ( favorites?.length ) {
    sortArrayASC(favorites);
    favorites.map(id => favoritesUri += `id=${id}&`);
  }

  return axios.get(`${apiURI}/articles?${q}&${favoritesUri}_page=${page}&_limit=${limit}`)
    .then(response => {
      return {
        data: response.data,
        total: response.headers["x-total-count"]
      };
    })
    .catch(err => err.name);
}

export const getArticleById = id => axios.get(`${apiURI}/articles/${id}`)
  .then(response => {
    return {
      data: response.data,
      total: response.headers["x-total-count"]
    };
  })
  .catch(err => err.name);
