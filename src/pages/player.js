import React, {useState, useRef, useEffect} from 'react'
import PlayerControls from './playerControls';
import PlayerDetails from './playerDetails';
import VolumeControls from './volumeControls';
import { AppPass } from '../contexts/AppContext';

function Player() {
    
    const {token,
        setToken,
        releases, 
        setReleases,
        currentSongIndex, 
        setCurrentSongIndex,
        nextSongIndex, 
        setNextSongIndex,
        isPlaying, 
        setIsPlaying,
        duration, 
        setDuration,
        currentTime, 
        setCurrentTime,
        percentage, 
        setPercentage,
        audioEl,
        playerAudioRef,
        playerImageRef,
        playerNameRef,
        playerArtistRef} = AppPass()

        useEffect(() => {
          if (isPlaying) {
            playerAudioRef.current.play();
          } else {
            playerAudioRef.current.pause();
          }
        });

        
          const getCurrDuration = (e) => {
            const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
            const time = e.currentTarget.currentTime
        
            setPercentage(+percent)
            setCurrentTime(time.toFixed(2))

          console.log(percent)

          if (percent > 99.5) {
            setCurrentSongIndex(() => {
              let temp = currentSongIndex;
              temp++;

              if (temp > releases.length - 1) {
                  temp = 0
              }

              return temp;
          })
          }
          }

    const SkipSong = (fowards = true) => {
        if (fowards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;

                if (temp > releases.length - 1) {
                    temp = 0
                }

                return temp;
            })
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = releases.length - 1;
                }

                return temp;
            })
        }
    }
    

  return (
    <div className='flex flex-col z-[999999999] w-screen bg-[#1A1E1F] bg-opacity-[80%] px-2 mt-12 text-white'>
        <audio 
        src={releases[currentSongIndex].audio} 
        ref={playerAudioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        ></audio>

        <div className='flex flex-row items-center justify-between mx-2 my-4'>
            <PlayerDetails 
                song={releases[currentSongIndex]}
            />
            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong}
            />
            <VolumeControls/>
        </div>
    </div>
  )
}

export default Player;