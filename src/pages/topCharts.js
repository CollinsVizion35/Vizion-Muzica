import React, { useEffect, useRef, useState } from 'react';
import { AppPass } from '../contexts/AppContext';
import {FaRegHeart, FaHeart} from 'react-icons/fa/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


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
        <div className='w-[95vw] lg:w-[40vw] ml-[2vw] flex flex-col'>
            <h1 className='float-left mb-4'>Top Charts.</h1>

            <div className='hidden lg:flex flex-col'>

                
            <Link to='/goldenage'>
                <div className='mb-2 bg-[#1A1E1F] rounded-[20px]'>
                    <div className='p-3 flex flex-row items-center'>
                    <img className='rounded-[10px] w-[50px] h-[50px] mr-[3%]' src='mj.jpg' alt=''/>
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
            </Link>

            
            <Link to='/reggaeblues'>
                <div className='mb-2 bg-[#1A1E1F] rounded-[20px]'>
                    <div className='p-3 flex flex-row items-center'>
                    <img className='rounded-[10px] w-[50px] h-[50px] mr-[3%]' src='marley.webp' alt=''/>
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
            </Link>

            
            <Link to='/tomorrow'>
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
            </Link>
            </div>

            <Swiper  
                    spaceBetween={20} 
                    slidesPerView={1}

                    className='lg:hidden'
                    >


            <div className='hidden w-[95vw] h-[30vh] lg:flex flex-row'>

            <SwiperSlide>
            <Link to='/goldenage'>
                <div className='mb-2 w-[95vw] bg-[#1A1E1F] h-[30vh] rounded-[20px]'>
                    <div className='p-3 w-[95vw] h-[30vh] flex flex-row justify-around items-center'>
                    <div className='flex flex-col'>
                    <img className='rounded-[10px] w-[50px] h-[50px] mr-[3%]' src='mj.jpg' alt=''/>
                    <div className='flex flex-col w-[80%] mr-[3%]'>
                        <div className='text-[1em]'>Golden age of 80s</div>
                        <div className='text-[.6em] opacity-[70%]'>Sean swadder</div>
                        <div className='text-[.7em]'>2:34:45</div>
                    </div>
                    </div>
                    <div className='w-[10%]'>
                        <div className='border border-gray p-2 rounded-[50%] w-fit'>
                        <FaRegHeart className='text-[#FACD66]'/>
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
                </SwiperSlide>

                <SwiperSlide>
                <Link to='/reggaeblues'>
                <div className='mb-2 w-[95vw] h-[30vh] bg-[#1A1E1F] rounded-[20px] cursor-pointer'>
                    <div className='p-3 w-[95vw] h-[30vh] flex flex-row justify-around items-center'>
                    <div className='flex flex-col'>
                    <img className='rounded-[10px] w-[50px] h-[50px] mr-[3%]' src='marley.webp' alt=''/>
                    <div className='flex flex-col w-[80%] mr-[3%]'>
                        <div className='text-[1em]'>Reggae “n” blues</div>
                        <div className='text-[.6em] opacity-[70%]'>Dj YK mule</div>
                        <div className='text-[.7em]'>1:02:42</div>
                    </div>
                    </div>
                    <div className='w-[10%]'>
                        <div className='border border-gray p-2 rounded-[50%] w-fit'>
                        <FaRegHeart className='text-[#FACD66]'/>
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
                </SwiperSlide>

                <SwiperSlide>
                <Link to='/tomorrow'>
                <div className='mb-2 w-[95vw] h-[30vh] bg-[#1A1E1F] rounded-[20px] cursor-pointer'>
                    <div className='p-3 w-[95vw] h-[30vh] flex flex-row justify-around items-center'>
                    <div className='flex flex-col'>
                    <img className='rounded-[10px] w-[50px] h-[50px] mr-[3%]' src='tomorrowsTunes.jpg' alt=''/>
                    <div className='flex flex-col w-[80%] mr-[3%]'>
                        <div className='text-[1em]'>Tomorrow’s tunes</div>
                        <div className='text-[.6em] opacity-[70%]'>Obi Datti</div>
                        <div className='text-[.7em]'>2:01:25</div>
                    </div>
                    </div>
                    <div className='w-[10%]'>
                        <div className='border border-gray p-2 rounded-[50%] w-fit'>
                        <FaRegHeart className='text-[#FACD66]'/>
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
                </SwiperSlide>
            </div>

            </Swiper>
        </div>
        </>
    )
}

export default TopChart;