import './MenuProfileSidebar.css';

const MenuProfileSidebar = () => {

  const gitHubUser = {
    name: 'barbarakogus'
  }

  return (

    <div className="container__sidebar">
      <img className='img__sidebar' src={`https://github.com/${gitHubUser.name}.png`} alt="Profile" />
      <p>
        <a className="boxLink" href={`/user/${gitHubUser.name}`}></a>
      </p>
    </div>
  )
}


export default MenuProfileSidebar;