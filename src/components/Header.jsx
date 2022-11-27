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
          BLUE
          <br />
          DISH
        </div>
        <div className="soothingMusic">
          Soothing
          <br />
          Music
        </div>
      </div>
    </header>
  );
}

export default Header;
