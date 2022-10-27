import React from 'react'
import { AppPass } from '../../../contexts/AppContext';

function PlayerDetails() {

  const {
    likes, 
    currentSongIndex, 
    playerImage3Ref,
    playerName3Ref,
    playerArtist3Ref} = AppPass()

  return (
    <div className='flex flex-row items-center w-[70%]'>
        <img src={likes[currentSongIndex].img} ref={playerImage3Ref} className='w-[100px] h-[100px] rounded-[20px] mr-2' alt='artist'></img>
        <div>
            <h3 ref={playerName3Ref} className='text-[1.1em]'>{likes[currentSongIndex].name}</h3>
            <h3 ref={playerArtist3Ref} className='text-[0.9em]'>{likes[currentSongIndex].artist}</h3>
        </div>
    </div>
  )
}

export default PlayerDetails