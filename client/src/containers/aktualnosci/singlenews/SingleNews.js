import React, { useEffect } from "react";
import "./singleNews.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const SingleNews = props => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const trimmer = (toCut, at) => {
      if (toCut.length < at) return toCut;
      let string = toCut;
      let cutat = string.lastIndexOf(" ", at);
      if (cutat !== -1) string = string.substring(0, cutat) + "...";
      return string;
    };
    setContent(trimmer(props.news.content, 100));
    setTitle(trimmer(props.news.title, 70));
  }, []);
  return (
    <div
      onClick={() => {
        navigate(`${props.news.id}`);
      }}
      className="single-news"
    >
      <div className="single-news-top">
        <div className="single-news-date">
          <p>{props.news.day}.&nbsp;</p>
          <p>{props.news.month}.&nbsp;</p>
          <p>{props.news.year}</p>
        </div>
        <h3>{title}</h3>
      </div>
      <img src={props.news.thumbUrl} alt="news-img" />
      <div className="single-news-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SingleNews;
