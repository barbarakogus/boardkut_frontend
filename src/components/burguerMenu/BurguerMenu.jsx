import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './BurguerMenu.css';

const BurguerMenu = () => {

  return (
    <>
      <nav className='container__burguerMenu'>
        <Menu>
          <a className='navbar__ancor' href={`/games`}>Boardgames</a>
          <a className='navbar__ancor' href={`/friends`}>Friends</a>
        </Menu>
        <button className='title__burguerMenu'>BoardKut</button>
        <a className='navbar__ancor' href={`/logout`}>Log out</a>
      </nav>
    </>
  )
};

export default BurguerMenu;
