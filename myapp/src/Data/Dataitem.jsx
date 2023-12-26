import React from "react";
import millify from "millify";
const Dataitem = ({ item }) => {
  return (
    <>
      <div className="data">
        <div className="content">
          <div className="items">
            <h3>Total Cryptocurrencies</h3>
            <p>{millify(item.total)}</p>
          </div>
          <div className="items">
            <h3>Total Exchanges</h3>
            <p>{millify(item.totalExchanges)}</p>
          </div>
        </div>

        <div className="content">
          <div className="items">
            <h3>Total Market Cap</h3>
            <p>{millify(item.totalMarketCap)}</p>
          </div>
          <div className="items">
            <h3>Total 24h Volume</h3>
            <p>{millify(item.total24hVolume)}</p>
          </div>
        </div>

        <div className="content">
          <div className="items">
            <h3>Total Markets</h3>
            <p>{millify(item.totalMarkets)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dataitem;
