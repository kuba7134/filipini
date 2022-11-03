import React, { useEffect, useState } from 'react'
import "./formAktualnosci.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const FormAktualnosci = () => {

    const [post, setPost] = useState({
        title: "",
        content: "",
        img: "",
    });

    console.log(post)

    const uploadHandler = e => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        if (file) { file.isUploading = true; }
        setPost(prevState => ({
            ...prevState,
            img: file,
        }));
    };

    const handleSubmit = () => {
    }

    return (
        <div><form autoComplete="off" className="form" onSubmit={handleSubmit}>
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
        </form></div>
    )
}

export default FormAktualnosci