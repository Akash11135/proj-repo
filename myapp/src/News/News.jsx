import React from "react";
import Newscard from "./Newscard";
import "./News.css";
const News = ({ news }) => {
  // console.log("news---", news);
  return (
    <>
      <h2>Latest updates in crypto world!</h2>

      <div className="news-container">
        {news &&
          news.length > 0 &&
          news.map((item) => <Newscard item={item} />).slice(0, 10)}
      </div>
    </>
  );
};

export default News;
