import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Crypto from "./Crypto/Crypto";
import Exchange from "./Exchange/Exchange";
import Relnews from "./Relnews/Relnews";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Spinner from "./Loader/Spinner";

const Wrapper = () => {
    const [stat, setStat] = useState({});
    const [coins, setCoins] = useState([]);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    coinsUrl();
    newsUrl();
  }, []);

  const url =
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07a5789fe7msh389c123b9a67db1p13ac2ejsn0933a8f2fac0",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  async function coinsUrl() {
    try {
        setLoading(true);
        const response = await fetch(url, options);
        const jsonRes = await response.json();
        if (jsonRes && jsonRes.data && jsonRes.data.stats) {
            setStat(jsonRes.data.stats);
        }
        if (jsonRes && jsonRes.data && jsonRes.data.coins) {
            setCoins(jsonRes.data.coins);
        }
        setLoading(false);
    } catch (error) {
        setLoading(false);
        console.error(error);
    }
  }

  const newsLink = 'https://h-crypto-news.p.rapidapi.com/cryptonews';
  const Urloptions = {
    method: "GET",
	headers: {
		'X-RapidAPI-Key': '07a5789fe7msh389c123b9a67db1p13ac2ejsn0933a8f2fac0',
		'X-RapidAPI-Host': 'h-crypto-news.p.rapidapi.com'
	}
  };

  async function newsUrl() {
    try {
        setLoading(true);
        const response = await fetch(newsLink, Urloptions);
        const result = await response.json();
        setNews(result);
        console.log(news);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        console.error(error);
    }
  }

  return (
    <>
        {coins && <Sidebar coins={coins} />}
            <Route exact path="/">
                <Home coins={coins} stat={stat} news={news} loading={loading} />
            </Route>
            <Route exact path="/crypto">
                {coins && <Crypto coins={coins} />}
            </Route>
            <Route exact path="/exchange">
                <Exchange coins={coins}/>
            </Route>
            <Route exact path="/news">
                <Relnews news={news}/>
            </Route>
        <Footer />
    </>
  )
}

export default Wrapper