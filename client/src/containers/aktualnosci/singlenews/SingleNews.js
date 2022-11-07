import React, { useEffect } from "react";
import "./singleNews.css";
import { useState } from "react";

const SingleNews = props => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const trimmer = () => {
      let string = props.news.content;
      var cutat = string.lastIndexOf(" ", 90);
      if (cutat !== -1) string = string.substring(0, cutat) + "...";
      return string;
    };
    setContent(trimmer());
  }, []);
  return (
    <div onClick={() => {}} className="single-news">
      <div className="single-news-top">
        <div className="single-news-date">
          <p>{props.news.day}</p>
          <p>{props.news.month}</p>
          <p>{props.news.year}</p>
        </div>
        <h2>{props.news.title}</h2>
      </div>
      <img src={props.news.imageUrl} alt="news-img" />
      <div className="single-news-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SingleNews;
