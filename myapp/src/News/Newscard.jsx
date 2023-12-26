import React from "react";
import "./Newscard.css";
const Newscard = ({ item }) => {
  return (
    <>
      <div className="news-data">
        <div className="news-head">
          <div className="name">{item.title}</div>
          <div className="image">
            <img
              src={item.thumbnail}
              alt="icon"
              style={{ height: "80px", width: "80px" }}
            />
          </div>
        </div>
        <div className="news-details">
          <p>{item.description}</p>
          <p>
            visite : {item.url} created : {item.createdAt}
          </p>
        </div>
      </div>
    </>
  );
};

export default Newscard;
