import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, selectSong } from "./songSlice";
import { addToQueue } from "./Queue";
import "./song.css";

function Song({ songData }) {
  const title = songData.title;
  const dispatch = useDispatch();
  const currentSong = useSelector(selectSong);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    currentSong === songData ? setPlaying(true) : setPlaying(false);
  }, [currentSong]);

  useEffect(() => {
    dispatch(addToQueue(songData));
  }, []);


  const handleClick = () => {
    if (!playing) {
      dispatch(update(songData));
      setPlaying(true);
    }
  };


  return (
    <div className="flexbox song">
      <button className={"song__play-button"} onClick={handleClick}>
        {playing ? (
          <span style={{ marginLeft: "-5px"}}>▐▐</span>
         ) : (
          <span>►</span>
        )}
      </button>
      {playing ? (
        <span style={{backgroundColor: "rgba(255, 255, 255, 0.4)"}}>▐{title}</span>
         ) : (
        <span>▐{title}</span>
        )}
    </div>
  );
}

export default Song;
