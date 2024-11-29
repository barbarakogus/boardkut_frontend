import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import "./MobileHeader.css";

const style = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "30px",
    right: "1rem",
    top: "1rem",
  },
  bmBurgerBars: {
    background: "var(--black)",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "var(--black)",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100vh",
    width: "250px",
    top: "62px",
  },
  bmMenu: {
    background: "var(--background--gray)",
    fontSize: "1.15em",
    padding: "1.5em 0em 1em 0em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  bmItem: {
    display: "inline-block",
    color: "var(--black)",
    textDecoration: "none",
    padding: "0.3em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.0)",
  },
};

const MobileHeader = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = (state) => {
    return state.isOpen;
  };

  return (
    <nav className="container__burguerMenu">
      <button className="title__burguerMenu">BoardKut</button>
      <Menu styles={style} isOpen={isMenuOpen} onStateChange={toggleMenu} right>
        <a href={`/games`}>Boardgames</a>
        <a href={`/friends`}>Friends</a>
        <a href={`/logout`}>Log out</a>
      </Menu>
    </nav>
  );
};

export default MobileHeader;
