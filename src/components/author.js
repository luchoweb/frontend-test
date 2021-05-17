import PropTypes from 'prop-types';
import {dateFormatter} from "../helpers";
import {IMAGES_PATH} from "../constants";

import "../styles/components/author.scss";

const Author = ({data}) => {
  return (
    <section className="author">
      <figure className="author__avatar">
        <img src={`${IMAGES_PATH}/${data.avatar}`} alt=""/>
      </figure>
      <div className="author__name-date">
        <span className="author__name">
          {data.name}
        </span>
        <span className="author__date">
          Published on {dateFormatter(data.date)}
        </span>
      </div>
    </section>
  )
}

Author.propTypes = {
  data: PropTypes.object.isRequired
}

export default Author;
