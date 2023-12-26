import React from "react";
import millify from "millify";
import "./NewCard.css";
const NewCard = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="exchange-container">
        <div className="exchange-head">
          <ul>
            <li>
              <div className="item1 name">{item.name}</div>
            </li>
          </ul>

          <ul>
            <li>
              <div className="item1 price">{millify(item.price)}</div>
            </li>
          </ul>

          <ul>
            <li>
              <div className="item1 change">{millify(item.change)}</div>
            </li>
          </ul>

          <ul>
            <li>
              <div className="item1 cap">{millify(item.marketCap)}</div>
            </li>
          </ul>

          <ul>
            <li>
              <div className="item1 image">
                <img src={item.iconUrl} alt="icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewCard;
