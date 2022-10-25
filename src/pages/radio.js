import React, {useState, useEffect} from 'react';
import { RadioBrowserApi } from 'radio-browser-api'
import AudioPlayer from 'react-h5-audio-player'
import "react-h5-audio-player/lib/styles.css"
import notAvailable from '../imgs/No-Photo-Available.jpg'


import logo from '../imgs/logo.svg';


import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import '../index.css';
import LogoutModal from './logoutModal';


import {MdHomeFilled, MdLibraryMusic} from 'react-icons/md/index'
import {RiRadio2Fill, RiLogoutBoxRFill} from 'react-icons/ri/index'
import {HiFilm} from 'react-icons/hi/index'
import {BsFillPersonFill} from 'react-icons/bs/index'



const options = [
    {
        id: 0,
        img: MdHomeFilled,
        navigate: '/home',
        color: '#52514E'
    },
    {
        id: 1,
        img: MdLibraryMusic,
        navigate: '/collection',
        color: '#52514E'
    },
    {
        id: 2,
        img: RiRadio2Fill,
        navigate: '/radio',
        color: '#FACD66'
    },
    {
        id: 3,
        img: HiFilm,
        navigate: '/musicvideos',
        color: '#52514E'
    }
];

function Radio() {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [stations, setStations] = useState()
    const [stationFilter, setStationFilter] = useState('all')

    useEffect(() => {
        document.title = 'Radio - ViziMuz';
    }, []);

    useEffect(() => {
      setupApi(stationFilter).then(data => {
        setStations(data);
      })
    }, [stationFilter])
    

    const setupApi = async (stationFilter) => {
        const api = new RadioBrowserApi(fetch.bind(window), "VizMuz Radio")

        const stations = await api.searchStations({
            language: "english",
            tag: stationFilter,
            limit: 30
        })

        return stations;
    }

    const filters = [
        "all",
        "afrobeat",
        "classical",
        "country",
        "dance",
        "disco",
        "house",
        "jazz",
        "pop",
        "rap",
        "retro",
        "rock",
    ]

    const setDefaultSrc = (e) => {
        e.target.src = notAvailable
    }


  return (
    <>
    <div className='bg-[#1D2123] text-white flex flex-col min-h-screen'>
            <div className='p-4 w-[40vw] pb-8 hidden lg:flex flex-row justify-between'>
                <img src={logo} alt='home icon'/>
            </div>


            <div className='bg-[#1D2123] text-white flex lg:flex-row flex-col'>
            <div className='sidebar-sm lg:hidden'>
                    <Sidebar  pageWrapId={"page-wrap"} outerContainerId={"App"} />
                </div>

                <div className='sidebar-lg hidden lg:flex flex-col mt-[2em]'>
                    <div className='flex flex-col justify-between bg-[#1A1E1F] mx-4 w-[4vw] rounded-[50px] py-4'>
                        {options.map((option, index) => {
                                return (
                                    <> 
                                        <Link to={option.navigate}>
                                            <div key={option.id} className='flex my-3 w-1/2 mx-auto items-center cursor-pointer'>
                                                <option.img  className='stroke-black mx-auto w-[40px] hover:scale-[1.2]' style={{color: option.color}} />
                                            </div>
                                        </Link>
                                    </>
                                )
                            })}
                    </div>

                    <div className='flex flex-col justify-between mt-3 bg-[#1A1E1F] mx-4 w-[4vw] rounded-[50px] my-4 py-4'>
                        
                                       
                                        <Link to='/profile'>
                                        <div className='flex my-3 w-1/2 mx-auto items-center cursor-pointer'>
                                                <BsFillPersonFill  className='mx-auto w-[40px] hover:scale-[1.2]' style={{color: '#52514E'}} />
                                            </div>
                                        </Link>

                                        <div onClick={() => setShowLogoutModal(true)}  className='flex items-center mx-auto w-1/2 my-3 cursor-pointer'>
                                            <div className='flex cursor-pointer'>
                                                <RiLogoutBoxRFill   className='ml-1 hover:scale-[1.2]' style={{color: '#52514E'}} />
                                            </div>
                                            {showLogoutModal === true && <LogoutModal showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal}/>}
                                        </div>
                                    </div>
                </div>

            

            
            
    <div className='flex flex-col items-center justify-center text-center float-right lg:w-[90vw] bg-[#1D2123] text-white'>
        <div className='text-3xl p-2 lg:mt-[-2em] text-[#FACD66] mr-[10vw]'>
            VizMuz <span className='text-[#95B4B3]'>Radio</span>
        </div>


        <div className="flex lg:flex-row-reverse flex-col justify-around w-full mt-4">
            <div className='lg:flex lg:flex-col grid grid-cols-3 md:grid-cols-6 text-left lg:w-[20vw] lg:fixed right-0 top-0 px-8 mt-[5em]'>
                {filters.map(filter => {
                    return (
                    <button 
                    className={stationFilter === filter ? "p-2 rounded-[20px] border-[2px] border-[#95B4B3] mb-2 hover:bg-[#95B4B3] bg-[#95B4B3]" : "p-2 rounded-[20px] border-[2px] border-[#95B4B3] mb-2 hover:bg-[#95B4B3]"} 
                    onClick={() => setStationFilter(filter)}>
                        {filter}
                    </button>
                    )
                })}
            </div>
            <div className='stations grid grid-cols-1 md:grid-cols-2 lg:mt-[0em] mt-[2em] lg:mr-[10vw] ml-[2.5vw]'>
                {stations && stations.map((station, radio) => {
                    return (
                        <div className='stations mb-4 lg:mr-4 bg-[#95B4B3] rounded-[20px] lg:max-w-[32.5vw] md:max-w-[47.5vw] md:min-w-[47.5vw] max-w-[95vw] lg:min-w-[32.5vw] min-w-[95vw]' key={radio}>
                            <div className=' flex flex-col'>
                                <img className='w-[50px] h-[50px] rounded-[20px]' src={station.favicon} alt="station logo" onError={setDefaultSrc}/>
                            
                                <div>{station.name}</div>
                            </div>

                            <AudioPlayer 
                            src={station.urlResolved}
                            showJumpControls = {false}
                            layout = "horizontal"
                            customProgressBarSection={[]}
                            customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                            autoPlayAfterSrcChange={false}

                            className=' rounded-[20px]'
                            />

                        </div>
                    )
                })}
            </div>
        </div>
    </div>
            </div>
        </div>
    </>
  )
}

export default Radio;