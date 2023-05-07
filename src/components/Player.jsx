import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../components/dataSlice";
import { selectSong, update } from "./songSlice";
import { selectPlaying, updatePlayer } from "./playingSlice";
import {
  selectQueue,
  popQueue,
  popPreviousQueue,
  addQueueArray,
} from "./Queue";
import { setArtist, setPage } from "./pageSlice";
import * as jsonUtil from "../util.js";
import "./player.css";

function Player() {

  const currentSong = useSelector(selectSong);
  const { next, previous } = useSelector(selectQueue);
  const playingState = useSelector(selectPlaying);
  const data = useSelector(selectData);


  const dispatch = useDispatch();

  const [songSelected, setSongSelected] = useState(currentSong);
  const [playing, setPlaying] = useState(false);

  const audioPlayer = useRef();

  const play = () => {
    if (playing) {
      audioPlayer.current.pause();
      setPlaying(false);
      dispatch(updatePlayer(false));
    } else {
      if (currentSong) {
        audioPlayer.current.play();
        setPlaying(true);
        dispatch(updatePlayer(true));
      }
    }
  };

  const playNext = () => {
    if (next.length) {
      if (next[0] === songSelected) {
        dispatch(popQueue());
        dispatch(update(next[1]));
      } else {
        dispatch(update(next[0]));
      }
    } else {
      const newQueue = jsonUtil.getAllSongs(data.albums);
      dispatch(addQueueArray(newQueue));
      dispatch(update(newQueue[0]));
    }
    dispatch(popQueue());
  };

  const playPrevious = () => {
    if (previous.length) {
      if (previous[0] === songSelected && previous.length > 1) {
        dispatch(popPreviousQueue());
        dispatch(update(previous[1]));
      } else {
        dispatch(update(previous[0]));
      }
      dispatch(popPreviousQueue());
    }
  };

  useEffect(() => {
    setSongSelected(currentSong);
    currentSong && setPlaying(true);
  }, [currentSong]);

  useEffect(() => {
    setPlaying(playingState);
    if (playingState) {
      audioPlayer.current.play();
      setPlaying(true);
    } else {
      audioPlayer.current.pause();
      setPlaying(false);
    }
  }, [playingState]);

  return (
    <footer>
      <div className="player-left">
        {songSelected && (
          <div className="flexbox music-preview">
            <img
              width={50}
              height={50}
              src={songSelected.cover}
            />
            <div className="flexbox trackInfo">
              <span>{songSelected.title}</span>
              <button
                onClick={() => {
                  dispatch(setArtist(songSelected.artist));
                  dispatch(setPage("Artist"));
                }}
              >
                <span>{songSelected.artist}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button
            className={`player-controls__back ${
              previous.length === 0 ? "button-disabled" : ""
            }`}
            onClick={playPrevious}
          >
            ◄◄
          </button>
          <button className="player-controls__play" onClick={play}>
            {playing ? (
              <span className="pause-button">▐▐</span>
            ) : (
              <span style={{ fontWeight: "bold" }}>Click to play</span>
            )}
          </button>
          <button className="player-controls__next" onClick={playNext}>
            ►►
          </button>
        </div>
        <div className="audio-timeline">
          <audio
            className="player"
            src={songSelected.url}
            controls={true}
            autoPlay={true}
            ref={audioPlayer}
            onEnded={playNext}
            controlsList={"nodownload"}
          ></audio>
        </div>
      </div>

      <div className="player-right"></div>
    </footer>
  );
}

export default Player;
