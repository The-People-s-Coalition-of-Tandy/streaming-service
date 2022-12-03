import React from "react";
import Album from "./Album";
import "../App.css";

function AlbumsPage({ albums }) {
  return (
    <div className="home-wrapper">
      <h1 className="welcome">Good Evening,</h1>
      <div className="albums-list">
        {albums.map((album, i) => (
          <Album key={i} name={album} />
        ))}
      </div>
    </div>
  );
}

export default AlbumsPage;
