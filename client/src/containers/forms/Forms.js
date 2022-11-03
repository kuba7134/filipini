import React, { useEffect, useState } from "react";
import "./forms.css";
import FormOgloszenia from "./formOgloszenia/FormOgloszenia";
import FormAktualnosci from "./formAktualnosci/FormAktualnosci"
import { getAuth, onAuthStateChanged } from "firebase/auth";




const Forms = () => {

  const [email, setEmail] = useState("")
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        console.log(user.email)
        setEmail(user.email)
      } else {
        // User is signed out
        // ...
      }
    })
    return unsubscribe;
  })

  const [type, setType] = useState("ogloszenia")

  return (
    <div className="forms">
      <div className="forms-email">{email}</div>
      {type === "aktualnosci"
        ?
        <>
          <button className="forms-button" onClick={() => setType("ogloszenia")}>ogłoszenia</button>
          <FormAktualnosci />
        </>
        :
        <>
          <button className="forms-button" onClick={() => setType("aktualnosci")}>aktualnosci</button>
          <FormOgloszenia />
        </>}
    </div>
  );
};

export default Forms;
