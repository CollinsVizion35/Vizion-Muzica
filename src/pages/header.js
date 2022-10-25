import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

import reggaePic from '../imgs/dube-removebg-preview.png'
import afroPic from '../imgs/burna-removebg-preview.png'
import rbPic from '../imgs/Pexels Photo by Eric Esma.svg'
import hiphopPic from '../imgs/eminem-removebg-preview.png'
import gospelPic from '../imgs/chinwo-removebg-preview.png'
import user1 from '../imgs/Ellipse 2.svg'
import user2 from '../imgs/Ellipse 3.svg'
import user3 from '../imgs/Ellipse 4.svg'
import user4 from '../imgs/Ellipse 5.svg'
import user5 from '../imgs/Ellipse 6.svg'
import vectorImg from '../imgs/Vector.svg'
import {FaRegHeart, FaHeart} from 'react-icons/fa/index'


const playlists = [
    {
        id: 0,
        name: 'R & B Hits',
        img: rbPic,
        desc: 'All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more',
        likes: '33k Likes',
        bgColor: '#609EAF'
    },
    {
        id: 1,
        name: 'Kings of AfroBeats',
        img: afroPic,
        desc: 'The curious beauty of African music is that it uplifts even as it tells a sad tale.',
        likes: '101k Likes',
        bgColor: '#79292F'
    },
    {
        id: 2,
        name: 'HipHop Beats',
        img: hiphopPic,
        desc: "Remember one thing Through every dark night, there's a bright day after that",
        likes: '321k Likes',
        bgColor: '#4C2F58'
    },
    {
        id: 3,
        name: 'Best of Reggaes',
        img: reggaePic,
        desc: "Money can't buy life",
        likes: '52k Likes',
        bgColor: '#FACD66'
    },
    {
        id: 4,
        name: 'The Gospel',
        img: gospelPic,
        desc: "When there's music in your soul, there's soul in your music",
        likes: '29k Likes',
        bgColor: '#7676A9'
    }
];


function Header() {

    SwiperCore.use([Autoplay])


  return (
            <div className='flex flex-row w-[95vw] ml-[2.5vw] lg:w-[45vw] text-[#fff] justify-between bg-[inherit] lg:mx-4 rounded-[50px] py-4'>
            
            <Swiper  
                    spaceBetween={20} 
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    >
                            {playlists.map((playlist, index) => {
                                return (
                                    <SwiperSlide>
                                    <> 
                                            
                                                <div key={index} style={{backgroundColor: playlist.bgColor}}  className='flex relative w-[95vw] lg:w-[45vw] px-3 h-[60vh] rounded-[50px] mx-auto items-center cursor-pointer flex-row lg:6 justify-between'>
                                                    <div className='flex flex-col justify-around'>
                                                        <div className='text-[0.9em] px-12 '>Currated playlist</div>

                                                        <div>
                                                            <div className='text-[1.5em] text-bolder px-12 mt-6'>{playlist.name}</div>
                                                            <div className='text-[0.8em] w-[100%] px-12 mb-[2em]'>{playlist.desc}</div>
                                                        </div>

                                                        <div className='flex flex-row pl-14 pb-8'>
                                                            <div className='flex flex-row'>
                                                                <img className='ml-[-1em]' src={user1} alt='user'/>
                                                                <img className='ml-[-1em]' src={user2} alt='user'/>
                                                                <img className='ml-[-1em]' src={user3} alt='user'/>
                                                                <img className='ml-[-1em]' src={user4} alt='user'/>
                                                                <img className='ml-[-1em]' src={user5} alt='user'/>
                                                            </div>
                                                            <div className='ml-[1.5em]'><FaRegHeart/></div>
                                                            <div className='ml-[1.5em] text-[0.9em]'>{playlist.likes}</div>
                                                        </div>
                                                    </div>

                                                    <div className='w-[20vw] lg:block hidden'>
                                                        <img className='h-[45vw] w-[100%] mt-[2%] mr-[2%]' src={vectorImg} alt='artist'/>
                                                        <img className='absolute right-0 top-0 h-full min-w-[20vw] m-h-[50%] z-[999]' src={playlist.img} alt='artist'/>
                                                    </div>
                                                </div>
                                    </>
                                        </SwiperSlide>
                                )
                            })}
                            </Swiper>
            </div>
  )
}

export default Header;