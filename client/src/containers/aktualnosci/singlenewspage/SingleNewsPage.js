import React from "react";
import "./singlenewspage.css";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { Headerao } from "../../../components";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  where,
  query,
  limit,
} from "firebase/firestore";
import { db, storage } from "../../../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import Skeleton from "@mui/material/Skeleton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SingleNewsPage = () => {
  let { newsId } = useParams();
  const [aktualnosc, setAktualnosc] = useState("");

  useEffect(() => {
    const aktualnosciRef = collection(db, "aktualnosci");
    const q = query(
      aktualnosciRef,
      where("id", "==", newsId),
      limit(1)
    );
    let aktualnosc;
    const fetchData = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        aktualnosc = doc.data();
      });

      await getDownloadURL(ref(storage, aktualnosc.imageRef))
        .then(url => {
          aktualnosc.imageUrl = url;
        })
        .catch(error => {
          return error;
        });
      setAktualnosc(aktualnosc);
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
      <div className="news parafia">
        {!aktualnosc ? (
          <div className="news-content parafia-container skeleton">
            <div className="news-content-top">
              <div className="news-content-top-date single-news-date">
                <Skeleton
                  variant="text"
                  width={105}
                  sx={{ fontSize: "1.1em" }}
                />
              </div>
              <div className="title skeleton">
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={99}
                />
              </div>
            </div>
            <Skeleton
              variant="rectangular"
              width={"80%"}
              height={300}
            />
          </div>
        ) : (
          <div className="news-content parafia-container">
            <div className="news-content-top">
              <div className="news-content-top-date single-news-date">
                <p>{aktualnosc.day}.&nbsp;</p>
                <p>{aktualnosc.month}.&nbsp;</p>
                <p>{aktualnosc.year}</p>
              </div>
              <div className="title">
                <h2>{aktualnosc.title}</h2>
                <div className="title-separator"></div>
              </div>
            </div>
            <img src={aktualnosc.imageUrl} alt="aktualność"></img>
            <div className="news-content-text">
              {aktualnosc.content}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SingleNewsPage;
