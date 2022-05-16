import './BoardgameContainer.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../form/Form';
import TableBoardgames from '../tableBoardgame/TableBoardgames';
import PresentationMenu from '../presentationMenu/PresentationMenu';
import MenuProfileSidebar from '../menuProfileSidebar/MenuProfileSidebar';
import ProfileImage from '../profileImage/ProfileImage';
import { fetchBoardgames } from '../../features/boardGameSlice';

const BoardgameContainer = () => {

  const boardgames = useSelector(state => state.boardgames);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchBoardgames());
  }, []);

  return (
    <div className='container__body'>
      <div className="container__sidebar">
        <ProfileImage />
        <MenuProfileSidebar />
      </div>
      <div className='container'>
        <PresentationMenu />
        {boardgames.loading && <div>Loading</div>}
        {!boardgames.loading && !boardgames.error ? <TableBoardgames boardgames={boardgames.data} /*updateBoardgame={updateBoardgame}*/ /> : null}
        {!boardgames.loading && boardgames.error ? <div>Error: {boardgames.error}</div> : null}
      </div>
      <Form />
    </div>
  )
};

export default BoardgameContainer;
