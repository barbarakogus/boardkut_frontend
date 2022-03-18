import './MenuProfileSidebar.css';

const MenuProfileSidebar = () => {

  const gitHubUser = {
    name: 'barbarakogus'
  };
  const pessoasFavoritas = [
    'SumanaSattar',
    'ksarvanitakis',
    'thiagodsti',
    'castrodrigo',
    'matthaus',
    'saltsthlm',
  ]


  return (
    <>
      <div className="container__sidebar">
        <div className='block__img'>
          <img className='img__sidebar' src={`https://github.com/${gitHubUser.name}.png`} alt="Profile" />
          <p>
            <a className="boxLink" href={`/user/${gitHubUser.name}`}></a>
          </p>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <h2 className="smallTitle">Friends ({pessoasFavoritas.length})</h2>
          <ul className='list__img_friends'>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li className='friends'>
                  <a className='ancor__friends' href={`/users/${itemAtual}`} key={itemAtual}>
                    <img className='img__amigos' src={`https://github.com/${itemAtual}.png`}></img>
                    <span className='name__amigos'>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}


export default MenuProfileSidebar;