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

import invincible from '../imgs/theLostChildren.jpg'
import allEyesOnMe from '../imgs/allEyesOnMe.webp'
import dangerous from '../imgs/dangerous.jpg'
import mjHistory from '../imgs/MJ-HIStory.jpg'
import collection2000 from '../imgs/collection2000.webp'
import usa4Africa from '../imgs/USA4Africa.jpg'
import fallingIntoYou from '../imgs/Falling into You.jpg'
import colours from '../imgs/colours.jpg'
import pacsLife from "../imgs/2pac-Pac's_Life.jpg"



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
        artist: 'Michael Jackson',
        img: invincible,
        name: 'The Lost Children',
        audio: 'The Lost Children.mp3',
        album: 'Invincible'
    }, {
        id: 1,
        artist: '2Pac',
        img: allEyesOnMe,
        name: 'Life Goes On',
        audio: '2Pac - Life Goes On.mp3',
        album: 'All Eyez on Me'
    }, {
        id: 2,
        artist: 'Michael Jackson',
        img: dangerous,
        name: 'Dangerous',
        audio: 'Michael Jackson - Dangerous (1995) _ Studio Version _.mp3',
        album: 'Dangerous'
    }, {
      id: 3,
      artist: 'Michael Jackson',
      img: mjHistory,
      name: 'Earth Song',
      audio: 'Michael Jackson - Earth Song.mp3',
      album: 'HIStory: Past, Present and Future, Book I'
  }, {
    id: 4,
    artist: 'Celine Dion',
    img: collection2000,
    name: 'Drove all night',
    audio: 'Celine Dion-Drove all night.mp3',
    album: '2000 Collection'
  }, {
    id: 5,
    artist: 'Michael Learns',
    img: colours,
    name: 'Sleeping Child',
    audio: 'Michael Learns- Sleeping Child.mp3',
    album: 'Colours'
  }, {
    id: 6,
    artist: '2pac',
    img: pacsLife,
    name: "Pac's life",
    audio: "2pac-Pac's life.mp3",
    album: "Pac's Life"
  }, {
    id: 7,
    artist: 'Celine Dion',
    img: fallingIntoYou,
    name: 'I love you',
    audio: 'CELINE DION-I love you.mp3',
    album: 'Falling into You'
  }, {
    id: 8,
    artist: 'Celine Dion',
    img: collection2000,
    name: 'In His Touch',
    audio: 'Celine_Dion_In_His_Touch.mp3',
    album: '2000 Collection'
  }, {
    id: 9,
    artist: 'Michael Jackson',
    img: usa4Africa,
    name: 'We are the world',
    audio: 'MICHEAL JACKSON =  USA for Africa {We are the world}.mp3',
    album: 'Singles'
  }, 
  ]


const GoldenAge = () => {

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
                        <div className='text-bold text-[1.4em] text-[#829D9D] mb-2'>Golden Age of 80s</div>
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

export default GoldenAge;