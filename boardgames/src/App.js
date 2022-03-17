import './App.css';
import Form from '../src/components/form/Form';
import { useState, useEffect } from 'react';
import TableBoardgames from './components/tableBoardgame/TableBoardgames';

function App() {

  const [boardgames, setBoardgames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/boardgames')
      .then(res => res.json())
      .then(data => setBoardgames(data))
  }, []);

  const addBoardgame = async (boardgame) => {   
    const response = await fetch('http://localhost:3001/api/boardgames', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(boardgame)
    });
    const location = response.headers.get('Location');
    const id = location.substring(location.lastIndexOf('/')+1);
    const newBgs = [...boardgames, {...boardgame, id}];
    setBoardgames(newBgs)
  }

  const deleteBoardgame = async (id) => {
    await fetch(`http://localhost:3001/api/boardgames/${id}`, { method: 'DELETE' });
    setBoardgames(boardgames.filter(bg => bg.id !== id));  
  }

  return (
    <div className="App">
      <TableBoardgames boardgames={boardgames} deleteBoardgame={deleteBoardgame} />
      <Form addBoardgame={addBoardgame} />
    </div>
  );
}

export default App;
