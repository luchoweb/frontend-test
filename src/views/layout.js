import PropTypes from 'prop-types';
import Header from "../components/header";

const LayoutView = ({children}) => {
  return (
    <>
      <Header />
      <div className="container">
        { children }
      </div>
    </>
  )
}

LayoutView.propTypes = {
  children: PropTypes.any.isRequired
}

export default LayoutView;
