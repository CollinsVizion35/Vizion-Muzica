import React, { useRef, useState } from "react";

import homeIcon from '../imgs/Home.svg';
import collectionIcon from '../imgs/playlist.svg';
import radioIcon from '../imgs/radio.svg';
import musicVidIcon from '../imgs/videos.svg';
import profileIcon from '../imgs/profile.svg';
import logoutIcon from '../imgs/Logout.svg';

import Logout from "./logout";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const options = [
    {
        id: 0,
        img: homeIcon,
        text: "Home",
        navigate: '/dashboard-home'
    },
    {
        id: 1,
        img: collectionIcon,
        text: "My Collections",
        navigate: '/dashboard-categories'
    },
    {
        id: 2,
        img: radioIcon,
        text: "Radio",
        navigate: '/dashboard-my-questions'
    },
    {
        id: 3,
        img: musicVidIcon,
        text: "Music Videos",
        navigate: '/MyInfo'
    },
    {
        id: 4,
        img: profileIcon,
        text: "Profile",
        navigate: '/dashboard-settings'
    },
    {
        id: 5,
        img: logoutIcon,
        text: "Logout",
        navigate: '/dashboard-settings'
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
  return (
    // Pass on our props
    <>
    <div showSideBar={showSideBar} left {...props} className='bg-[#1D2123] text-white'>
            {options.map((option) => {
                return (
                    <> 
                    <div ref={tabRef} className="flex flex-col my-8 bg-#1A1E1F">
                            <Link className="flex justify-start  items-center pl-10" to={option.navigate}>
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
    
    </>
  );
};

export default Sidebar;