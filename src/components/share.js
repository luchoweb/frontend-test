import PropTypes from 'prop-types';

import "../styles/components/share.scss";

const Share = () => {
  const articleUrl = window.location.href;

  const handleShare = (social) => {
    const linkEncode = encodeURI(articleUrl);
    let socialLink;

    switch (social) {
      case "instagram":
        socialLink = `https://www.instagram.com/koombea`;
        break;
      case "twitter":
        socialLink = `https://twitter.com/intent/tweet?text=I+just+want+to+share+this+article+with+you&url=${linkEncode}`;
        break;
      default:
        socialLink = `https://www.facebook.com/sharer/sharer.php?u=${linkEncode}`;
        break;
    }

    window.open(socialLink, "Social Share", "width=500,height=500");
  }

  return (
    <section className="share">
      <span className="share__caption">Share:</span>
      <ul className="share__icons">
        <li className="share-icon" onClick={() => handleShare("instagram")}>
          <i className="icon icon-instagram"> </i>
        </li>
        <li className="share-icon" onClick={() => handleShare()}>
          <i className="icon icon-facebook"> </i>
        </li>
        <li className="share-icon" onClick={() => handleShare("twitter")}>
          <i className="icon icon-twitter"> </i>
        </li>
      </ul>
    </section>
  )
}

Share.propTypes = {
  social: PropTypes.string
}

export default Share;
