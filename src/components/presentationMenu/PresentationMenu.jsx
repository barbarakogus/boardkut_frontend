import './PresentationMenu.css';

const PresentationMenu = () => {

  return (
    <>
      <div className='container__presentationMenu'>
        <h1 className='title__content'>Welcome Bárbara...</h1>
        <ul className='container__ul'>
          {[
            { name: 'Wish list', slug: 'wish list', icon: 'plus' },
            { name: 'Ratings', slug: 'ratings', icon: 'star' },
            { name: 'Messages', slug: 'mensagens', icon: 'email' },
            { name: 'Book a game', slug: 'book a game', icon: 'book' },
          ].map(({ name, slug, icon }) => (
            <li className='list__icones' key={`orkut__icon_set__${slug}`}>
              <span className="icon__title">
                {name}
              </span>
              <span className="icon__number">
                <img key={`orkut__icon_set__${slug}_img`} className="icon" src={`https://alurakut.vercel.app/icons/${icon}.svg`} alt={`${name}`}/>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};

export default PresentationMenu;
