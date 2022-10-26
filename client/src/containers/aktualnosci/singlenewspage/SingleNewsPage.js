import React from "react";
import "./singlenewspage.css";
import { useParams } from "react-router";

const SingleNewsPage = () => {

  let { id } = useParams()

  return <div>SingleNewsPage</div>;
};

export default SingleNewsPage;
