import React, { useEffect, useRef, useState } from 'react';
import Player from './player';

import {SiSpotify} from 'react-icons/si/index'
import axios from 'axios'
import notAvailable from '../imgs/No-Photo-Available.jpg'
import { AppPass } from '../contexts/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




const NewReleases = () => {

    const { token } = AppPass()
    const [canShow , setCanShow] = useState(false)

    const [releases, setReleases] = useState([])
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

useEffect(() => {
    const getTracks = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/tracks", {
            headers: {
                'Authorization': 'Bearer ' + token 
            },
            params: {
                ids: '2wgvxtggKVzPkl0smF2UzI,5UwxpuGHkwiojKDaPC5ZNu,5CTQCPv51aLWpwTbqo8mEL,4vI2KCvXTAPR3vfiWg1J78,4N7AXHRMQYh9GHQd5hE6NP,52oDXfdKV4faAFLnNyf0bl,3PEkfP69a7aMMb8yI7PD88,4hqCqVze2sJqskEQmK2Mb7,3iRKwxW8ZDjmL9nKk3nisz,2pUlBBWq8R10ylbBvZJV9j,7vVs4XCsQyGn1Au3drvo9Z,0WtM2NBVQNNJLh6scP13H8,2tZPZ1lT8TMlEUxXTxCCeO,4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M'
            }
        })
        console.log(data.tracks);
        setReleases(data.tracks);
    }
    getTracks();

    
}, [token])

useEffect(()=>{
    const timer = setTimeout( () => setCanShow(true) , 1000)
    return () => clearTimeout(timer);
  })


    
 const oy = () => {
    setNextSongIndex(() => {
        if (currentSongIndex + 1 > releases.length - 1) {
            return 0;
        } else {
            return currentSongIndex + 1;
        }
    });
 }

    

    return (
        <>
            <div className='flex flex-col bg-[#1A1E1F] px-4 text-white'>
                <h3 className='text-[1.3em] float-left p-3'>
                    New Releases.
                </h3>

                <div className='flex flex-row justify-betweenw-screen py-4'>
                        
                
                    <Swiper  
                    spaceBetween={20} 
                    slidesPerView={7}
                    >
                            {releases.map((release, index) => {
                                    return (
                                        <SwiperSlide>
                                        <> 
                                                <div key={index} onClick={oy} className='flex flex-col relative text-left my-3 mx-auto cursor-pointer'>
                                                <audio disabled className='absolute hidden top-0 left-0 mx-auto mt-[50px] ml-[50px] h-[100px]'
                                                    src={release.preview_url}
                                                    controls
                                                />
                                                {release.album.images.length ?<img className='w-[200px] rounded-[20px]' src={release.album.images[0].url} alt="artist"/> : <img className='w-[200px] h-[200px] rounded-[50px]' src={notAvailable} alt='not available'/>}
                                                <h2 className='text-white text-[1.1em]'>{release.name}</h2>
                                                    <h5 className='text-white text-[.8em]'>{release.artists[0].name}</h5>
                                                </div>
                                
                                        </>
                                        </SwiperSlide>
                                    )
                                })}
                                </Swiper>
                </div>
            </div>

                    <footer className='fixed bottom-0 z-99999'>
                    {canShow ?  <Player 
                                currentSongIndex={currentSongIndex}
                                setCurrentSongIndex={setCurrentSongIndex}
                                nextSongIndex={nextSongIndex}
                                releases={releases} 
                            />  : <> </>}
                    </footer>
        </>
    )
}

export default NewReleases;