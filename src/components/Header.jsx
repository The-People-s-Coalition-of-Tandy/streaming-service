import React from "react";
// import { data } from '../list.js';
// import * as jsonUtil from '../util.js';
import "./header.css";

function Header() {
  // const songs = jsonUtil.getAlbum(data, name);

  return (
    <header>
      <div className="flex">
        <div className="blueDish">
          <span className="bdsm">B</span>LUE
          <br />
          <span className="bdsm">D</span>ISH
        </div>
        <div className="soothingMusic">
        <span className="bdsm">S</span>oothing
          <br />
          <span className="bdsm">M</span>usic
        </div>
      </div>
    </header>
  );
}

export default Header;
