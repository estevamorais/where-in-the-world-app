import "./index.scss";

import { useState } from "react";

const SwitchThemeButton = () => {
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
    <button className="btn-switch-theme" onClick={handleColorScheme}>
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
  );
};

export default SwitchThemeButton;
