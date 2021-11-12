import React, { useState } from "react";

const Header = () => {
  const [navBg, setNavBg] = useState(true);
  return (
    <header>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}OTAKU LOGO.png`} alt="" />
      </div>
      <div
        className={navBg ? "set-bg" : "hide-set__bg"}
        onClick={() => setNavBg(!navBg)}
      ></div>
      <nav className={navBg ? "" : "hide-nav"}>
        <ul>
          <li>Home</li>
          <li>Merch</li>
          <li>Sosu-Onegai </li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
