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
    setContent(trimmer(props.news.content, 500));
    setTitle(trimmer(props.news.title, 72));
  }, [props.news.content, props.news.title]);
  return (
    <div
      onClick={() => {
        navigate(`${props.news.id}`);
      }}
      className={
        props.news.vertical
          ? "single-news single-news-vertical"
          : "single-news"
      }
      key={props.news.id}
    >
      <img src={props.news.thumbUrl} alt="news-img" />
      <div className="single-news-top">
        <div className="single-news-date">
          <p>{props.news.day}-</p>
          <p>{props.news.month}-</p>
          <p>{props.news.year}</p>
        </div>
        <div className="single-news-top-title">
          <h3>{title}</h3>
        </div>
      </div>
      {!props.news.vertical && (
        <div className="single-news-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default SingleNews;
