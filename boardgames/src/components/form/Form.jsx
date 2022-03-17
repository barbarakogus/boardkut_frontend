import './Form.css';
import { useState } from 'react';

function Form({addBoardgame}) {

  const [bgTitle, setBgTitle] = useState("");
  const [bgType, setBgType] = useState("");
  const [bgPlayers, setBgPlayers] = useState();
  const [bgPlayTime, setBgPlayTime] = useState();
  const [bgLanguage, setBgLanguage] = useState("");
  const [bgAge, setBgAge] = useState();
  const [bgPurchaseDate, setBgPurchaseDate] = useState();
  const [hasError, setHasError] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "bgTitle") {
      setBgTitle(event.target.value);
    } else if (event.target.name === "bgType") {
      setBgType(event.target.value);
    } else if (event.target.name === "bgPlayers") {
      setBgPlayers(event.target.value);
    } else if (event.target.name === "bgPlayTime") {
      setBgPlayTime(event.target.value);
    } else if (event.target.name === "bgLanguage") {
      setBgLanguage(event.target.value);
    } else if (event.target.name === "bgAge") {
      setBgAge(event.target.value);
    } else if (event.target.name === "bgPurchaseDate") {
      setBgPurchaseDate(event.target.value);
    }
  };

  const createNewBoardgame = (event) => {
    event.preventDefault()

    addBoardgame({
      title: bgTitle,
      type: bgType,
      players: bgPlayers,
      playTime: bgPlayTime,
      language: bgLanguage,
      age: bgAge,
      purchaseDate: bgPurchaseDate
    })
  }

  return (
    <article className="form__container">
      <form className="container__form" onSubmit={(event) => createNewBoardgame(event)}>
        {hasError ? <span className="form__span">Title is required</span> : ""}
        <input className="form__input" id='bgTitle' name="bgTitle" type="text" placeholder='Boardgame name' onChange={handleChange} />
        <input className="form__input" id='bgType' name="bgType" type="text" placeholder='Boardgame type' onChange={handleChange} />
        <input className="form__input" id='bgPlayers' name="bgPlayers" type="number" placeholder='Players' onChange={handleChange} />
        <input className="form__input" id='bgPlayTime' name="bgPlayTime" type="number" placeholder='Playing time' onChange={handleChange} />
        <input className="form__input" id='bgLanguage' name="bgLanguage" type="text" placeholder='Language' onChange={handleChange} />
        <input className="form__input" id='bgAge' name="bgAge" type="number" placeholder='Age for this game' onChange={handleChange} />
        <input className="form__input" id='bgPurchaseDate' name="bgPurchaseDate" type="number" placeholder='Purchase date' onChange={handleChange} />
        <button type="submit" className="form__button--submit" id="btnAddTodo">Add new Game</button>
      </form>
    </article>
  );
};

export default Form;
