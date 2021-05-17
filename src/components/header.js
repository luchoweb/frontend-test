import Logo from "./logo";
import Menu from "./menu";

import "../styles/components/header.scss";
import LogoImg from "../assets/images/logo.png";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__row">
        <div className="header__col header__col--logo">
          <Logo image={LogoImg} />
        </div>
        <div className="header__col header__col--menu">
          <Menu />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
