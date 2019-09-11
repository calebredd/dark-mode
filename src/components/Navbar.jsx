import React from "react";

const Navbar = props => {
  // const [darkMode, setDarkMode] = useLocalStorage("darkMode", "true");
  const { darkMode } = props;
  const { setDarkMode } = props;
  const { setDark } = props;
  // const { dark } = props;
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    darkMode ? setDark("") : setDark("dark-mode");
    // document.body.classList.toggle("dark-mode");
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div>
        <h4>Light/Dark</h4>
        <div className="dark-mode__toggle" onClick={toggleMode}>
          <div className={darkMode ? "toggle toggled" : "toggle"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
