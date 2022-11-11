import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { update, selectSong } from "./songSlice";

function Player() {
  const currentSong = useSelector(selectSong);
  const [playing, setPlaying] = useState(currentSong);

  useEffect(() => {
    setPlaying(currentSong);
  }, [currentSong]);

  return (
    <div>
      <audio src={playing.url} controls={true} autoPlay={true}></audio>
    </div>
  );
}

export default Player;
