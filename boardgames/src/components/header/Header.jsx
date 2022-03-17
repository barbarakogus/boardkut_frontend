import './Header.css';

const Header = () => {

  return (
    <>
        <nav className='container__navbar'>
          <div className='navbar--rigth'>
            <button className='title__navbar'>BoardKut</button>
            <a className='navbar__ancor' href={`/games`}>Boardgames</a>
            <a className='navbar__ancor' href={`/friends`}>Friends</a>
          </div>
          <div className='navbar--left'>
            <a className='navbar__ancor' href={`/logout`}>Log out</a>
          </div>
        </nav>
    </>
  )
}


export default Header;