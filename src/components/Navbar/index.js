import "./index.scss";

import { NavLink } from "react-router-dom";

import SwitchThemeButton from "../SwitchThemeButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content container">
        <h1 className="navbar__title">
          <NavLink to="/">Where in the world?</NavLink>
        </h1>

        <SwitchThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
