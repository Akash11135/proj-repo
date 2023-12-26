import React, { useEffect, useState } from "react";
import Card from "../../Currency/Card";
import "./Crypto.css";
const Crypto = ({ coins }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((item) => {
    if (search.toLowerCase() === item.name.toLowerCase()) {
      return item;
    }
  });

  return (
    <>
      <div className="sidebar-Crypto-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search your crypto-currency"
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className="currency-display">
          {coins && filteredCoins.length > 0
            ? filteredCoins.map((item) => <Card item={item} />)
            : coins.map((item) => <Card item={item} />)}
        </div>
      </div>
      ;
    </>
  );
};

export default Crypto;
