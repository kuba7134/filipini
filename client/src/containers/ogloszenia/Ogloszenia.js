import React, { useEffect, useState } from "react";
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

  console.log(process.env.REACT_APP_FIREBASE_APIKEY);

  useEffect(() => {
    console.log("fetch");
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
        console.log(querySnapshot);
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
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
            <div className="ogloszenia-container-current">
              <div className="ogloszenia-container-current-top">
                <p>
                  {[
                    ogloszenia2[0].day,
                    ".",
                    ogloszenia2[0].month,
                    ".",
                    ogloszenia2[0].year,
                  ]}
                </p>
                <h2>{ogloszenia2[0].title}</h2>
              </div>
              <ul>
                {ogloszenia2[0].text.map((item, index) => (
                  <li key={index} className="ogloszenia-single-text">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ogloszenia-container-all">
              <h2>Poprzednie ogłoszenia</h2>
              {ogloszenia2.map((item, index) => (
                <div
                  key={index}
                  className="ogloszenia-container-all-single"
                >
                  <p>{item.date}</p>
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
