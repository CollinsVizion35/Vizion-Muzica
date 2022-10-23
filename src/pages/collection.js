import React, { useEffect, useRef, useState } from 'react';
import SearchArtist from './searchArtist';
import { AppPass } from '../contexts/AppContext';
import Player from './player';

import homeIcon from '../imgs/Home.svg';
import collectionIcon from '../imgs/playlist.svg';
import radioIcon from '../imgs/radio.svg';
import musicVidIcon from '../imgs/videos.svg';
import profileIcon from '../imgs/profile.svg';
import logoutIcon from '../imgs/Logout.svg';
import logo from '../imgs/logo.svg';
import searchIcon from '../imgs/search.svg'


import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import '../index.css';
import { onSnapshot, collection, doc } from 'firebase/firestore';
import { db } from '../firebase';
import NewReleases from './newRelease';
import Popular from './popular';
import Header from './header'
import TopChart from './topCharts';
import LogoutModal from './logoutModal';


import gkmc from '../imgs/gkmcLamar.jpg'
import dangerous from '../imgs/dangerous.jpg'
import respect from '../imgs/respect.jpg'
import pSquare from '../imgs/p-square.jpeg'



const options = [
    {
        id: 0,
        img: homeIcon,
        navigate: '/home'
    },
    {
        id: 1,
        img: collectionIcon,
        navigate: '/collection'
    },
    {
        id: 2,
        img: radioIcon,
        navigate: '/radio'
    },
    {
        id: 3,
        img: musicVidIcon,
        navigate: '/musicvideos'
    }
];

const options2 = [
    {
        id: 0,
        img: profileIcon,
        navigate: '/profile'
    }

];

const releases = [
    {
        id: 0,
        artist: 'P-Square',
        img: pSquare,
        name: 'Ihe Geme',
        audio: 'P-Square_-_Jaiye_Ihe_Geme__@BaseNaija.com.mp3',
        album: 'Singles'
    }, {
        id: 1,
        artist: 'Lucky Dube',
        img: respect,
        name: 'Respect',
        audio: 'Lucky Dube- Respect.mp3',
        album: 'Respect'
    }, {
        id: 2,
        artist: 'Michael Jackson',
        img: dangerous,
        name: 'Dangerous',
        audio: 'Michael Jackson - Dangerous (1995) _ Studio Version _.mp3',
        album: 'Dangerous'
    }, {
      id: 3,
      artist: 'Kendrick Lamar',
      img: gkmc,
      name: 'Backstreet Freestyle',
      audio: '03 - Backstreet Freestyle.mp3',
      album: 'good kid, m.A.A.d city'
  },
];

const Collection = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const {token,
        setToken,
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
        getCurrDuration,
        playerAudioRef,
        playerImageRef,
        playerNameRef,
        playerArtistRef} = AppPass()
    
    const [canShow , setCanShow] = useState(false)

    useEffect(()=>{
        const timer = setTimeout( () => setCanShow(true) , 3000)
        return () => clearTimeout(timer);
      })


      
      const audioEl = useRef(null);
      audioEl.current = [];
          const audioToEl = (el) => {
          if (el && !audioEl.current.includes(el)) {
              audioEl.current.push(el);
          }
          };

          const imageEl = useRef(null);
               imageEl.current = [];
                   const imageToEl = (el) => {
                   if (el && !imageEl.current.includes(el)) {
                       imageEl.current.push(el);
                   }
                   };

                   const musicNameEl = useRef(null);
                        musicNameEl.current = [];
                            const musicNameToEl = (el) => {
                            if (el && !musicNameEl.current.includes(el)) {
                                musicNameEl.current.push(el);
                            }
                            };

                            const artistNameEl = useRef(null);
                                 artistNameEl.current = [];
                                     const artistNameToEl = (el) => {
                                     if (el && !artistNameEl.current.includes(el)) {
                                         artistNameEl.current.push(el);
                                     }
                                     };

                                     const musicBoxEl = useRef(null);
                                          musicBoxEl.current = [];
                                              const musicBoxToEl = (el) => {
                                              if (el && !musicBoxEl.current.includes(el)) {
                                                  musicBoxEl.current.push(el);
                                              }
                                              };


    return (
        <>
        <div className='bg-[#1D2123] text-white flex flex-col min-h-screen'>
            <div className='p-4 w-[40vw] pb-8 hidden lg:flex flex-row justify-between'>
                <img src={logo} alt='home icon'/>

                <SearchArtist/>
            </div>


            <div className='bg-[#1D2123] text-white flex flex-col lg:flex-row'>
                <div className='sidebar-sm lg:hidden'>
                    <Sidebar  pageWrapId={"page-wrap"} outerContainerId={"App"} />
                </div>

                <div className='sidebar-lg hidden lg:flex flex-col'>
                    <div className='flex flex-col justify-between bg-[#1A1E1F] mx-4 w-[4vw] rounded-[50px] py-4'>
                        {options.map((option, index) => {
                                return (
                                    <> 
                                        <Link to={option.navigate}>
                                            <div key={option.id} className='flex my-3 w-1/2 mx-auto items-center cursor-pointer'>
                                                <img src={option.img} alt='dashboard tab icon'  className='stroke-black mx-auto w-[40px]' />
                                            </div>
                                        </Link>
                                    </>
                                )
                            })}
                    </div>

                    <div className='flex flex-col justify-between mt-3 bg-[#1A1E1F] mx-4 w-[4vw] rounded-[50px] my-4 py-4'>
                        
                                       
                                        <Link to='/profile'>
                                        <div className='flex my-3 w-1/2 mx-auto items-center cursor-pointer'>
                                                <img src={profileIcon} alt='dashboard tab icon'  className='mx-auto w-[40px]' />
                                            </div>
                                        </Link>

                                        <div onClick={() => setShowLogoutModal(true)}  className='flex items-center mx-auto w-1/2 my-3 cursor-pointer'>
                                            <div className='flex cursor-pointer'>
                                                <img src={logoutIcon} alt="logout icon"/>
                                            </div>
                                            {showLogoutModal === true && <LogoutModal showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal}/>}
                                        </div>
                                    </div>
                </div>

            

            <div className='Body w-[9/10] flex flex-col'>

                <div className='lg:flex lg:flex-row grid grid-cols-2 mx-auto lg:mx-[0px]'>
                <Link to='/collection'>
                    <button className=' lg:w-max w-[45vw] px-3 py-2 rounded-[20px]  text-[#4F524F] bg-[#FACD66] mr-2'>My Collection</button>
                </Link>
                <Link to='/likes'>
                    <button className=' lg:w-max w-[45vw] px-3 py-2 rounded-[20px] border border-[#4F524F] text-[#4F524F]'>Likes</button>
                </Link>
                </div>

                <div className='flex lg:flex-row flex-col py-4'>
                        
                                    {releases.map((release, index) => {
                                            return (
                                                
                                                <> 
                                                    <div key={index} ref={musicBoxToEl} onClick={() => {
                                                            console.log(imageEl.current)
                                                            console.log(audioEl.current[index])
                                                            console.log(musicNameEl.current[index])
                                                            console.log(artistNameEl.current[index])
                                                            console.log(releases[currentSongIndex].name)
                                                            // musicBoxEl.current[0].style.display = 'none'
                                                            // musicBoxEl.current[0].style.scale = '0'
                                                            console.log(isPlaying)
                                                                
                                                            console.log(playerAudioRef.current.currentSrc)
                                                            console.log(playerImageRef.current.outerHTML)
                                                            console.log(imageEl)
                                                            console.log(playerNameRef.current.innerHTML)
                                                            console.log(playerArtistRef.current.innerHTML)
                                                            isPlaying === true ? setIsPlaying(isPlaying) : setIsPlaying(!isPlaying)
                                                            playerAudioRef.current.src = audioEl.current[index].src
                                                            playerImageRef.current.src = imageEl.current[index].src
                                                            
                                                            playerNameRef.current.innerHTML = musicNameEl.current[index].innerHTML
                                                            playerArtistRef.current.innerHTML = artistNameEl.current[index].innerHTML
                                                        }} 

                                                        onFocus={() => {
                                                            musicNameEl.current[index].style.scale = '1.5'
                                                        }}
                                                        className='flex flex-col relative group text-left my-3 mx-auto mr-4 cursor-pointer'>
        
                                                        <audio 
                                                            src={release.audio} 
                                                            ref={audioToEl}
                                                            onTimeUpdate={getCurrDuration}
                                                            onLoadedData={(e) => {
                                                            setDuration(e.currentTarget.duration.toFixed(2))
                                                            }}
                                                        ></audio>
                                                        <img className='lg:w-[150px]  group-hover:scale-[1.1] lg:h-[150px] w-[90vw] h-[200px] rounded-[20px]' title={release.img}  ref={imageToEl} src={release.img} alt="artist"/>

                                                        <div className='absolute bottom-0 left-0 pl-2 pb-2'>
                                                            <h2 ref={musicNameToEl} className='text-white opacity-[70%] text-[0.9em]'>{release.name}</h2>
                                                            <h5 ref={artistNameToEl} className='text-white opacity-[70%] text-[.6em]'>{release.artist}</h5>
                                                        </div>
                                                        </div>
                                        
                                                </>
                                                
                                            )
                                        })}
                                    
        
                                    
        
        
                        
                                    
                </div>
            </div>
            
            </div>
        </div>

        <footer className='fixed bottom-0 z-[99999] w-screen left-0'>
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

export default Collection;