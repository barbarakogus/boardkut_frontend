import './PresentationMenu.css';

const PresentationMenu = ({ boardgames }) => {

  return (
    <>
      <div className='container__presentationMenu'>
        <h1 className='title__content'>Welcome Bárbara...</h1>
        <ul className='container__ul'>
          {[
            { name: 'Photos', slug: 'Photos', icon: 'camera' },
            { name: 'Ratings', slug: 'ratings', icon: 'star' },
            { name: 'Messages', slug: 'mensagens', icon: 'email' },
          ].map(({ name, slug, icon }) => (
            <li className='list__icones' key={`orkut__icon_set__${slug}`}>
              <span className="icon__title">
                {name}
              </span>
              <span className="icon__number">
                <img key={`orkut__icon_set__${slug}_img`} className="icon" src={`https://alurakut.vercel.app/icons/${icon}.svg`} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PresentationMenu;
