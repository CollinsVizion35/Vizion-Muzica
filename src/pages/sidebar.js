import React, { useRef, useState } from "react";

import homeIcon from '../imgs/Home.svg';
import collectionIcon from '../imgs/playlist.svg';
import radioIcon from '../imgs/radio.svg';
import musicVidIcon from '../imgs/videos.svg';
import profileIcon from '../imgs/profile.svg';
import logoutIcon from '../imgs/Logout.svg';
import logo from '../imgs/logo.svg';

import {TbMenu, TbSearch} from 'react-icons/tb/index'

import Logout from "./logout";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const options = [
    {
        id: 0,
        img: homeIcon,
        text: "Home",
        navigate: '/home'
    },
    {
        id: 1,
        img: collectionIcon,
        text: "My Collections",
        navigate: '/collection'
    },
    {
        id: 2,
        img: radioIcon,
        text: "Radio",
        navigate: '/radio'
    },
    {
        id: 3,
        img: musicVidIcon,
        text: "Music Videos",
        navigate: '/musicvideos'
    },
    {
        id: 4,
        img: profileIcon,
        text: "Profile",
        navigate: '/profile'
    },
    {
        id: 5,
        img: logoutIcon,
        text: "Logout",
        navigate: '/'
    }
];

const Sidebar = ({props}) => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showSideBar, setShowSideBar] = useState(true);
    const tabRef = useRef();

    const handleLogout = () => {
        setShowLogoutModal(true);
        setShowSideBar(false);
    }

    const handleShowSideBar = () => {
        setShowSideBar(false);
    }

    const [isActive, setIsActive] = useState(false);

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

            <button className="w-[10vw] float-right">
                <TbSearch/>
            </button>
        </div>
    <div showSideBar={showSideBar} ref={tabRef} left {...props} className={!isActive ? 'hidden' : 'block absolute top-0 left-0 w-[100vw] mt-[4em] bg-[#1D2123] text-white z-[999999]'}>
            {options.map((option) => {
                return (
                    <> 
                    <div className="flex flex-col my-8 pl-4 bg-#1A1E1F">
                            <Link className="flex justify-start  items-center pl-2" to={option.navigate}>
                                <img className="mr-5" src={option.img} alt="dashboard tab icon" />
                                <p onClick={handleShowSideBar} className='text-base'>{option.text}</p>
                            </Link>
                        </div> 
                    </>
                )
            })}
            <div className="flex justify-center cursor-pointer mt-36">
                <div onClick={handleLogout} className="flex justify-start text-center pl-10">
                    <img className="mr-5" src={logoutIcon} alt="log out icon"/>
                    <p className="text-[#7772D3] font-Poppins text-base">Logout</p>
                </div>
                {showLogoutModal === true && <Logout showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal}/>}
            </div>
    </div>
    
    </div>
  );
};

export default Sidebar;