import React from 'react'
import { AppPass } from '../../../contexts/AppContext';

function PlayerDetails() {

  const {
    tTunes, 
    currentSongIndex, 
    playerImage5Ref,
    playerName5Ref,
    playerArtist5Ref} = AppPass()

  return (
    <div className='flex flex-row items-center w-[70%]'>
        <img src={tTunes[currentSongIndex].img} ref={playerImage5Ref} className='w-[100px] h-[100px] rounded-[20px] mr-2' alt='artist'></img>
        <div>
            <h3 ref={playerName5Ref} className='text-[1.1em]'>{tTunes[currentSongIndex].name}</h3>
            <h3 ref={playerArtist5Ref} className='text-[0.9em]'>{tTunes[currentSongIndex].artist}</h3>
        </div>
    </div>
  )
}

export default PlayerDetails