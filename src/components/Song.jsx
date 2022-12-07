import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, selectSong } from "./songSlice";
import { addToQueue, addToPreviousQueue } from "./Queue";
import { selectPlaying, updatePlayer } from "./playingSlice";
import { debounce } from "lodash";
import "./song.css";

function Song({ songData }) {
  const title = songData.title;
  const dispatch = useDispatch();
  const currentSong = useSelector(selectSong);
  const playingState = useSelector(selectPlaying);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    currentSong === songData
      ? setPlaying(true && playingState)
      : setPlaying(false && playingState);
  }, [currentSong, playingState]);

  useEffect(() => {
    dispatch(addToQueue(songData));
  }, []);

  const handleClick = debounce(
    () => {
      setPlaying(!playing);
      dispatch(updatePlayer(!playing));
      if (songData !== currentSong) {
        dispatch(update(songData));
        dispatch(addToPreviousQueue(songData));
      }
    },
    10,
    true
  );

  return (
    <div className="flexbox song" onClick={handleClick}>
      <button className={"song__play-button"} onClick={handleClick}>
        {playing ? (
          <span style={{ marginLeft: "-4px" }}>▐▐</span>
        ) : (
          <span>►</span>
        )}
      </button>
      {currentSong === songData ? (
        <span
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.4) ,rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))",
          }}
        >
          {title}
        </span>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
}

export default Song;
