import './Header.css';

const Header = () => {

  return (
    <div className='container__header'>
        <nav className='container__navbar'>
          <div className='navbar--rigth'>
            <button className='title__navbar'>BoardKut</button>
            <a className='navbar__anchor' href={`/games`}>Boardgames</a>
            <a className='navbar__anchor' href={`/friends`}>Friends</a>
          </div>
          <div className='navbar--left'>
            <a className='navbar__anchor' href={`/logout`}>Log out</a>
          </div>
        </nav>
    </div>
  )
};

export default Header;
