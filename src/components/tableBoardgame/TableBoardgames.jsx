import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBoardgame } from '../../features/boardGameSlice';
import './TableBoardgames.css';

function TableBoardgames({boardgames, updateBoardgame}) {

  const dispath = useDispatch();

  const [filteredList, setFilteredList] = useState([...boardgames]);

  useEffect(() => {
    setFilteredList([...boardgames]);
  }, [boardgames]);

  const filterBoardgame = (event) => {
    let exp = new RegExp(event.target.value, "i");
    const filteredBoardgames = boardgames.filter(bg => exp.test(bg.title));
    setFilteredList([...filteredBoardgames]);
  }

  return (
    <div className="container__table">
      <input className='input__search' placeholder="Search" name="search" onInput={(event) => filterBoardgame(event)} />
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
          {filteredList.map((game, key) =>
            <tr key={key}>
              <td className='body__table'>{game.title}</td>
              <td className='body__table'>{game.type}</td>
              <td className='body__table'>{game.players}</td>
              <td className='body__table'>{game.playTime}</td>
              <td className='body__table'>{game.language}</td>
              <td className='body__table'>{game.age}</td>
              <td className='body__table'>{game.purchaseDate}</td>
              <td><button className='table__button--update' onClick={() => updateBoardgame(game.id)}>Update</button></td>
              <td><button className='table__button--delete' onClick={() => dispath(deleteBoardgame(game.id))}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableBoardgames;
