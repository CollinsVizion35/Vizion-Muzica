import React, { useRef, useState } from "react";

import homeIcon from '../../imgs/Home.svg';
import collectionIcon from '../../imgs/playlist.svg';
import radioIcon from '../../imgs/radio.svg';
import musicVidIcon from '../../imgs/videos.svg';
import profileIcon from '../../imgs/profile.svg';
import logoutIcon from '../../imgs/Logout.svg';
import logo from '../../imgs/logo.svg';

import {TbMenu, TbSearch} from 'react-icons/tb/index'

import Logout from "../SignInUp/logout";
import { Link } from "react-router-dom";
import SearchArtist from "../Home/searchArtist";


import {MdHomeFilled, MdLibraryMusic} from 'react-icons/md/index'
import {RiRadio2Fill, RiLogoutBoxRFill} from 'react-icons/ri/index'
import {HiFilm} from 'react-icons/hi/index'
import {BsFillPersonFill} from 'react-icons/bs/index'

const options = [
    {
        id: 0,
        img: MdHomeFilled,
        text: "Home",
        navigate: '/home'
    },
    {
        id: 1,
        img: MdLibraryMusic,
        text: "My Collections",
        navigate: '/collection'
    },
    {
        id: 2,
        img: RiRadio2Fill,
        text: "Radio",
        navigate: '/radio'
    },
    {
        id: 3,
        img: HiFilm,
        text: "Music Videos",
        navigate: '/musicvideos'
    },
    {
        id: 4,
        img: BsFillPersonFill,
        text: "Profile",
        navigate: '/profile'
    }
];

const Sidebar = ({props}) => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showSideBar, setShowSideBar] = useState(true);
    const tabRef = useRef();
    const searchRef = useRef();

    const handleLogout = () => {
        setShowLogoutModal(true);
        setShowSideBar(false);
    }

    const handleShowSideBar = () => {
        setShowSideBar(false);
    }
    const handleShowSearchBar = event => {
        setIsSearchActive(current => !current);
    }

    const [isActive, setIsActive] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
      };

  return (
    // Pass on our props
    <div className="flex flex-col items-center">
        <div className="flex flex-row items-center justify-between mx-auto h-[3em] p-3 mt-3">
            <div className="w-[85vw] flex flex-row items-center">
                <button onClick={handleClick} className='mr-3'>
                    <TbMenu/>
                </button>
                <img src={logo} alt='home icon'/>
            </div>

            <button onClick={handleShowSearchBar} className="w-[10vw] float-right">
                <TbSearch/>
            </button>
        </div>

        <div  ref={searchRef} className={!isSearchActive ? 'hidden' : 'block x-[999999999999]'}>
            <SearchArtist/>
        </div>
    <div showSideBar={showSideBar} ref={tabRef} left {...props} className={!isActive ? 'hidden' : 'block absolute top-0 left-0 w-[100vw] h-screen mt-[4em] bg-[#1D2123] text-white z-[999999]'}>
            {options.map((option) => {
                return (
                    <> 
                    <div className="flex flex-col my-8 pl-4">
                            <Link className="flex justify-start  items-center pl-2" to={option.navigate}>
                            <option.img className="mr-5"/>
                                <p onClick={handleShowSideBar} className='text-base'>{option.text}</p>
                            </Link>
                        </div> 
                    </>
                )
            })}
            <div className="flex pl-4 cursor-pointer mt-8">
                <div onClick={handleLogout} className="flex justify-start text-center pl-2">
                    <RiLogoutBoxRFill className="mr-5"/>
                    <p className=" font-Poppins text-base">Logout</p>
                </div>
                {showLogoutModal === true && <Logout showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal}/>}
            </div>
    </div>
    
    </div>
  );
};

export default Sidebar;