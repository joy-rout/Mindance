import React , {useState} from 'react';
import useSound from 'use-sound';
import mySound from '../Images/Ambient Music.mp3'
import { FaVolumeUp } from "react-icons/fa";

// const Sounds = (
//     handleSongLoading,
//     handleSongPlaying,
//     handleSongFinishedPlaying
// ) => {
//     const [isPlaying , setIsPlaying ] = useState(false);

//     return(
//         <div>
//             <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'play' : 'Stop'}</button>
//             <useSound
                
//                 playStatus= {
//                     isPlaying ? useSound.status.PLAYING : useSound.status.STOPPED
//                 }
//                 onLoading={handleSongLoading}
//                 onPlaying={handleSongPlaying}
//                 onFinishedPlaying={handleSongFinishedPlaying}
//             />
//         </div>
//     )
// }




const Sounds= () => {
    const [playSound] = useSound(mySound)
  
    return (
      <button className='VolumeupBtn' onClick={() => playSound()}>
         
         <FaVolumeUp/>
      </button>
    )
}

export default Sounds