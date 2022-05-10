import './BoardgameContainer.css';
import { useState, useEffect } from 'react';
import Form from '../form/Form';
import TableBoardgames from '../tableBoardgame/TableBoardgames';
import PresentationMenu from '../presentationMenu/PresentationMenu';
import MenuProfileSidebar from '../menuProfileSidebar/MenuProfileSidebar';

const BoardgameContainer = () => {

  const [boardgames, setBoardgames] = useState([]);
  const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3002';
  
  useEffect(() => {
    fetch(`${baseUrl}/api/boardgames`)
      .then(res => res.json())
      .then(data => setBoardgames(data))
  }, []);

  const addBoardgame = async (boardgame) => {
    const response = await fetch(`${baseUrl}/api/boardgames`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(boardgame)
    });
    const location = response.headers.get('Location');
    const id = location.substring(location.lastIndexOf('/') + 1);
    const newBgs = [...boardgames, { ...boardgame, id }];
    setBoardgames(newBgs);
  };

  const deleteBoardgame = async (id) => {
    await fetch(`${baseUrl}/api/boardgames/${id}`, { method: 'DELETE' });
    setBoardgames(boardgames.filter(bg => bg.id !== id));
  }

  const updateBoardgame = async (id) => {
    alert('hello')
  };

  return (
    <div className='container__body'>
      <MenuProfileSidebar />
      <div className='container'>
        <PresentationMenu  boardgames={boardgames} />
        <TableBoardgames boardgames={boardgames} updateBoardgame={updateBoardgame} deleteBoardgame={deleteBoardgame} />
      </div>
      <Form addBoardgame={addBoardgame} />
    </div>
  )
};

export default BoardgameContainer;
