import {connect} from "react-redux";
import PropTypes from 'prop-types';

import "../styles/components/star.scss";

const Star = ({handleClick, favorites, idArticle}) => {

  return (
    <span
      className={`star ${favorites.includes(idArticle) ? "star--active" : ""}`}
    >
      <i
        className="icon icon-star"
        onClick={handleClick}
      > </i>
    </span>
  )
}

const mapStateToProps = state => {
  return {
    favorites: state.addFavoriteReducer.favorites
  }
};

Star.propTypes = {
  handleClick: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  idArticle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

export default connect(mapStateToProps)(Star);
