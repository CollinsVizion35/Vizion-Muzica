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
import searchIcon from '../imgs/search.svg';
import { BsThreeDotsVertical, BsHeart, BsFillPlayCircleFill, BsHeartFill } from 'react-icons/bs/index'
import { MdCollectionsBookmark } from 'react-icons/md/index'


import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import '../index.css';
import { onSnapshot, collection, doc } from 'firebase/firestore';
import { db } from '../firebase';
import NewReleases from './newRelease';
import Popular from './popular';
import Header from './header'
import TopChart from './topCharts';

import bgImage from '../imgs/tomorrowsTunes.jpg'
import badGuy from '../imgs/badGuy.webp'
import homicide from '../imgs/homicide.jpg'
import theBox from '../imgs/theBox.jpg'
import gkmc from '../imgs/gkmcLamar.jpg'
import trollz from '../imgs/trollz.png'
import xxivk from '../imgs/Bruno_Mars_-_24K_Magic_(Official_Album_Cover).png'
import royalty from '../imgs/Royalty_Chris_Brown.jpg'
import JonTHC from '../imgs/jonBellionTHC.jpg'
import adhd from '../imgs/adhdJoyner.jpg'
import astroworld from '../imgs/Travis Scott_Astroworld.webp'



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
    },
    {
        id: 1,
        img: logoutIcon,
        navigate: '/'
    }

];

const releases = [
    {
        id: 0,
        artist: 'Billie Ellish ft. Justin Bieber',
        img: badGuy,
        name: 'Bad Guy (Remix)',
        audio: '[Waploaded]_Billie_Eilish_-_Bad_Guy_Remix_feat_Justin_Bieber-1563035495.mp3',
        album: 'Singles'
    }, {
        id: 1,
        artist: 'Roddy Ricch',
        img: theBox,
        name: 'The Box',
        audio: '02 The Box - (SongsLover.com).mp3',
        album: 'Please Excuse Me for Being Antisocial'
    }, {
        id: 2,
        artist: 'Logic ft. Eminem',
        img: homicide,
        name: 'Homicide',
        audio: '02. Homicide (feat. Eminem) - (SongsLover.com).mp3',
        album: 'Confessions of a Dangerous Mind'
    }, {
      id: 3,
      artist: 'Kendrick Lamar',
      img: gkmc,
      name: 'Backstreet Freestyle',
      audio: '03 - Backstreet Freestyle.mp3',
      album: 'good kid, m.A.A.d city'
  }, {
    id: 4,
    artist: '6ix9ine ft. Nicki Minaj',
    img: trollz,
    name: 'Trollz',
    audio: '6ix9ine & Nicki Minaj - TROLLZ (NetNaija.com).mp3',
    album: 'TattleTales'
  }, {
    id: 5,
    artist: 'Bruno Mars',
    img: xxivk,
    name: '24K Magic',
    audio: '24K Magic - Bruno Mars (Lyrics).mp3',
    album: 'XXIVK Magic'
  }, {
    id: 6,
    artist: 'Chris Brown',
    img: royalty,
    name: "Zero",
    audio: "Chris Brown - Zero.mp3",
    album: "Royalty"
  }, {
    id: 7,
    artist: 'Jon Bellion',
    img: JonTHC,
    name: 'iRobot',
    audio: 'Jon%20Bellion%20-%20iRobot%20(The%20Human%20Condition)-2.mp3',
    album: 'The Human Condition'
  }, {
    id: 8,
    artist: 'Joyner Lucas ft. Logic',
    img: adhd,
    name: 'Isis',
    audio: 'Joyner Lucas - Isis (feat. Logic) - (SongsLover.com).mp3',
    album: 'ADHD'
  }, {
    id: 9,
    artist: 'Travis Scott ft. Drake',
    img: astroworld,
    name: 'Sicko Mode',
    audio: 'Travis-Scott-ft-Drake-Sicko-Mode.mp3',
    album: 'Astroworld'
  }, 
  ]


const Tomorrow = () => {

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
                                                <div  className='bg-opacity-[0%]' style={{backgroundImage: "url('mj.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                                                <div className='bg-[#1A1E1F] bg-opacity-[70%] text-white flex flex-col min-h-screen'>
                                                    <div className='bg-[#1A1E1F] bg-opacity-[70%] p-4 w-screen pb-8 hidden lg:flex flex-row'>
                                                        <img src={logo} alt='home icon' className='mr-2'/>
                                        
                                                        <SearchArtist/>
                                                    </div>
                                        
                                        
                                                    <div className='bg-inherit text-white flex flex-col lg:flex-row'>
                                                        <div className='sidebar-sm lg:hidden'>
                                                            <Sidebar  pageWrapId={"page-wrap"} outerContainerId={"App"} />
                                                        </div>
                                        
                                                        <div className='sidebar-lg hidden lg:flex flex-col'>
                                                            <div className='flex flex-col justify-between bg-opacity-[70%] bg-[#262A2D] mx-4 w-[4vw] rounded-[50px] py-4'>
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
                                        
                                                            <div className='flex flex-col justify-between mt-3 bg-opacity-[70%] bg-[#262A2D] mx-4 w-[4vw] rounded-[50px] my-4 py-4'>
                                                                {options2.map((option2, index) => {
                                                                        return (
                                                                            <> 
                                                                                <Link to={option2.navigate}>
                                                                                    <div key={option2.id} className='flex my-3 w-1/2 mx-auto items-center cursor-pointer'>
                                                                                        <img src={option2.img} alt='dashboard tab icon'  className='mx-auto w-[40px]' />
                                                                                    </div>
                                                                                </Link>
                                                                            </>
                                                                        )
                                                                    })}
                                                            </div>
                                                        </div>
                                        
                                                    
                                        
                                                    <div className='goldenAge flex flex-col lg:w-full w-[90vw] mx-auto'>
                                                        <div className='flex lg:flex-row flex-col mb-8 items-end items-left'>
                                                            <img src='mj.jpg' alt='music cover' className='lg:w-[250px] lg:h-[250px] lg:mr-4 w-full mx-auto rounded-[20px]'/>
                                                            <div className='flex flex-col lg:w-[100%] w-[95vw] mx-auto mt-4 lg:mt-[0px]'>
                                                                <div className='text-bold text-[1.4em] text-[#829D9D] mb-2'>Tomorrow's Tunes</div>
                                                                <div className=' text-[0.8em] mb-1 lg:w-[40vw] w-[90vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>
                                                                <div className='text-[0.7em] mb-6'>10 songs ~ 16 hrs+</div>
                                                                <div className='flex items-center flex-row'>
                                                                    <button className='rounded-[20px] w-max p-2 bg-[#262A2D] text-[.7em] lg:text-[1em] flex flex-row mr-3 items-center'><BsFillPlayCircleFill className='text-[#FACD66] w-[1em] mr-2'/> Play all</button>
                                                                    <button className='rounded-[20px] w-max p-2 bg-[#262A2D] text-[.7em] lg:text-[1em] flex flex-row mr-3 items-center'><MdCollectionsBookmark className='text-[#FACD66] w-[1em] mr-2'/> Add to collection</button>
                                                                    <button className='rounded-[20px] w-max p-2 bg-[#262A2D] text-[.7em] lg:text-[1em] flex flex-row mr-3 items-center'><BsHeartFill className='text-[#E5524A] w-[1em]'/></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                        
                                                        <div className='w-[90vw] mb-[8em]'>
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
                                                                            playerArtistRef.current.innerHTML = ''
                                                                         }} 
                                                                         className='flex items-center flex-row justify-evenly rounded-[20px] relative bg-opacity-[70%] bg-[#262A2D] p-2 mx-auto mb-4 cursor-pointer'>
                                        
                                                                        <audio 
                                                                            src={release.audio} 
                                                                            ref={audioToEl}
                                                                            onTimeUpdate={getCurrDuration}
                                                                            onLoadedData={(e) => {
                                                                            setDuration(e.currentTarget.duration.toFixed(2))
                                                                            }}
                                                                        ></audio>
                                                                        <img className='w-[50px] h-[50px] mr-4  rounded-[10px]' title={release.img}  ref={imageToEl} src={release.img} alt="artist"/>
                                                                        <BsHeart className='w-[7%] lg:block hidden'/>
                                                                        <div className='lg:w-[60%] w-[80%] flex flex-col text-left lg:flex-row lg:text-center'>
                                                                        <h2 ref={musicNameToEl} className='lg:w-[30%] text-left lg:text-center text-white text-[.6em] md:text-[.7em] opacity-[70%]'>{release.name} - {release.artist}</h2>
                                                                        <h2 className='lg:w-[30%] text-left lg:text-center text-white text-[.6em] md:text-[.7em] opacity-[70%]'>{release.album}</h2>
                                                                        </div>
                                                                        <div className='lg:w-[21%] w-[10%] flex flex-col lg:flex-row text-center items-center'>
                                                                        <h2 className='w-[20%] text-center text-white text-[.6em] md:text-[.7em] opacity-[70%]'>4:12</h2>
                                                                        <BsThreeDotsVertical className='text-[#FACD66] lg:w-[1%]'/>
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
                                                </div>
                                            )
}

export default Tomorrow;