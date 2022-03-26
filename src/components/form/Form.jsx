import './Form.css';
import { useState } from 'react';

function Form({ addBoardgame }) {

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
    setBgTitle("");
    setBgType("");
    setBgPlayers("");
    setBgPlayTime("");
    setBgLanguage("");
    setBgAge("");
    setBgPurchaseDate("");

  }

  return (
    <article className="form__container cards">
      <h2 className='form__title'>Register a new Boardgame</h2>
      <form className="container__form" onSubmit={(event) => createNewBoardgame(event)}>
        {hasError ? <span className="form__span">Title is required</span> : ""}
        <input className="form__input" id='bgTitle' name="bgTitle" type="text" value={bgTitle} placeholder='Boardgame name' onChange={handleChange} />
        <input className="form__input" id='bgType' name="bgType" type="text" value={bgType} placeholder='Boardgame type' onChange={handleChange} />
        <input className="form__input" id='bgPlayers' name="bgPlayers" type="number" value={bgPlayers} placeholder='Players' onChange={handleChange} />
        <input className="form__input" id='bgPlayTime' name="bgPlayTime" type="number" value={bgPlayTime} placeholder='Playing time' onChange={handleChange} />
        <input className="form__input" id='bgLanguage' name="bgLanguage" type="text" value={bgLanguage} placeholder='Language' onChange={handleChange} />
        <input className="form__input" id='bgAge' name="bgAge" type="number" value={bgAge} placeholder='Age for this game' onChange={handleChange} />
        <input className="form__input" id='bgPurchaseDate' name="bgPurchaseDate" type="number" value={bgPurchaseDate} placeholder='Purchase date' onChange={handleChange} />
        <input type="submit" className="form__button--submit" id="btnAddTodo" value="Submit" />
      </form>
    </article>
  );
};

export default Form;
