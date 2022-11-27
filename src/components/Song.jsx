import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { update } from "./songSlice";
import { addToQueue } from "./Queue";

function Song({ songData }) {
  const title = songData.title;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToQueue(songData));
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(update(songData))}>{title}</button>
    </div>
  );
}

export default Song;
