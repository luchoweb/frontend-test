import { Link } from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { IMAGES_PATH, ARTICLE_PATH } from "../constants";
import { dateFormatter } from "../helpers";
import {addFavorite} from "../redux/actions/favorites";
import {showSignUpModal} from "../redux/actions/signUp";
import Badge from "./badge";
import Star from "./star";

import "../styles/components/card.scss";

const Card = ({
  article,
  addFavorite,
  signUpSession,
  showSignUpModal
}) => {
  const articleTitle = article.title?.substr(0, 70);
  const articleIntro = article.intro?.substr(0, 60);

  const handleAddFavorite = () => {
    if ( signUpSession.email !== undefined ) {
      addFavorite(article.id);
    } else {
      showSignUpModal(true);
    }
  }

  return (
    <>
      <Star
        handleClick={() => handleAddFavorite()}
        idArticle={article.id}
      />

      <Link to={`${ARTICLE_PATH}/${article.id}`} className="link">
        <article className="card">
          <Badge price={article.price} />
          <figure className="card__image">
            <img src={`${IMAGES_PATH}/${article.image}`} alt={article.image_caption} />
          </figure>
          <div className="card__content">
            <h5 className="card__title">
              {articleTitle}
              {article.title?.length > articleTitle.length && "..."}
            </h5>
            <p className="card__intro">
              {articleIntro}
              {article.intro?.length > articleIntro.length && "..."}
            </p>
          </div>
          <div className="card__footer">
            <hr />
            <div className="card__author">
              <figure className="author__avatar">
                <img src={`${IMAGES_PATH}/${article.author?.avatar}`} alt={article.author?.name} />
              </figure>
              <span className="author__name">
                {article.author?.name}
              </span>
            </div>
            <div className="card__date">
              <span className="date">
                {dateFormatter(article.created_at, "short")}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </>
  )
}

const mapStateToProps = state => {
  return {
    signUpSession: state.signUpReducer.signUpSession
  }
};

Card.propTypes = {
  article: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
  signUpSession: PropTypes.object,
  showSignUpModal: PropTypes.func
}

export default connect(mapStateToProps, { addFavorite, showSignUpModal })(Card);
