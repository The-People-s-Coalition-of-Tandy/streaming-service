import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong, update } from "./songSlice";
import { selectQueue, popQueue, addQueueArray } from "./Queue";
import { data } from "../list.js";
import * as jsonUtil from "../util.js";
import "./player.css";

function Player() {
  const currentSong = useSelector(selectSong);
  const queue = useSelector(selectQueue);
  const dispatch = useDispatch();

  const [songSelected, setSongSelected] = useState(currentSong);
  const [playing, setPlaying] = useState(false);

  const audioPlayer = useRef();

  const play = () => {
    if (playing) {
      audioPlayer.current.pause();
      setPlaying(false);
      console.log(queue);
    } else {
      audioPlayer.current.play();
      setPlaying(true);
    }
  };

  const playNext = () => {
    if (queue.length) {
      if (queue[0] === songSelected) {
        dispatch(popQueue());
        dispatch(update(queue[1]));
      } else {
        dispatch(update(queue[0]));
      }
    } else {
      const newQueue = jsonUtil.getAllSongs(data);
      dispatch(addQueueArray(newQueue));
      dispatch(update(newQueue[0]));
    }
    dispatch(popQueue());
  };

  useEffect(() => {
    setSongSelected(currentSong);
    setPlaying(true);
  }, [currentSong]);

  return (
    <footer className="wrapper">
      {songSelected && (
        <div style={{ display: "flex" }}>
          {" "}
          <img
            width={50}
            height={50}
            src={`./Media/Music/${songSelected.artist}/${songSelected.album}/cover.jpeg`}
          />{" "}
          <h4>Now Playing: {songSelected.title}</h4>
        </div>
      )}
      <button onClick={play}>{playing ? <p>Pause</p> : <p>Play</p>}</button>
      <audio
        className="player"
        src={songSelected.url}
        controls={true}
        autoPlay={true}
        ref={audioPlayer}
        onEnded={playNext}
      ></audio>
    </footer>
  );
}

export default Player;
