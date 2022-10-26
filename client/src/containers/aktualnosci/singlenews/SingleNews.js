import React, { useEffect } from "react";
import "./singleNews.css";
import { useState } from "react";

const SingleNews = props => {
  const [content, setContent] = useState("");
  const trimmer = () => {
    let string = props.news.content;
    var cutat = string.lastIndexOf(" ", 90);
    if (cutat != -1) string = string.substring(0, cutat) + "...";
    return string;
  };

  useEffect(() => {
    setContent(trimmer());
  }, []);
  return (
    <div onClick={() => {}} className="single-news">
      <div className="single-news-top">
        <div className="single-news-date">
          <p>{props.news.date.day}</p>
          <p>{props.news.date.month}</p>
          <p>{props.news.date.year}</p>
        </div>
        <h2>{props.news.title}</h2>
      </div>
      <img src={props.news.img} alt="" />
      <div className="single-news-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SingleNews;
