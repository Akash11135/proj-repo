import React from "react";
import NewCard from "../Exchange/NewCard";
import "./Exchange.css";

const Exchange = ({ coins }) => {
  return (
    <>
      <div className="exchange-contents">
        <ul className="item-list">
          <li>
            <div className="item name">Name</div>
          </li>
          <li>
            <div className="item price">Price</div>
          </li>
          <li>
            <div className="item change">Change</div>
          </li>
          <li>
            <div className="item marketcap">Market-Cap</div>
          </li>
          <li>
            <div className="item vol">icon</div>
          </li>
        </ul>
      </div>

      <div className="sidebar-exchange-container">
        {coins && coins.map((item) => <NewCard item={item} />)}
      </div>
    </>
  );
};

export default Exchange;
