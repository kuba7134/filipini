import React, { useState } from "react";
import "./formAktualnosci.css";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const FormAktualnosci = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    img: "",
  });

  console.log(post);

  const onChange = e => {
    const file = e.target.files[0];
    setPost(prevState => ({
      ...prevState,
      img: file,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const addOgloszenia = async () => {
      const path = `aktualnosci/${post.img.name + v4()}`;
      const imageRef = ref(storage, path);
      const date = new Date();

      console.log(date);

      await uploadBytes(imageRef, post.img).then(snapshot => {
        alert("image Uploaded.");
        console.log(snapshot);
      });

      const docRef = await addDoc(collection(db, "aktualnosci"), {
        title: post.title,
        content: post.content,
        imageRef: path,
        date: Date.now(),
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
      });
      console.log("Document written with ID: ", docRef.id);
    };
    addOgloszenia();
  };

  return (
    <div>
      <form
        autoComplete="off"
        className="form"
        onSubmit={handleSubmit}
      >
        <h1>Dodaj do aktualności</h1>
        <input
          type="text"
          placeholder="Tytuł"
          required
          className="form-input"
          id="search"
          value={post.title}
          onChange={e =>
            setPost(prevState => ({
              ...prevState,
              title: e.target.value,
            }))
          }
        />
        <input
          type="file"
          placeholder="upload file"
          className="form-input"
          id="img"
          onChange={onChange}
        />
        <textarea
          type="text"
          placeholder="tekst"
          required
          className="form-input"
          id="search"
          value={post.content}
          onChange={e =>
            setPost(prevState => ({
              ...prevState,
              content: e.target.value,
            }))
          }
        />
        <button>Wyślij</button>
      </form>
      {/* <img src={post.img.img} alt="uploadedImage"></img> */}
    </div>
  );
};

export default FormAktualnosci;
