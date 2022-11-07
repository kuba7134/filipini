import React, { useState } from "react";
import { motion } from "framer-motion";
import { Headerao } from "../../components";
import "./aktualnosci.css";
import SingleNews from "./singlenews/SingleNews";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Aktualnosci = () => {
  const [aktualnosci, setAktualnosci] = useState("");

  useEffect(() => {
    console.log("--------------------------------------------");
    const aktualnosciRef = collection(db, "aktualnosci");
    const q = query(
      aktualnosciRef,
      orderBy("date", "desc"),
      limit(10)
    );
    const aktualnosci = [];

    const fetchData = async () => {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(doc => {
        console.log("doc added to aktualnosci");
        const item = doc.data();
        aktualnosci.push(item);
      });

      await Promise.all(
        aktualnosci.map(async item => {
          await getDownloadURL(ref(storage, item.imageRef))
            .then(url => {
              item.imageUrl = url;
              console.log("Url added", item.title);
            })
            .catch(error => {
              return error;
            });
        })
      );

      console.log(aktualnosci);

      setAktualnosci(aktualnosci);
    };

    fetchData();
  }, []);

  return (
    <motion.div
      className="aktualnosci"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Headerao title={"Aktualności"} />
      <div className="aktualnosci-container">
        {aktualnosci &&
          aktualnosci.map(item => (
            <SingleNews news={item} key={item.date} />
          ))}
      </div>
    </motion.div>
  );
};

export default Aktualnosci;
