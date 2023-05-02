// import React , {useState} from 'react';
// import useSound from 'use-sound';
// import mySound from '../Images/Ambient Music.mp3'
// import { FaVolumeUp } from "react-icons/fa";

// // const Sounds = (
// //     handleSongLoading,
// //     handleSongPlaying,
// //     handleSongFinishedPlaying
// // ) => {
// //     const [isPlaying , setIsPlaying ] = useState(false);

// //     return(
// //         <div>
// //             <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'play' : 'Stop'}</button>
// //             <useSound
                
// //                 playStatus= {
// //                     isPlaying ? useSound.status.PLAYING : useSound.status.STOPPED
// //                 }
// //                 onLoading={handleSongLoading}
// //                 onPlaying={handleSongPlaying}
// //                 onFinishedPlaying={handleSongFinishedPlaying}
// //             />
// //         </div>
// //     )
// // }




// const Sounds= () => {
//     const [playSound] = useSound(mySound)
  
//     return (
//       <button className='VolumeupBtn' onClick={() => playSound()}>
         
//          <FaVolumeUp/>
//       </button>
//     )
// }

// export default Sounds


import React, { useState, useRef, useEffect } from 'react';
import musicFile from '../Images/Ambient Music.mp3'
import { FaVolumeUp , FaVolumeMute } from "react-icons/fa";
import './Sound.css'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioElement = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const volume = event.target.value;
    setVolume(volume);
    audioElement.current.volume = volume;
  };

  return (
    <div className='volume'>
      <button className='volumebtn' onClick={togglePlayPause}>
        {isPlaying ? <FaVolumeMute/> : <FaVolumeUp/>}
      </button>
      {isPlaying && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      )}
      <audio ref={audioElement} src={musicFile} />
    </div>
  );
}

export default MusicPlayer;