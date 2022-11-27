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
    <footer>
      <div className="player-left">
        {songSelected && (
          <div className="flexbox">
            <img
              width={50}
              height={50}
              src={`./Media/Music/${songSelected.artist}/${songSelected.album}/cover.jpeg`}
            />
            <div className="flexbox trackInfo">
              <span>{songSelected.title}</span>
              <span>{songSelected.artist}</span>
            </div>
          </div>
        )}
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button onClick={play}>
            {playing ? <span>Pause</span> : <span>Play</span>}
          </button>
          <button onClick={playNext}>Next Song</button>
        </div>
        <div className="audio-timeline">
          <audio
            className="player"
            src={songSelected.url}
            controls={true}
            autoPlay={true}
            ref={audioPlayer}
            onEnded={playNext}
          ></audio>
        </div>
      </div>

      <div className="player-right"></div>
    </footer>
  );
}

export default Player;
