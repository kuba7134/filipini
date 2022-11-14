import React, { useState } from "react";
import "./formAktualnosci.css";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import uniqid from "uniqid";

const FormAktualnosci = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    img: "",
    imgThumb: "",
    vertical: false,
  });
  console.log(post);

  const onChange = e => {
    const file = e.target.files[0];
    setPost(prevState => ({
      ...prevState,
      img: file,
    }));
  };

  const onChange2 = e => {
    const file = e.target.files[0];
    setPost(prevState => ({
      ...prevState,
      imgThumb: file,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const addOgloszenia = async () => {
      const path = `aktualnosci/${post.img.name + v4()}`;
      const imageRef = ref(storage, path);

      const pathThumb = `aktualnosci/${post.imgThumb.name + v4()}`;
      const thumbRef = ref(storage, pathThumb);

      const date = new Date();

      await uploadBytes(imageRef, post.img).then(snapshot => {
        console.log("image added");
        alert("image Uploaded.");
      });

      await uploadBytes(thumbRef, post.imgThumb).then(snapshot => {
        console.log("thumbnail added");
      });

      const docRef = await addDoc(collection(db, "aktualnosci"), {
        id: uniqid(),
        title: post.title,
        content: post.content,
        imageRef: path,
        thumbRef: pathThumb,
        date: Date.now(),
        day: date.getDate(),
        month: date.getMonth() + 1,
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
        <p>thumbnail image</p>
        <input
          type="file"
          placeholder="upload file"
          className="form-input"
          id="img"
          onChange={onChange2}
        />
        <p>image</p>
        <input
          type="file"
          placeholder="upload file"
          className="form-input"
          id="img"
          onChange={onChange}
        />
        <button
          onClick={() => {
            setPost(prevState => ({
              ...prevState,
              vertical: !post.vertical,
            }));
          }}
        >
          Pionowe zdj: {post.vertical ? "tak" : "nie"}
        </button>
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
        <button type="submit">Wyślij</button>
      </form>
      {/* <img src={post.img.img} alt="uploadedImage"></img> */}
    </div>
  );
};

export default FormAktualnosci;
