import './MenuProfileSidebar.css';

const MenuProfileSidebar = () => {

  const pessoasFavoritas = [
    'SumanaSattar',
    'ksarvanitakis',
    'thiagodsti',
    'FransJoakim',
    'FabrizioOnorio',
    'saltsthlm',
  ];

  return (
    <>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <h2 className="smallTitle">Friends ({pessoasFavoritas.length})</h2>
        <ul className='list__img_friends'>
          {pessoasFavoritas.map((itemAtual, key) => {
            return (
              <li key={key} className='friends'>
                <a className='ancor__friends' href={`/users/${itemAtual}`} key={itemAtual}>
                  <img className='img__friends' src={`https://github.com/${itemAtual}.png`} alt="Profile friends"></img>
                  <span className='name__friends'>{itemAtual}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
};

export default MenuProfileSidebar;
