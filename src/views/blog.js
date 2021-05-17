import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getArticles} from "../api";
import { LIMIT_PAGE } from "../constants";
import Card from "../components/card";
import Button from "../components/button";
import Search from "../components/search";
import SignUp from "../components/signUp";
import NotFoundView from "./notFound";

import "../styles/blog.scss";

const BlogView = ({articles, favoritesState}) => {
  const location = useLocation();
  const isFavoritesPage = location.pathname.indexOf("favorites") > -1;
  const isFavorites = isFavoritesPage && favoritesState.length > 0;

  const [state, setState] = useState({
    currentPage: 1,
    articlesArr: articles.data,
    articlesLng: articles.total,
    query: null
  });

  const handleSearch = async (query) => {
    const response = await getArticles(state.currentPage, LIMIT_PAGE, isFavorites && favoritesState, query);
    if ( response !== "Error" ) {
      const newState = {
        currentPage: state.currentPage,
        articlesArr: isFavoritesPage && favoritesState.length === 0 ? [] : response.data,
        articlesLng: response.total,
        query,
      }
      setState(newState);
    }
  }

  const handleLoadMore = async (page) => {
    const response = await getArticles(page, LIMIT_PAGE, isFavorites && favoritesState, state.query);
    if ( response !== "Error" ) {
      const newState = {
        currentPage: page,
        articlesArr: [...state.articlesArr, ...response.data],
        articlesLng: response.total,
        query: state.query
      }
      setState(newState);
    }
  }

  useEffect(() => {
    if (isFavorites && !articles.data) {
      console.log("useEffect")
      const fetchData = async () => {
        const response = await getArticles(1, LIMIT_PAGE, favoritesState);
        setState({
          ...state,
          currentPage: 1,
          articlesArr: response !== "Error" ? response.data : [],
          articlesLng: response !== "Error" ? response.total : 0,
        });
      }
      fetchData();
    } else if (isFavoritesPage && favoritesState.length === 0) {
      setState({
        ...state,
        currentPage: 1,
        articlesArr: [],
        articlesLng: 0
      });
    }

    articles.data = undefined;
  }, [favoritesState]);

  return (
    <>
      <SignUp />
      <Search results={state.articlesLng} handleClick={handleSearch} />
      {state.articlesArr?.length ? (
        <section className="blog">
          <ul className="blog__articles">
          {state.articlesArr.map((article, index) => (
            <li
              key={`key-${index}`}
              className="article"
            >
              <Card article={article} />
            </li>
          ))}
          </ul>

          {state.currentPage < state.articlesLng / LIMIT_PAGE &&
            <Button
              cssClasses="button--outline blog__load-more"
              handleClick={() => handleLoadMore(state.currentPage + 1)}
              text="Load more..."
              iconClass="icon-arrow-right icon--right"
              rightIcon={true}
            />
          }
        </section>
      ) : (
        <NotFoundView />
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    favoritesState: state.addFavoriteReducer.favorites
  }
};

BlogView.propTypes = {
  articles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  favoritesState: PropTypes.array
}

export default connect(mapStateToProps)(BlogView);
