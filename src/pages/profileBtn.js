import React, { useState, useEffect, useContext } from 'react';
import { AppPass } from '../contexts/AppContext';
import { UseAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { onSnapshot, collection, doc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import defaultImg from '../imgs/No-Photo-Available.jpg'

const InfoProfileImg = () => {
  const { user, uploadPicture } = UseAuth();
  const firstNameInput = user?.displayName;
  const emailInput = user?.email;
  
  const {phone, fName, lName, cert, eMail} = AppPass();

  console.log(eMail);

  const [firstName, setFirstName] = useState(firstNameInput);
  const [lastName, setLastName] = useState('');

  const [usersInfo, setUsersInfo] = useState([])
  useEffect(() => {

    async function fetchData() {
      const q = query(collection(db, "Users"), where("user_id", "==", user.uid));
  
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      console.log(user.uid);
      setUsersInfo(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      });
    }
    fetchData(); 
  }, [])

  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState(() => {
  //   // getting stored value
  //         const saved = sessionStorage.getItem("emailInput");
  //         const initialValue = JSON.parse(saved);
  //         return initialValue || "";
  //       });

  //       useEffect(() => {
  //         sessionStorage.setItem('emailInput', JSON.stringify(emailInput));
  //        }, [emailInput]);
 


  // const [certificationNumber, setCertificationNumber] = useState();
  
  // const [photoURL, setPhotoURL] = useState('../imgs/No-Photo-Available.jpg');
  // const [photo, setPhoto] = useState(null);
  // const [loading, setLoading] = useState(false);
  

  // console.log(user.photoURL);

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setPhoto(e.target.files[0]);
  //   }
  // }

  // useEffect(() => {
  //   if (user?.photoURL) {
  //     setPhotoURL(user.photoURL);
  //   }
  // }, [user]);


  // get Location
const [details, setDetails] = useState(null);

const getUserGeolocationDetails = () => {
  fetch(
    "https://geolocation-db.com/json/50ad4a90-fd5e-11ec-b463-1717be8c9ff1"
  )

    .then(response => response.json())
    .then(data => setDetails(data));
};

useEffect(() => {
  getUserGeolocationDetails()
}, []);

  return (
    <>
        {/* <div className='relative flex flex-col justify-center items-center mb-4'>
            <div className='rounded-[50%] h-10 mb-10 w-fit border flex justify-center items-center'>
              <img className='h-36 w-36 rounded-[50%]' src={photo} alt="Avatar" />
            </div>
            <input type="file" onChange={handleChange} id='select-img' hidden />
            {Object.keys(user).length > 0 ?
              <label htmlFor='select-img' className='cursor-pointer rounded-[50%] w-6 h-6 text-center bg-white absolute bottom-1 left-28 text-sm text-[#6B6B6B]'>
                +
              </label> :
              <label htmlFor='select-img' className='cursor-pointer text-[#95B4B3] text-[.6em]'>Upload A Profile Pic</label>
            }
        </div> */}

        {usersInfo.map((info, index) => {
          return (
        <h1 className='mb-3 text-sm text-[#95B4B3] font-bold'>{info.name}</h1>
        );
      })}
        {details && 
          <h1 className='mb-3 text-sm text-[#95B4B3]'>{`${details.city}, ${details.country_name}`}</h1>
        }

      {usersInfo.map((info, index) => {
          return (
        <form className='mb-8 mt-8 lg:grid-cols-2 lg:grid'>
            
            <div className='pb-2 mr-4 block lg:hidden'>
              <label className='mb-3 text-sm text-[#95B4B3] font-bold'>FULL NAME</label><br/>
              <h1 className='mb-3 text-sm text-[#95B4B3] w-[18rem] lg:bg-[#FAFAFA] lg:border-[#95B4B3] lg:p-2 lg:border lg:rounded-md'>{info.name}</h1>
            </div>

            <div className='pb-2 mr-4 lg:block hidden'>
              <label className='mb-3 text-sm text-[#95B4B3] font-bold'>FIRST NAME</label><br/>
              <h1 className='mb-3 text-sm text-[#95B4B3] w-[18rem] lg:bg-[#FAFAFA] lg:border-[#95B4B3] lg:p-2 lg:border lg:rounded-md'>{info.firstname}</h1>
            </div>

            <div className='pb-2 mr-4 lg:block hidden'>
              <label className='mb-3 text-sm text-[#95B4B3] font-bold'>LAST NAME</label><br/>
              <h1 className='mb-3 text-sm text-[#95B4B3] w-[18rem] lg:bg-[#FAFAFA] lg:border-[#95B4B3] lg:p-2 lg:border lg:rounded-md'>{info.lastname}</h1>
            </div>

            <div className='pb-2'>
              <label className='mb-3 text-sm text-[#95B4B3] font-bold'>PHONE NUMBER</label><br/>
              <h1 className='mb-3 text-sm text-[#95B4B3] w-[18rem] lg:bg-[#FAFAFA] lg:border-[#95B4B3] lg:p-2 lg:border lg:rounded-md'>{info.phone_number}</h1>
            </div>

            <div className='pb-2 mr-4'>
              <label className='mb-3 text-sm text-[#95B4B3] font-bold'>EMAIL ADDRESS</label><br/>
              <h1 className='mb-3 text-sm text-[#95B4B3] w-[18rem] lg:bg-[#FAFAFA] lg:border-[#95B4B3] lg:p-2 lg:border lg:rounded-md'>{info.email}</h1>
            </div>

        </form>
        );
      })}
        <Link to='/editprofile'>
            <button className='bg-[#95B4B3] text-white rounded-lg p-2'>Edit Profile</button>
        </Link>
    </>
  )
}

export default InfoProfileImg;
