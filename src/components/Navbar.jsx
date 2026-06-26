import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">📷 PhotoVault</h2>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#gallery">Gallery</a></li>
        <li>
          <a href="#about">About</a></li>
        <li>
          <a href="#contact">Contact</a></li>
      </ul>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;