import React, { useRef } from 'react';
import { FaVolumeUp} from 'react-icons/fa/index'

// import {SiSpotify} from 'react-icons/si/index'
// import axios from 'axios'
// import notAvailable from '../../imgs/No-Photo-Available.jpg'
import { AppPass } from '../../contexts/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import otilo from '../../imgs/poco.jpeg'
import mMWTV from '../../imgs/asake.jpeg'
import rush from '../../imgs/ayra-starr.jpg'
import remaRaves from '../../imgs/Rema-Rave-Roses.jpeg'
import breezy from '../../imgs/Chris-Brown-Call-me-everyday.jpg'
import pSquare from '../../imgs/p-square.jpeg'
import coughKizz from '../../imgs/Kizz-Daniel-Cough.jpg'
import blaqUni from '../../imgs/Blaqbonez-Back-To-Uni.jpeg'
import PheelzElec from '../../imgs/electricity.png'


const popular = [
    {
        id: 0,
        artist: 'Poco Lee Ft Hotkid',
        img: otilo,
        name: 'Otilo',
        audio: 'Poco_Lee_-_Otilo_Izz_Gone_feat_Hotkid__@BaseNaija.com.mp3'
    }, {
        id: 1,
        artist: 'Blaqbonez',
        img: blaqUni,
        name: 'Back in Uni',
        audio: 'Blaqbonez-JAE5-Back-In-Uni_@BaseNaija.com_.mp3'
    }, {
        id: 2,
        artist: 'Asake',
        img: mMWTV,
        name: 'Organise',
        audio: 'Asake_-_Organise_@BaseNaija.com.mp3'
    }, {
      id: 3,
      artist: 'Kizz Daniel',
      img: coughKizz,
      name: 'Cough (Odo)',
      audio: 'Kizz_Daniel_-_Cough_Odo__@BaseNaija.com.mp3'
  }, {
    id: 4,
    artist: 'Asake',
    img: mMWTV,
    name: 'Dull',
    audio: 'Asake_-_Dull_@BaseNaija.com.mp3'
  }, {
    id: 5,
    artist: 'Ayra Starr',
    img: rush,
    name: 'Rush',
    audio: 'Ayra_Starr_-_Rush_@BaseNaija.com.mp3'
  }, {
    id: 6,
    artist: 'Pheelz Ft Davido',
    img: PheelzElec,
    name: 'Electricity',
    audio: 'Pheelz_-_Electricity_feat_Davido__@BaseNaija.com.mp3'
  }, {
    id: 7,
    artist: 'Chris Brown Ft Wizkid',
    img: breezy,
    name: 'Call Me Everyday',
    audio: 'Chris_Brown_-_Call_Me_Everyday_feat_Wizkid__@BaseNaija.com.mp3'
  }, {
    id: 8,
    artist: 'Rema',
    img: remaRaves,
    name: 'Are You There',
    audio: 'Rema_-_Are_You_There__@BaseNaija.com.mp3'
  }, {
    id: 9,
    artist: 'P-Square',
    img: pSquare,
    name: 'Ihe Geme',
    audio: 'P-Square_-_Jaiye_Ihe_Geme__@BaseNaija.com.mp3'
  }, 
  ]
  




const Popular = () => {

    const {
        currentSongIndex, 
        isPlaying, 
        setIsPlaying,
        setDuration,
        getCurrDuration,
        playerAudio7Ref,
        playerImage7Ref,
        playerName7Ref,
        playerArtist7Ref} = AppPass()

        

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

                                                const audioSignEl = useRef(null);
                                                     audioSignEl.current = [];
                                                         const audioSignToEl = (el) => {
                                                         if (el && !audioSignEl.current.includes(el)) {
                                                             audioSignEl.current.push(el);
                                                         }
                                                         };


   

            // useEffect(() => {
            //     setTimeout(() => {
            //         if (isPlaying) {
            //           audioEl.current.play();
            //         } else {
            //           audioEl.current.pause();
            //         }
            //       }, 4000);
            //   });

         

// useEffect(() => {
//     const getTracks = async () => {
//         const {data} = await axios.get("https://spotify23.p.rapidapi.com/tracks/", {
//             headers: {
//                 'X-RapidAPI-Key': '6ed6cedd6fmshd8e759bfbb8f31ep15789fjsnb435e620a8a3',
//                 'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//             },
//             params: {
//                 ids: '1301WleyT98MSxVHPZCA6M,2wgvxtggKVzPkl0smF2UzI,5UwxpuGHkwiojKDaPC5ZNu,3PEkfP69a7aMMb8yI7PD88,4vI2KCvXTAPR3vfiWg1J78,4hqCqVze2sJqskEQmK2Mb7,4N7AXHRMQYh9GHQd5hE6NP,5CTQCPv51aLWpwTbqo8mEL,3iRKwxW8ZDjmL9nKk3nisz,2pUlBBWq8R10ylbBvZJV9j,7vVs4XCsQyGn1Au3drvo9Z,0WtM2NBVQNNJLh6scP13H8,2tZPZ1lT8TMlEUxXTxCCeO,52oDXfdKV4faAFLnNyf0bl,4iV5W9uYEdYUVa79Axb7Rh'
//             }
//         })
//         console.log(data.tracks);
//         setpopular(data.tracks);
//     }
//     getTracks();

    
// }, [setpopular])



//   const [iplay, setIplay] = useState(false)

//   const oy = (src) => {
//     console.log(audioEl.current);
//     // let sound = new Howl ({
//     //     src,
//     //     html5: true
//     // })

    
       
//     // if (isPlaying) {
//     //     sound.pause();
//     //     setIsPlaying(false);
//     //   } else {
//     //     sound.play();
//     //     setIsPlaying(true);
//     //   }
//     //   console.log("isPlaying", isPlaying);

//   }
    
 

    

    return (
        <>
            <div className='flex flex-col bg-[#1D2123] lg:w-[90vw] w-[95vw] float-right px-4 text-white'>
                <h3 className='text-[1.3em] float-left p-3'>
                    Popular in your area.
                </h3>

                <div className='flex flex-row justify-betweenw-screen py-4'>
                        
                
                    <Swiper  
                    spaceBetween={20} 
                    slidesPerView={7}

                    className='hidden lg:block'
                    >
                            {popular.map((release, index) => {
                                    return (
                                        <SwiperSlide>
                                        <> 
                                               <div key={release.name} ref={musicBoxToEl} onClick={() => {
                                                    console.log(imageEl.current)
                                                    console.log(audioEl.current[index])
                                                    console.log(musicNameEl.current[index])
                                                    console.log(artistNameEl.current[index])
                                                    console.log(popular[currentSongIndex].name)
                                                    // musicBoxEl.current[0].style.display = 'none'
                                                    // musicBoxEl.current[0].style.scale = '0'
                                                    console.log(isPlaying)
                                                        
                                                    console.log(playerAudio7Ref.current.currentSrc)
                                                    console.log(playerImage7Ref.current.outerHTML)
                                                    console.log(imageEl)
                                                    console.log(playerName7Ref.current.innerHTML)
                                                    console.log(playerArtist7Ref.current.innerHTML)
                                                    isPlaying === true ? setIsPlaying(isPlaying) : setIsPlaying(!isPlaying)
                                                    playerAudio7Ref.current.src = audioEl.current[index].src
                                                    playerImage7Ref.current.src = imageEl.current[index].src
                                                    // audioSignEl.current[index] ? audioSignEl.current[index].style.display = 'block' : audioSignEl.current[index].style.display = 'none'
                                                    playerName7Ref.current.innerHTML = musicNameEl.current[index].innerHTML
                                                    playerArtist7Ref.current.innerHTML = artistNameEl.current[index].innerHTML
                                                 }} 
                                                 className='flex flex-col relative text-left my-3 mx-auto cursor-pointer'>

                                                <audio 
                                                    src={release.audio} 
                                                    ref={audioToEl}
                                                    onTimeUpdate={getCurrDuration}
                                                    onLoadedData={(e) => {
                                                    setDuration(e.currentTarget.duration.toFixed(2))
                                                    }}
                                                ></audio>
                                                <img className='w-[200px] h-[150px] rounded-[20px]' title={release.img}  ref={imageToEl} src={release.img} alt="artist"/>
                                                <h2 ref={musicNameToEl} className='text-white text-[1.1em]'>{release.name}</h2>
                                                    <h5 ref={artistNameToEl} className='text-white text-[.8em]'>{release.artist}</h5>
                                                </div>
                                                    <div ref={audioSignToEl} className='w-max p-2 bg-[#F9D175] absolute mt-4 mr-4 rounded-[5px] top-0 left-0 hidden'><FaVolumeUp/></div>
                                
                                        </>
                                        </SwiperSlide>
                                    )
                                })}
                                </Swiper>


                <Swiper  
                    spaceBetween={20} 
                    slidesPerView={4}

                    className='hidden lg:hidden md:block'
                    >
                            {popular.map((release, index) => {
                                    return (
                                        <SwiperSlide>
                                        <> 
                                               <div key={release.name} ref={musicBoxToEl} onClick={() => {
                                                    console.log(imageEl.current)
                                                    console.log(audioEl.current[index])
                                                    console.log(musicNameEl.current[index])
                                                    console.log(artistNameEl.current[index])
                                                    console.log(popular[currentSongIndex].name)
                                                    // musicBoxEl.current[0].style.display = 'none'
                                                    // musicBoxEl.current[0].style.scale = '0'
                                                    console.log(isPlaying)
                                                        
                                                    console.log(playerAudio7Ref.current.currentSrc)
                                                    console.log(playerImage7Ref.current.outerHTML)
                                                    console.log(imageEl)
                                                    console.log(playerName7Ref.current.innerHTML)
                                                    console.log(playerArtist7Ref.current.innerHTML)
                                                    isPlaying === true ? setIsPlaying(isPlaying) : setIsPlaying(!isPlaying)
                                                    playerAudio7Ref.current.src = audioEl.current[index].src
                                                    playerImage7Ref.current.src = imageEl.current[index].src
                                                    // audioSignEl.current[index] ? audioSignEl.current[index].style.display = 'block' : audioSignEl.current[index].style.display = 'none'
                                                    playerName7Ref.current.innerHTML = musicNameEl.current[index].innerHTML
                                                    playerArtist7Ref.current.innerHTML = artistNameEl.current[index].innerHTML
                                                 }} 
                                                 className='flex flex-col relative text-left my-3 mx-auto cursor-pointer'>

                                                <audio 
                                                    src={release.audio} 
                                                    ref={audioToEl}
                                                    onTimeUpdate={getCurrDuration}
                                                    onLoadedData={(e) => {
                                                    setDuration(e.currentTarget.duration.toFixed(2))
                                                    }}
                                                ></audio>
                                                <img className='w-[200px] h-[150px] rounded-[20px]' title={release.img}  ref={imageToEl} src={release.img} alt="artist"/>
                                                <h2 ref={musicNameToEl} className='text-white text-[1.1em]'>{release.name}</h2>
                                                    <h5 ref={artistNameToEl} className='text-white text-[.8em]'>{release.artist}</h5>
                                                </div>
                                                    <div ref={audioSignToEl} className='w-max p-2 bg-[#F9D175] absolute mt-4 mr-4 rounded-[5px] top-0 left-0 hidden'><FaVolumeUp/></div>
                                
                                        </>
                                        </SwiperSlide>
                                    )
                                })}
                                </Swiper>


                  <Swiper  
                    spaceBetween={10} 
                    slidesPerView={1.8}

                    className='block lg:hidden md:hidden'
                    >
                            {popular.map((release, index) => {
                                    return (
                                        <SwiperSlide>
                                        <> 
                                               <div key={release.name} ref={musicBoxToEl} onClick={() => {
                                                    console.log(imageEl.current)
                                                    console.log(audioEl.current[index])
                                                    console.log(musicNameEl.current[index])
                                                    console.log(artistNameEl.current[index])
                                                    console.log(popular[currentSongIndex].name)
                                                    // musicBoxEl.current[0].style.display = 'none'
                                                    // musicBoxEl.current[0].style.scale = '0'
                                                    console.log(isPlaying)
                                                        
                                                    console.log(playerAudio7Ref.current.currentSrc)
                                                    console.log(playerImage7Ref.current.outerHTML)
                                                    console.log(imageEl)
                                                    console.log(playerName7Ref.current.innerHTML)
                                                    console.log(playerArtist7Ref.current.innerHTML)
                                                    isPlaying === true ? setIsPlaying(isPlaying) : setIsPlaying(!isPlaying)
                                                    playerAudio7Ref.current.src = audioEl.current[index].src
                                                    playerImage7Ref.current.src = imageEl.current[index].src
                                                    // audioSignEl.current[index] ? audioSignEl.current[index].style.display = 'block' : audioSignEl.current[index].style.display = 'none'
                                                    playerName7Ref.current.innerHTML = musicNameEl.current[index].innerHTML
                                                    playerArtist7Ref.current.innerHTML = artistNameEl.current[index].innerHTML
                                                 }} 
                                                 className='flex flex-col relative text-left my-3 mx-auto cursor-pointer'>

                                                <audio 
                                                    src={release.audio} 
                                                    ref={audioToEl}
                                                    onTimeUpdate={getCurrDuration}
                                                    onLoadedData={(e) => {
                                                    setDuration(e.currentTarget.duration.toFixed(2))
                                                    }}
                                                ></audio>
                                                <img className='w-[150px] h-[150px] rounded-[20px]' title={release.img}  ref={imageToEl} src={release.img} alt="artist"/>
                                                <h2 ref={musicNameToEl} className='text-white text-[1.1em]'>{release.name}</h2>
                                                    <h5 ref={artistNameToEl} className='text-white text-[.8em]'>{release.artist}</h5>
                                                </div>
                                                    <div ref={audioSignToEl} className='w-max p-2 bg-[#F9D175] absolute mt-4 mr-4 rounded-[5px] top-0 left-0 hidden'><FaVolumeUp/></div>
                                
                                        </>
                                        </SwiperSlide>
                                    )
                                })}
                                </Swiper>
                </div>
            </div>

                    
        </>
    )
}

export default Popular;