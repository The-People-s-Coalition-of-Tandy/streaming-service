import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {update, selectSong} from './songSlice';
import "./player.css";


function Player() {
    const currentSong = useSelector(selectSong);
    const [playing, setPlaying] = useState(currentSong);

    useEffect(() => {
        setPlaying(currentSong); 
    }, [currentSong]);
    
    return (
        <div className='wrapper'>
            <audio className='player' src={playing.url} controls={true} autoPlay={true}></audio>
        </div>
    )
}

export default Player;