import React, { useEffect, useRef, useState } from 'react';
import {SiSpotify} from 'react-icons/si/index'
import axios from 'axios'
import notAvailable from '../imgs/No-Photo-Available.jpg'
import { AppPass } from '../contexts/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReactAudioPlayer from 'react-audio-player';




const Player = () => {

    const { token } = AppPass()

    const [releases, setReleases] = useState([])

useEffect(() => {
    const getTracks = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/me/player", {
            headers: {
                'Authorization': 'Bearer ' + token 
            },
            params: {
                additional_types: 'track'
            }
        })
        console.log(data);
        // setReleases(data.tracks);
    }
    getTracks();
}, [])






    

    return (
        <>
            {/* <div className='flex flex-row justify-between bg-[#1A1E1F] mx-4 rounded-[50px] py-4'>
                       
            
        <Swiper  
        spaceBetween={20} 
        slidesPerView={7}
        >
                        {releases.map((release, index) => {
                                return (
                                    <SwiperSlide>
                                    <> 
                                            <div key={index} className='flex flex-col relative text-left my-3 mx-auto cursor-pointer'>
                                            <ReactAudioPlayer className='absolute top-0 left-0 mx-auto mt-[50px] ml-[50px] h-[100px]'
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
                    </div> */}
        </>
    )
}

export default Player;