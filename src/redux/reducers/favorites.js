import { ADD_FAVORITE } from "../../constants";

const favoritesStore = sessionStorage.getItem("favorites");

const initialState = {
  favorites: JSON.parse(favoritesStore) || []
};

export const addFavoriteReducer = (state = initialState, {type, payload}) => {
  const favorites = state.favorites.includes(payload) ? state.favorites.filter((favorite) => {
    return favorite !== payload;
  }) : [...state.favorites, payload];

  switch (type) {
    case ADD_FAVORITE:
      sessionStorage.setItem("favorites", JSON.stringify(favorites));
      return {
        ...state,
        favorites
      }
    default:
      return state
  }
}
