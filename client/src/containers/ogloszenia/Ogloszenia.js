import React, { useEffect, useState, useRef } from "react";
import "./ogloszenia.css";
import { motion } from "framer-motion";
import { Headerao } from "../../components";
import {
  collection,
  getDocs,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase-config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Ogloszenia = () => {
  const [ogloszenia2, setOgloszenia2] = useState("");
  const [display, setDisplay] = useState(0);
  const ogloszenia = useRef();

  useEffect(() => {
    const ogloszenia = [];
    const ogloszeniaRef = collection(db, "ogloszenia");
    const q = query(
      ogloszeniaRef,
      orderBy("date", "desc"),
      limit(10)
    );
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          ogloszenia.push(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
      setOgloszenia2(ogloszenia);
    };
    fetchData();
  }, []);

  return (
    <motion.div
      className="ogloszenia"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Headerao title="Ogłoszenia" />
      <div className="ogloszenia-container">
        {ogloszenia2 && (
          <>
            <div
              className="ogloszenia-container-current ogloszenia-container-box"
              ref={ogloszenia}
            >
              <div className="ogloszenia-container-current-top">
                <p className="ogloszenia-container-current-date">
                  {ogloszenia2[display].day}.&nbsp;
                  {ogloszenia2[display].month}.&nbsp;
                  {ogloszenia2[display].year}
                </p>
                <h2>{ogloszenia2[display].title}</h2>
              </div>
              <ul>
                {ogloszenia2[display].text.map((item, index) => (
                  <li key={index} className="ogloszenia-single-text">
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ogloszenia-container-all ogloszenia-container-box">
              <h2>Poprzednie ogłoszenia</h2>
              {ogloszenia2.map((item, index) => (
                <div
                  key={index}
                  className="ogloszenia-container-all-single"
                  onClick={() => {
                    setDisplay(index);
                    ogloszenia.current.scrollIntoView();
                  }}
                >
                  <p>
                    {item.day}.&nbsp;
                    {item.month}.&nbsp;
                    {item.year}
                  </p>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Ogloszenia;
