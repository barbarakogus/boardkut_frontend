import './BoardgameContainerModile.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../form/Form';
import TableBoardgames from '../tableBoardgame/TableBoardgames';
import PresentationMenu from '../presentationMenu/PresentationMenu';
import MenuProfileSidebar from '../menuProfileSidebar/MenuProfileSidebar';
import { fetchBoardgames } from '../../features/boardGameSlice';
import ProfileImage from '../profileImage/ProfileImage';
import ErrorDatabase from "../error/ErrorDatabase"

const BoardgameContainer = () => {

    const boardgames = useSelector(state => state.boardgames);
    const dispath = useDispatch();

    useEffect(() => {
        dispath(fetchBoardgames());
    }, []);

    return (
        <div className='containerMobile__body'>
            <div className='container__presentation'>
                <ProfileImage />
                <PresentationMenu />
            </div>
            <MenuProfileSidebar />
            <div className='container'>
                {boardgames.loading && <div>Loading</div>}
                {!boardgames.loading && !boardgames.error ? <TableBoardgames boardgames={boardgames.data} /*updateBoardgame={updateBoardgame}*/ /> : null}
                {!boardgames.loading && boardgames.error ? <ErrorDatabase /> : null}
            </div>
            <Form />
        </div>
    )
};

export default BoardgameContainer;
