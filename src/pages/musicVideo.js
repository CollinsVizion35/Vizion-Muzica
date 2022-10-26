import React, { useState, useEffect } from 'react';


import logo from '../imgs/logo.svg';


import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import '../index.css';
import MusicVideoSearch from './musicVideoSearch';
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
        color: '#52514E'
    },
    {
        id: 3,
        img: HiFilm,
        navigate: '/musicvideos',
        color: '#FACD66'
    }
];


const MusicVideos = () => {
    
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    useEffect(() => {
        document.title = 'Music Videos - ViziMuz';
    }, []);


    return (
        <>
        <div className='bg-[#1D2123] text-white flex flex-col min-h-screen'>
            <div className='p-4 w-[40vw] pb-8 hidden lg:flex flex-row justify-between'>
                <img src={logo} alt='home icon'/>
            </div>


            <div className='bg-[#1D2123] text-white flex  lg:flex-row flex-col'>
            <div className='sidebar-sm lg:hidden'>
                    <Sidebar  pageWrapId={"page-wrap"} outerContainerId={"App"} />
                </div>

                <div className='sidebar-lg fixed hidden lg:flex flex-col mt-[2em]'>
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

            

            <div className='Body lg:w-[9/10] lg:mt-[-4em] lg:ml-[5vw] pl-8'>
                <MusicVideoSearch/>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default MusicVideos;