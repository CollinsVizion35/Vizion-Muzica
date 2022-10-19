import React, { useEffect, useRef, useState, useContext } from 'react';
import { AppPass } from '../contexts/AppContext';
import { Link, useNavigate } from 'react-router-dom';
// import Otp from './otp-page';
import { auth } from '../firebase';
import { updateProfile, updatePhoneNumber } from 'firebase/auth';
import { UseAuth } from '../contexts/AuthContext';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import SuccessModal from './success-modal';
import ErrorModal from './error-modal';

import {FaEye, FaEyeSlash} from 'react-icons/fa/index'


import homeIcon from '../imgs/Home.svg';
import collectionIcon from '../imgs/playlist.svg';
import radioIcon from '../imgs/radio.svg';
import musicVidIcon from '../imgs/videos.svg';
import profileIcon from '../imgs/profile.svg';
import logoutIcon from '../imgs/Logout.svg';
import logo from '../imgs/logo.svg';


import Sidebar from './sidebar';
import '../index.css';
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

const SignUp = ({isOpen, setIsOpen}) => {

    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("fname");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

    const [email, setEmail] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("email");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

    const [password, setPassword] = useState({
        password: '',
        showPassword: false,
    });

    const [phone_number, setPhone_number] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("phone");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });


      useEffect(() => {
        localStorage.setItem('phone', JSON.stringify(phone_number));
        localStorage.setItem('fname', JSON.stringify(name));
        localStorage.setItem('email', JSON.stringify(email));
       }, [phone_number, name, email]);
     
    
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    const modalSuccessMsgTitle = "Successful";
    const modalSuccessMsgDetails = "Your sign up was successful";
    const modalErrMsgTitle = "Error";
    let modalErrMsgDetails = "Your sign up was not successful.";
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const { createUser } = UseAuth();




    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await createUser(email, password.password);
            setError(false);
            navigate('/profile');
            await addDoc(collection(db, "Users"), { name: nameRef.current.value, phone_number: phoneRef.current.value, email: emailRef.current.value, lastname: nameRef.current.value, firstname: nameRef.current.value });
            storeInformationToDB();
        } catch (e) {
            setError(true);
            modalErrMsgDetails = `Your sign-up was not successful. ${e.message}`;
            console.log(e.message);
        }
    }

    async function storeInformationToDB() {
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                phoneNumber: phone_number
                // phoneNumber: phoneRef.current.value,
                
                
            })
            // await updatePhoneNumber(auth.currentUser, { phoneNumber: phoneRef.current.value });
        } catch (e) {
            console.log(e.message);
        }
        
    }



    useEffect(() => {
        document.title = "Sign Up - ViziMuz";
    }, []);

    setTimeout(() => {
        setIsOpen(false);
    }, 3000);
    

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setPassword({...password, showPassword: !password.showPassword});
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

    const handlePasswordChange = (prop) => (e) => {
        e.preventDefault();
        setPassword({...password, [prop]: e.target.value});
    }

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
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

            <div className='my-auto lg:mt-[-5em] w-full pr-4 overflow-x-hidden h-screen lg:max-w-[1000px] bg-inherit flex items-center mx-auto justify-center'>
                <div className='text-left pt-6 pl-10 font-Poppins'>


                    <h4 className='text-[#95B4B3] font-extrabold text-xl md:text-[1.5rem] leading-[2.25rem] text-left'>Sign up</h4>
                    <p className='text-[#FACD66] font-bold leading-[1.6875rem] text-base md:text-lg'>Welcome back to ViziMuz</p>
                    <form onSubmit={handleSubmit} className='flex flex-col mt-8 text-[#000]'>
                        <label htmlFor='nameInput' className='mt-3 md:mt-6 text-[#95B4B3] text-[.8em] text-base mt-[-1.5em]'>Name</label> <br/>
                        <input id='nameInput' value={name} onChange={(e) => setName(e.target.value)} ref={nameRef} placeholder='Enter your full name' className=' focus:border-0 mt-[-1.5em] focus:border-[#95B4B3] border-2 px-2 mr-6 py-1 rounded-md border-[#95B4B3] w-[90vw] md:w-[19.6875rem] h-[2em] placeholder:text-[rgba(119, 114, 211, 0.5);]'></input><br/>
                        <label htmlFor='phoneNumberInput' className='text-[#95B4B3] text-[.8em] text-base mt-[-1.5em]'>Phone number</label> <br/>
                        <input id='phoneNumberInput' value={phone_number} onChange={(e) => setPhone_number(e.target.value)} ref={phoneRef} placeholder='Enter your phone number' className=' focus:border-0 mt-[-1.5em] focus:border-[#95B4B3] border-2 px-2 mr-6 py-1 rounded-md border-[#95B4B3] w-[90vw] md:w-[19.6875rem] h-[2em] placeholder:text-[rgba(119, 114, 211, 0.5);]'></input><br/>
                        <label htmlFor='emailInput' className='text-[#95B4B3] text-[.8em] text-base mt-[-1.5em]'>Email</label> <br/>
                        <input id='emailInput' value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} placeholder='Enter your email' className=' focus:border-0 mt-[-1.5em] focus:border-[#95B4B3] border-2 px-2 mr-6 py-1 rounded-md border-[#95B4B3] w-[90vw] md:w-[19.6875rem] h-[2em] placeholder:text-[rgba(119, 114, 211, 0.5);]'></input><br/>
                        <label htmlFor='passwordInput' className='text-[#95B4B3] text-[.8em] text-base mt-[-1.5em]'>Password</label><br/>
                        <div className='flex w-[90vw] mr-auto md:w-[19.6875rem]'>
                            <input type={password.showPassword ? "text" : "password"}
                                // value={password}
                                // onChange={handlePasswordChange("password")}
                                id='passwordInput' 
                                ref={passwordRef}
                                onChange={handlePasswordChange('password')}
                                placeholder='Enter your password' 
                                className='focus:border-0 mt-[-1.5em] focus:border-[#95B4B3] border-2 border-r-0 w-3/4 px-2 py-3 rounded-md rounded-tr-none rounded-br-none border-[#95B4B3] h-[2em]'></input>
                            <button 
                                onClick={handleClickShowPassword} 
                                onMouseDown={handleMouseDownPassword}
                                className='w-1/4 border-2 mt-[-1.5em] border-l-0 rounded-md border-[#95B4B3] rounded-bl-none rounded-tl-none'><FaEye className='mx-auto'/></button>
                        </div>
                        <div className='flex justify-between items-center text-center w-[90%] mt-4 text-[#95B4B3] text-center font-bold text-[0.78rem]'>
                            Proceeding means you accept our Terms and Conditions
                        </div>

                        <button onClick={handleButtonClick} type="submit" className='bg-[#95B4B3] rounded-md mt-7 px-auto w-[90%] items-center mb-4 px-12 py-4 text-white w-[19.6875rem]'>
                            Sign up
                        </button>

                        {error === false && <SuccessModal 
                            open={isOpen} 
                            modalSuccessMsgTitle={modalSuccessMsgTitle}
                            modalSuccessMsgDetails={modalSuccessMsgDetails}
                        />}
                        {error === true && <ErrorModal
                             open={isOpen}
                             modalErrMsgTitle={modalErrMsgTitle}
                             modalErrMsgDetails={modalErrMsgDetails}
                        />}
                        
                    </form>
                    <p className='text-sm text-center mr-4 leading-[3.125rem] cursor-pointer text-[#FACD66] text-left font-semibold'>
                        <Link to='/signin'>Already have an account? Login.</Link>
                    </p>
                </div>
            </div>
            </div>
        </div>
        {/* <Otp/> */}
    </>
  )
}

export default SignUp;