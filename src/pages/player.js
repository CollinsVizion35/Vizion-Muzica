import React, {useState, useRef, useEffect} from 'react'
import PlayerControls from './playerControls';
import PlayerDetails from './playerDetails';
import VolumeControls from './volumeControls';

function Player(props) {
    
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
      if (isPlaying) {
        audioEl.current.play();
      } else {
        audioEl.current.pause();
      }
    });

    const SkipSong = (fowards = true) => {
        if (fowards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.releases.length - 1) {
                    temp = 0
                }

                return temp;
            })
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.releases.length - 1;
                }

                return temp;
            })
        }
    }
    

  return (
    <div className='flex flex-col w-screen bg-[#1A1E1F] mt-12 text-white'>
        <audio src={props.releases[props.currentSongIndex].preview_url} ref={audioEl}></audio>

        <div className='flex flex-row items-center justify-between mx-2 my-4'>
            <PlayerDetails 
                song={props.releases[props.currentSongIndex]}
            />
            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong}
            />
            <VolumeControls/>
        </div>
        <p>Next Up: {props.releases[props.nextSongIndex].name} by {props.releases[props.nextSongIndex].artists[0].name}</p>
    </div>
  )
}

export default Player;