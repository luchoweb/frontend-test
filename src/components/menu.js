import { NavLink } from "react-router-dom";

import "../styles/components/menu.scss";

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <NavLink
            to="/"
            exact={true}
            className="menu__link"
            activeClassName="menu__link--selected"
          >
            Articles
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/favorites"
            exact={true}
            className="menu__link"
            activeClassName="menu__link--selected"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;
