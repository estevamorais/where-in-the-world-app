import "./index.scss";

import SwitchThemeButton from "../SwitchThemeButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content container">
        <h1 className="navbar__title">Where in the world?</h1>

        <SwitchThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
