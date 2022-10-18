import React, { useEffect, useRef, useState } from 'react';
import { AppPass } from '../contexts/AppContext';
import {FaRegHeart, FaHeart} from 'react-icons/fa/index'


import '../index.css';





const TopChart = () => {

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
        getCurrDuration,} = AppPass()
    

    return (
        <>
        <div className='w-[40vw] ml-[2vw] flex flex-col'>
            <h1 className='float-left mb-4'>Top Charts.</h1>

            <div className='flex flex-col'>
                <div className='mb-2 bg-[#1A1E1F] rounded-[20px]'>
                    <div className='p-3 flex flex-row items-center'>
                    <img className='rounded-[10px] w-[50px] h-[50px] mr-[3%]' src='tomorrowsTunes.jpg' alt=''/>
                    <div className='flex flex-col w-[80%] mr-[3%]'>
                        <div className='text-[1em]'>Golden age of 80s</div>
                        <div className='text-[.6em] opacity-[70%]'>Sean swadder</div>
                        <div className='text-[.7em]'>2:34:45</div>
                    </div>
                    <div className='w-[10%]'>
                        <div className='border border-gray p-2 rounded-[50%] w-fit'>
                        <FaRegHeart className='text-[#FACD66]'/>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='mb-2 bg-[#1A1E1F] rounded-[20px]'>
                    <div className='p-3 flex flex-row items-center'>
                    <img className='rounded-[10px] w-[50px] h-[50px] mr-[3%]' src='tomorrowsTunes.jpg' alt=''/>
                    <div className='flex flex-col w-[80%] mr-[3%]'>
                        <div className='text-[1em]'>Reggae “n” blues</div>
                        <div className='text-[.6em] opacity-[70%]'>Dj YK mule</div>
                        <div className='text-[.7em]'>1:02:42</div>
                    </div>
                    <div className='w-[10%]'>
                        <div className='border border-gray p-2 rounded-[50%] w-fit'>
                        <FaRegHeart className='text-[#FACD66]'/>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='mb-2 bg-[#1A1E1F] rounded-[20px]'>
                    <div className='p-3 flex flex-row items-center'>
                    <img className='rounded-[10px] w-[50px] h-[50px] mr-[3%]' src='tomorrowsTunes.jpg' alt=''/>
                    <div className='flex flex-col w-[80%] mr-[3%]'>
                        <div className='text-[1em]'>Tomorrow’s tunes</div>
                        <div className='text-[.6em] opacity-[70%]'>Obi Datti</div>
                        <div className='text-[.7em]'>2:01:25</div>
                    </div>
                    <div className='w-[10%]'>
                        <div className='border border-gray p-2 rounded-[50%] w-fit'>
                        <FaRegHeart className='text-[#FACD66]'/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopChart;