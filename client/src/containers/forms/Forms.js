import React, { useState } from "react";
import "./forms.css";

const Forms = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    img: "",
  });

  const uploadHandler = e => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    file.isUploading = true;
    setPost(prevState => ({
      ...prevState,
      img: file,
    }));
  };

  console.log(post);

  const handleSubmit = () => {};

  return (
    <div className="forms">
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
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
          onChange={uploadHandler}
        />
        <input
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
    </div>
  );
};

export default Forms;
