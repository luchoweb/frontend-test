import PropTypes from 'prop-types';
import Author from "../components/author";
import Share from "../components/share";
import { IMAGES_PATH } from "../constants";

import "../styles/article.scss";
import NotFoundView from "./notFound";

const ArticleView = ({article}) => {

  const authorData = {
    avatar: article?.author?.avatar,
    name: article?.author?.name,
    date: article?.created_at
  };

  return (
    <>
      { article.title ? (
        <article className="article">
          <h1 className="article__title">
            {article.title}
          </h1>
          <h3 className="article__intro">
            {article.intro}
          </h3>
          <div className="article__metadata">
            <Author data={authorData} />
            <Share />
          </div>
          <figure className="article__photo">
            <img src={`${IMAGES_PATH}/${article.image}`} alt={article.image_caption} />
            <figcaption className="photo__caption">{article.image_caption}</figcaption>
          </figure>
          <div
            className="article__content"
            dangerouslySetInnerHTML={{__html: article.content}} />
        </article>
      ) : (
        <NotFoundView />
      )}
    </>
  )
}

ArticleView.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleView;
