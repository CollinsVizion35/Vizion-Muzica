import React from 'react'
import { AppPass } from '../../../contexts/AppContext';

function PlayerDetails() {

  const {
    releases, 
    currentSongIndex, 
    playerImageRef,
    playerNameRef,
    playerArtistRef} = AppPass()

  return (
    <div className='flex flex-row items-center w-[70%]'>
        <img src={releases[currentSongIndex].img} ref={playerImageRef} className='w-[100px] h-[100px] rounded-[20px] mr-2' alt='artist'></img>
        <div>
            <h3 ref={playerNameRef} className='text-[1.1em]'>{releases[currentSongIndex].name}</h3>
            <h3 ref={playerArtistRef} className='text-[0.9em]'>{releases[currentSongIndex].artist}</h3>
        </div>
    </div>
  )
}

export default PlayerDetails