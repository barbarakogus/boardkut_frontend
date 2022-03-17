import './TableBoardgames.css';

function TableBoardgames({boardgames, deleteBoardgame}) {

  return (
    <div className="container__table">
      <table className='table__boardgame'>
        <thead>
          <tr>
            <th className='header__table'>Title</th>
            <th className='header__table'>Type</th>
            <th className='header__table'>Players</th>
            <th className='header__table'>Play time</th>
            <th className='header__table'>Language</th>
            <th className='header__table'>Age</th>
            <th className='header__table'>Purchase date</th>
          </tr>
        </thead>
        <tbody className="tabela__body">
          {boardgames.map((game, key) =>
            <tr key={key}>
              <td className='body__table'>{game.title}</td>
              <td className='body__table'>{game.type}</td>
              <td className='body__table'>{game.players}</td>
              <td className='body__table'>{game.playTime}</td>
              <td className='body__table'>{game.language}</td>
              <td className='body__table'>{game.age}</td>
              <td className='body__table'>{game.purchaseDate}</td>
              <td><button className='table__button--delete' onClick={() => deleteBoardgame(game.id)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableBoardgames;
