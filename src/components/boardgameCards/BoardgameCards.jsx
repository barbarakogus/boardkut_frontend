import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBoardgame } from "../../features/boardGameSlice";
import "./BoardgameCards.css";

function BoardgameCards({ boardgames, updateBoardgame }) {
  const dispath = useDispatch();

  const [filteredList, setFilteredList] = useState([...boardgames]);

  useEffect(() => {
    setFilteredList([...boardgames]);
  }, [boardgames]);

  const filterBoardgame = (event) => {
    let exp = new RegExp(event.target.value, "i");
    const filteredBoardgames = boardgames.filter((bg) => exp.test(bg.title));
    setFilteredList([...filteredBoardgames]);
  };

  return (
    <div className="content__container">
      <input
        className="input__search"
        placeholder="Search"
        name="search"
        onInput={(event) => filterBoardgame(event)}
      />
      <div className="cards__container">
        {filteredList.map((boardgame) => (
          <div key={boardgame.id} className="card">
            <p className="card__title">{boardgame.title}</p>
            <div className="section">
              <div className="section__group">
                <p className="card__labels">Players</p>
                <p>{boardgame.players}</p>
              </div>
              <div className="section__group">
                <p className="card__labels">Play time</p>
                <p>
                  {boardgame.play_time} {boardgame.play_time_unit}
                  {boardgame.play_time > 0 &&
                    boardgame.play_time_unit === "hour" &&
                    "s"}
                </p>
              </div>
              <div className="section__group">
                <p className="card__labels">Type</p>
                <p>{boardgame.type}</p>
              </div>
            </div>
            <div className="section">
              <div className="section__group">
                <p className="card__labels">Language</p>
                <p>{boardgame.language}</p>
              </div>
              <div className="section__group">
                <p className="card__labels">Purchase date</p>
                <p>{boardgame.purchaseDate}</p>
              </div>
            </div>
            <div className="button__container">
              {/* <button
                className="button"
                onClick={() => updateBoardgame(boardgame.id)}
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/cotton/64/edit--v2.png"
                  alt="edit"
                />
              </button> */}
              <button
                className="button"
                onClick={() => dispath(deleteBoardgame(boardgame.id))}
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/pulsar-color/48/delete-forever.png"
                  alt="delete"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoardgameCards;
