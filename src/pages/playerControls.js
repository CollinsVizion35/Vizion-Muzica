import React from 'react'
import {FaPlay, FaPause, FaStepBackward, FaStepForward} from 'react-icons/fa/index'
import {BsShuffle} from 'react-icons/bs/index'
import {TbRepeatOnce} from 'react-icons/tb/index'

function PlayerControls(props) {
  return (
    <div className='flex flex-col items-center w-[60vw]'>
        <div className='flex flex-row items-center w-[40vw] justify-between mb-2'>
            <button><BsShuffle/></button>
            <button onClick={() => props.SkipSong(false)}><FaStepBackward/></button>
            <button className='p-3 bg-[#F9D175] rounded-[50%]' onClick={() => props.setIsPlaying(!props.isPlaying)}>
                {props.isPlaying ? <FaPause/> : <FaPlay/>}
            </button>
            <button onClick={() => props.SkipSong()}><FaStepForward/></button>
            <button><TbRepeatOnce/></button>
        </div>

        <div>
            <input type='range' id='sondTime' className='w-[60vw] h-[10%] bg-[#F9D175]'/>
        </div>
    </div>
  )
}

export default PlayerControls;