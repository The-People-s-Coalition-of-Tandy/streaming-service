import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, selectSong } from "./songSlice";

function Song({ songData }) {
  const title = songData.title;
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(update(songData))}>{title}</button>
    </div>
  );
}

export default Song;
