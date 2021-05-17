import {useRef} from "react";
import PropTypes from 'prop-types';
import Button from "./button";

import "../styles/components/search.scss";

const Search = ({
  results,
  handleClick
}) => {
  const searchInput = useRef();

  return (
    <section className="search">
      <label htmlFor="search" className="search__icon">
        <i className="icon icon-search"> </i>
      </label>
      <input
        id="search"
        type="text"
        className="search__input"
        placeholder="Search"
        ref={searchInput}
        onKeyPress={(event) => event.key === "Enter" && handleClick(searchInput.current?.value)}
        onChange={() => searchInput.current?.value === "" && handleClick(searchInput.current?.value)}
      />
      <span className="search__results">
        {parseInt(results) > 0 ? `${results}` : `no`} results
      </span>
      <Button
        text="Search"
        cssClasses="search__button button--primary"
        handleClick={() => handleClick(searchInput.current?.value)}
      />
    </section>
  )
}

Search.propTypes = {
  results: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handleClick: PropTypes.func.isRequired
}

export default Search;
