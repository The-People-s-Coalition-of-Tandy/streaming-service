import React from "react";
import { getAllArtists } from "../util";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setArtist } from "./pageSlice";
import "./artistList.css";

function ArtistList() {
  const dispatch = useDispatch();
  const artists = getAllArtists();

  return (
    <div className="artist-list-container">
      <h1 className="artist-list-title">BLUE DISH Presents...</h1>
      <div className="button-container">
        {artists.map((artist, i) => (
          <button
            className="artistListButton"
            key={i}
            onClick={() => {
              dispatch(setArtist(artist));
              dispatch(setPage("Artist"));
            }}
          >
            <span>{artist}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ArtistList;
