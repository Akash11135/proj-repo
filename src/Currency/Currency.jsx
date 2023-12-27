import React from "react";
import "./Currency.css";
import Card from "./Card";

const Currency = ({ coins }) => {
  return (
    <>
      <h2 className="heading">Top 9 currencies in the world</h2>
      <div className="currency-container">
        {coins && coins.map((item) => <Card item={item} />).slice(0, 15)}
      </div>
    </>
  );
};

export default Currency;
