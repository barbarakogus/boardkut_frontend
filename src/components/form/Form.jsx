import "./Form.css";
import { useState } from "react";
import { addBoardgame } from "../../features/boardGameSlice";
import { useDispatch } from "react-redux";
import InputField from "../inputField/InputField";

const formatDate = (input) => {
  const date = new Date(input);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

function Form() {
  const dispath = useDispatch();

  const [bgTitle, setBgTitle] = useState("");
  const [bgType, setBgType] = useState("");
  const [bgPlayers, setBgPlayers] = useState("");
  const [bgPlayTime, setBgPlayTime] = useState("");
  const [bgPlaytimeUnit, setBgPlayTimeUnit] = useState("");
  const [bgLanguage, setBgLanguage] = useState("");
  const [bgPurchaseDate, setBgPurchaseDate] = useState(formatDate(new Date()));

  const createNewBoardgame = (event) => {
    event.preventDefault();
    dispath(
      addBoardgame({
        title: bgTitle,
        type: bgType,
        players: bgPlayers,
        playTime: bgPlayTime,
        playTimeUnit: bgPlaytimeUnit,
        language: bgLanguage,
        purchaseDate: bgPurchaseDate,
      })
    );
    setBgTitle("");
    setBgType("");
    setBgPlayers("");
    setBgPlayTime("");
    setBgPlayTimeUnit("");
    setBgLanguage("");
    setBgPurchaseDate("");
  };

  return (
    <article className="form__container">
      <h2 className="form__title">Add a new boardgame</h2>
      <form className="form" onSubmit={(event) => createNewBoardgame(event)}>
        <InputField
          name="bgTitle"
          type="text"
          value={bgTitle}
          placeholder="Boardgame name"
          onChange={setBgTitle}
        />
        <InputField
          name="bgType"
          type="text"
          value={bgType}
          placeholder="Boardgame type"
          onChange={setBgType}
        />
        <InputField
          name="bgPlayers"
          type="number"
          value={bgPlayers}
          placeholder="Players"
          onChange={setBgPlayers}
        />

        <div className="form__container__inputSelect">
          <InputField
            name="bgPlayTime"
            type="number"
            value={bgPlayTime}
            placeholder="Playing time"
            onChange={setBgPlayTime}
          />
          <select
            name="bgPlaytimeUnit"
            value={bgPlaytimeUnit}
            className="form__select"
            placeholder="Select..."
            onChange={(e) => setBgPlayTimeUnit(e.target.value)}
          >
            <option value={""}></option>
            <option value={"hour"}>hour</option>
            <option value={"minutes"}>minutes</option>
          </select>
        </div>
        <InputField
          name="bgLanguage"
          type="text"
          value={bgLanguage}
          placeholder="Language"
          onChange={setBgLanguage}
        />
        <input
          className="form__input"
          id="bgPurchaseDate"
          name="bgPurchaseDate"
          type="date"
          value={bgPurchaseDate}
          placeholder="Purchase date"
          onChange={(e) => {
            const date = formatDate(e.target.value);
            setBgPurchaseDate(date);
          }}
        />
        <button
          type="submit"
          className="form__button--submit"
          id="form__btn-addBg"
        >
          Submit
        </button>
      </form>
    </article>
  );
}

export default Form;
