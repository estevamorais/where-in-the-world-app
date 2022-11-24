import "./index.scss";

import { useState } from "react";

const Navbar = () => {
  const handleDataTheme = (scheme) => {
    document.body.setAttribute("data-theme", scheme);
  };

  const handleUserColorScheme = () => {
    let _colorScheme = localStorage.getItem("colorScheme");

    if (!_colorScheme && window.matchMedia) {
      _colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    handleDataTheme(_colorScheme);
    return _colorScheme;
  };

  const [colorScheme, setColorScheme] = useState(handleUserColorScheme());

  const handleColorScheme = () => {
    const newColorScheme = colorScheme === "dark" ? "light" : "dark";

    // Save the color scheme prefers for this application
    localStorage.setItem("colorScheme", newColorScheme);

    handleDataTheme(newColorScheme);
    setColorScheme(newColorScheme);
  };

  return (
    <nav className="navbar">
      <div className="navbar__content container">
        <h1 className="navbar__title">Where in the world?</h1>

        <button onClick={handleColorScheme} className="navbar__switch">
          {colorScheme === "light" && (
            <>
              <ion-icon name="moon-outline"></ion-icon>
              Dark Mode
            </>
          )}
          {colorScheme === "dark" && (
            <>
              <ion-icon name="sunny-outline"></ion-icon>
              Light Mode
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
