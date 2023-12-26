import React from "react";
import "./Card.css";
import millify from "millify";

const Card = ({ item }) => {
  return (
    <>
      <div className="currency-data">
        <div className="currency-head">
          <div className="name">
            {item.rank}. {item.name}
          </div>
          <div className="image">
            <img src={item.iconUrl} alt="icon" />
          </div>
        </div>
        <div className="currency-details">
          <span className="details">Price : {millify(item.price)}</span>
          <span className="details">Cap : {millify(item.marketCap)}</span>
          <span className="details">Daily Change : {millify(item.change)}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
