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
      {artists.map((artist, i) => (
        <button
          key={i}
          onClick={() => {
            dispatch(setArtist(artist));
            dispatch(setPage("Artist"));
          }}
        >
          {artist}
        </button>
      ))}
    </div>
  );
}

export default ArtistList;
