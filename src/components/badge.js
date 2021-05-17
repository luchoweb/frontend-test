import PropTypes from 'prop-types';
import "../styles/components/badge.scss";

const Badge = ({
  price,
  cssClass = "badge--green"
}) => (
  <span className={`badge ${cssClass}`}>${price}/MO</span>
);

Badge.propTypes = {
  price: PropTypes.number.isRequired,
  cssClass: PropTypes.string
}

export default Badge;
