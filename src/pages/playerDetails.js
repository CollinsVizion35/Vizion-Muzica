import React from 'react'

function PlayerDetails(props) {
  return (
    <div className='flex flex-row items-center'>
        <img src={props.song.album.images[0].url} className='w-[100px] rounded-[20px] mr-2' alt='artist'></img>
        <div>
            <h3 className='text-[1.1em]'>{props.song.name}</h3>
            <h3 className='text-[0.9em]'>{props.song.artists[0].name}</h3>
        </div>
    </div>
  )
}

export default PlayerDetails