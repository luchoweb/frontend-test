import { ADD_FAVORITE } from "../../constants";

export const addFavorite = (idArticle) => {
  return {
    type: ADD_FAVORITE,
    payload: idArticle,
  }
};
