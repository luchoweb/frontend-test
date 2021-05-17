import PropTypes from 'prop-types';

import "../styles/components/logo.scss";

const Logo = ({image}) => {
  return (
    <figure className="logo">
      <img src={image} alt="logo" className="logo__img"/>
    </figure>
  )
}

Logo.propTypes = {
  image: PropTypes.string.isRequired
}

export default Logo;
