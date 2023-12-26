import React from "react";
import "./Relnews.css";
import News from "../../News/News";
const Relnews = ({ news }) => {
  return (
    <div className="sidebar-news-container">{news && <News news={news} />}</div>
  );
};

export default Relnews;
