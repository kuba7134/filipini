import React from "react";
import "./formOgloszenia.css";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

const FormOgloszenia = () => {
  const [count, setCount] = useState(0);
  const [ogloszenia, setOgloszenia] = useState({ 0: "" });
  const [title, setTitle] = useState("");

  const ogloszenie = () => {
    let jsx = [];
    const onChange = index => e =>
      setOgloszenia(prevState => ({
        ...prevState,
        [index]: e.target.value,
      }));

    for (let i = 0; i < count; i++) {
      jsx.push(
        <input
          key={i}
          type="text"
          placeholder={"Ogloszenie " + i}
          value={ogloszenia[i]}
          onChange={onChange(i)}
        ></input>
      );
    }
    return jsx;
  };

  const onClick = () => {
    setCount(count + 1);
    setOgloszenia(prevState => ({
      ...prevState,
      [count]: "",
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const date = new Date();
    const addOgloszenia = async () => {
      try {
        const docRef = await addDoc(collection(db, "ogloszenia"), {
          title,
          text: Object.values(ogloszenia),
          date: Date.now(),
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear(),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    addOgloszenia();
  };

  console.log(ogloszenia);
  return (
    <div className="form-ogloszenia">
      <h1>Dodaj ogłoszenia</h1>
      <button onClick={onClick}>Dodaj ogłoszenie</button>
      <form onSubmit={onSubmit} className="form-ogloszenia-form">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="ogloszenia"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        {ogloszenie().map(item => item)}
        <button>Wyślij ogłoszenia</button>
      </form>
    </div>
  );
};

export default FormOgloszenia;
