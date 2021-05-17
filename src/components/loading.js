import PropTypes from 'prop-types';

const Loading = ({text}) => {
  return (
    <div className="container">
      <p>{text}</p>
    </div>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

export default Loading;
