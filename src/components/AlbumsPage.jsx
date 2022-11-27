import React from "react";
import Album from "./Album";
import "../App.css";

function AlbumsPage({ albums }) {
  return (
    <>
      {albums.map((album, i) => (
        <Album key={i} name={album} />
      ))}
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
    </>
  );
}

export default AlbumsPage;
