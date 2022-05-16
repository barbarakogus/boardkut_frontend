import './Form.css';
import { useState } from 'react';
import { addBoardgame } from '../../features/boardGameSlice';
import { useDispatch } from 'react-redux';

function Form() {

  const dispath = useDispatch();

  const [bgTitle, setBgTitle] = useState("");
  const [bgType, setBgType] = useState("");
  const [bgPlayers, setBgPlayers] = useState(1);
  const [bgPlayTime, setBgPlayTime] = useState(15);
  const [bgLanguage, setBgLanguage] = useState("");
  const [bgAge, setBgAge] = useState(6);
  const [bgPurchaseDate, setBgPurchaseDate] = useState(new Date().getFullYear());
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

    dispath(addBoardgame({
      title: bgTitle,
      type: bgType,
      players: bgPlayers,
      playTime: bgPlayTime,
      language: bgLanguage,
      age: bgAge,
      purchaseDate: bgPurchaseDate
    }));
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
        <input type="submit" className="form__button--submit" id="form__btn-addBg" value="Submit" />
      </form>
    </article>
  );
};

export default Form;
