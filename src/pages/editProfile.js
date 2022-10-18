import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import homeIcon from '../imgs/Home.svg';
import collectionIcon from '../imgs/playlist.svg';
import radioIcon from '../imgs/radio.svg';
import musicVidIcon from '../imgs/videos.svg';
import profileIcon from '../imgs/profile.svg';
import logoutIcon from '../imgs/Logout.svg';
import logo from '../imgs/logo.svg';


import Sidebar from './sidebar';
import '../index.css';
import { onSnapshot, collection, doc } from 'firebase/firestore';
import { db } from '../firebase';
import ProfileImg from './editProfileImg';

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


const EditProfile = () => {
    
    const [searchInput, setSearchInput] = useState('');
    const [isHarmburgerClicked, setIsHarmburgerClicked] = useState(false);

    const navigate = useNavigate();

    const displaySidebar = () => {
        setIsHarmburgerClicked(true);
    }


    useEffect(() => {
        document.title = 'My Profile';
    }, []);


  return (
    <>
    <div className='bg-[#1D2123] text-white flex flex-col min-h-screen'>
    <div className='p-4 w-[40vw] pb-8 hidden lg:flex flex-row justify-between'>
        <img src={logo} alt='home icon'/>
    </div>


    <div className='bg-[#1D2123] text-white flex flex-row'>
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

            <div className='flex flex-col justify-between bg-[#1A1E1F] mx-4 rounded-[50px] my-4 py-4'>
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

                <div className='flex items-center mx-auto'>
                    <div className='w-full text-left py-8 px-12 md:px-14'>
                        <h2 className='font-Poppins text-[#95B4B3] text-2xl font-bold hidden lg:block'>Edit Info</h2>
                        <div className='flex flex-col justify-center items-center'>
                            <ProfileImg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}



export default EditProfile;