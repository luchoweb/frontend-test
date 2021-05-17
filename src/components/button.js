import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import "../styles/components/button.scss";

const Button = ({
  type,
  cssClasses,
  href,
  text,
  leftIcon,
  rightIcon,
  iconClass,
  handleClick
}) => {
  switch (type) {
    case "link" :
      return (
        <Link
          to={href}
          className={`button ${cssClasses}`}
        >
          {text}
        </Link>
      );
    default:
      return (
        <button
          className={`button ${cssClasses} ${leftIcon || rightIcon ? "button--icon" : ""}`}
          onClick={handleClick}
        >
          {leftIcon || rightIcon ? <i className={`icon ${iconClass}`}> </i> : ''}
          {text}
        </button>
      );
  }
}

Button.propTypes = {
  cssClasses: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool
}

export default Button;
