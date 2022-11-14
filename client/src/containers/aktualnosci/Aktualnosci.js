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
import Skeleton from "@mui/material/Skeleton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const skeleton = key => {
  return (
    <div className="aktualnosci-skeleton" key={key}>
      <Skeleton variant="rectangular" width={"100%"} height={340} />
    </div>
  );
};

const Aktualnosci = () => {
  const [aktualnosci, setAktualnosci] = useState("");
  const [skeletons, setSkeletons] = useState([]);

  useEffect(() => {
    const skeletons = [];
    for (let i = 0; i < 6; i++) {
      skeletons.push(skeleton(i));
    }
    setSkeletons(skeletons);
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
        const item = doc.data();
        aktualnosci.push(item);
      });

      await Promise.all(
        aktualnosci.map(async item => {
          await getDownloadURL(ref(storage, item.thumbRef))
            .then(url => {
              item.thumbUrl = url;
            })
            .catch(error => {
              return error;
            });
        })
      );
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
        {
          aktualnosci
            ? aktualnosci.map(item => (
                <SingleNews news={item} key={item.date} />
              ))
            : skeletons

          // skeleton,
          // skeleton,
          // skeleton,
          // skeleton,
          // skeleton,
          // skeleton,
          // skeleton,
        }
      </div>
    </motion.div>
  );
};

export default Aktualnosci;
