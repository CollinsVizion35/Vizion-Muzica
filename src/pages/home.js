import React, { useEffect, useState } from 'react';
import SearchArtist from './searchArtist';
import { AppPass } from '../contexts/AppContext';
import Player from './player';

import logo from '../imgs/logo.svg';


import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import '../index.css';
import NewReleases from './newRelease';
import Popular from './popular';
import Header from './header'
import TopChart from './topCharts';
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
        color: '#FACD66'
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
        color: '#52514E'
    },
    {
        id: 3,
        img: HiFilm,
        navigate: '/musicvideos',
        color: '#52514E'
    }
];




const Home = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const {
        releases, 
        currentSongIndex, 
        setCurrentSongIndex,
        nextSongIndex, } = AppPass()
    
    const [canShow , setCanShow] = useState(false)

    useEffect(() => {
        document.title = 'ViziMuz';
    }, []);

    useEffect(()=>{
        const timer = setTimeout( () => setCanShow(true) , 3000)
        return () => clearTimeout(timer);
      })

    return (
        <>
            <div className='bg-[#1D2123] text-white flex flex-col h-max overflow-y-auto'>
            <div className='p-4 w-[40vw] pb-8 hidden lg:flex flex-row justify-between'>
                <img src={logo} alt='home icon'/>

                <SearchArtist/>
            </div>


            <div className='bg-[#1D2123] text-white flex flex-col lg:flex-row'>
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

            

            <div className='Body w-[9/10] mb-[8em]'>
                <div className='flex flex-col lg:flex-row'>
                    <Header/>
                    <TopChart/>
                </div>

                <div className='flex flex-col'>
                    <NewReleases/>
                    <Popular/>
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

export default Home;