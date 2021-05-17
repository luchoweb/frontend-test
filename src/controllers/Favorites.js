import {useEffect, useState} from "react";
import {connect} from "react-redux";
import Loading from "../components/loading";
import {getArticles} from "../api";
import {LIMIT_PAGE} from "../constants";
import BlogView from "../views/blog";

const FavoritesController = ({favorites}) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    if (favorites.length) {
      const fetchData = async () => {
        const response = await getArticles(1, LIMIT_PAGE, favorites);

        if ( response !== "Error" ) {
          setArticles(response);
        } else {
          setArticles([]);
        }
      }
      fetchData();
    } else {
      setArticles([]);
    }
  }, []);

  return articles ? <BlogView articles={articles} /> : <Loading text="Loading favorites..." />;
}

const mapStateToProps = state => {
  return {
    favorites: state.addFavoriteReducer.favorites
  }
};

export default connect(mapStateToProps)(FavoritesController);
