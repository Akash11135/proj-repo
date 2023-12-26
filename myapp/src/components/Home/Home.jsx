import React from "react";
import "./Home.css";
import Data from "../../Data/Data";
import Currency from "../../Currency/Currency";
import News from "../../News/News";
import Header from "../../Header/Header";
import Spinner from "../Loader/Spinner";

const Home = ({ stat, coins, news, loading }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          {stat && <Data stat={stat} />}
          {coins && <Currency coins={coins} />}
          {news && <News news={news} />}
        </>
      )}
    </>
  );
};

export default Home;
