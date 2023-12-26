import React from "react";
import "./Sidebar.css";
import { MdNewspaper } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { MdCurrencyExchange } from "react-icons/md";
import { MdCurrencyBitcoin } from "react-icons/md";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="main-heading">
          <div className="sidebar-title">
            <h2>CryptoValult</h2>
          </div>
          <div className="sidebar-logo">
            <HiCurrencyRupee />
          </div>
        </div>
      </div>

      <div className="sidebar-contents">
        <ul className="item-sidebar">
          <li>
            <a href="/">
              <IoHomeOutline className="icon" />
              Home
            </a>
          </li>
          <li>
            <a href="/news">
              <MdNewspaper className="icon" />
              News
            </a>
          </li>
          <li>
            <a href="/exchange">
              <MdCurrencyExchange className="icon" />
              Exchanges
            </a>
          </li>
          <li>
            <a href="/crypto">
              <MdCurrencyBitcoin className="icon" />
              Crypto
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
