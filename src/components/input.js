import PropTypes from 'prop-types';

import "../styles/components/input.scss";

const Input = ({
  type = "text",
  placeholder,
  cssClass = "",
  isRequired = false,
  maxLength = 50,
  handleKeyUp,
  error = null
}) => {
  return (
    <>
      <input
        type={type}
        className={`input ${cssClass}`}
        placeholder={placeholder}
        required={isRequired}
        maxLength={maxLength}
        onKeyUp={handleKeyUp}
      />
      {error &&
        <span className="input__error">
          {error}
        </span>
      }
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  cssClass: PropTypes.string,
  isRequired: PropTypes.bool,
  maxLength: PropTypes.number,
  handleKeyUp: PropTypes.func,
  error: PropTypes.string
}

export default Input;
