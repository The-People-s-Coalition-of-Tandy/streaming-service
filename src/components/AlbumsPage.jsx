import React from "react";
import Album from "./Album";
import "../App.css";

function AlbumsPage({ albums }) {
  return (
    <>
      {albums.map((album, i) => (
        <Album key={i} name={album} />
      ))}
    </>
  );
}

export default AlbumsPage;
