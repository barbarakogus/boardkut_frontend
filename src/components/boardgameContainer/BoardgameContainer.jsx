import "./BoardgameContainer.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../form/Form";
import BoardgameCards from "../boardgameCards/BoardgameCards";
import PresentationMenu from "../presentationMenu/PresentationMenu";
import MenuProfileSidebar from "../menuProfileSidebar/MenuProfileSidebar";
import ProfileImage from "../profileImage/ProfileImage";
import { fetchBoardgames } from "../../features/boardGameSlice";
import ErrorDatabase from "../error/ErrorDatabase"

const BoardgameContainer = () => {
  const boardgames = useSelector((state) => state.boardgames);
  const dispath = useDispatch();


  useEffect(() => {
    dispath(fetchBoardgames());
  }, []);

  return (
    <div className="container">
      <div className="container__body">
        <div className="sidebar">
          <ProfileImage />
          <MenuProfileSidebar />
        </div>
        <div className="content">
          <PresentationMenu />
          {boardgames.loading && <div>Loading</div>}
          {!boardgames.loading && !boardgames.error ? (
            <BoardgameCards
              boardgames={boardgames.data} /*updateBoardgame={updateBoardgame}*/
            />
          ) : null}
          {boardgames.loading && boardgames.error ? <ErrorDatabase /> : null}
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default BoardgameContainer;
