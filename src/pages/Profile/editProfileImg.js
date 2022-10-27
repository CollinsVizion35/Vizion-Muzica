import React, { useState, useEffect, useContext } from 'react';
import { AppPass } from '../../contexts/AppContext';
import { UseAuth } from '../../contexts/AuthContext';
import defaultImg from '../../imgs/No-Photo-Available.jpg'
import { onSnapshot, collection, doc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import ProfileEditBtn from './editProfileBtn';

const ProfileImg = () => {
  const { user, uploadPicture } = UseAuth();
  const firstNameInput = user?.displayName;
  const emailInput = user?.email;
  // const phoneNumberInput = user?.phoneNumber;
  // const certificateInput = user?.certificationNumber;

  const {phone, setPhone, fName, setFName, lName, setLName, eMail, setEMail} = AppPass();

  const [firstName, setFirstName] = useState(firstNameInput);
  const [lastName, setLastName] = useState('');
  const [newPhone, setNewPhone] = useState(() => {
    // getting stored value
    const saved = sessionStorage.getItem("phone");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [newFName, setNewFName] = useState(() => {
    // getting stored value
    const saved = sessionStorage.getItem("fname");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [newLName, setNewLName] = useState(() => {
    // getting stored value
    const saved = sessionStorage.getItem("lname");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [newEMail, setNewEMail] = useState(() => {
    // getting stored value
    const saved = sessionStorage.getItem("email");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [usersInfo, setUsersInfo] = useState([])
useEffect(() => {
  
  async function fetchData() {
    const q = query(collection(db, "Users"), where("user_id", "==", user.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    setUsersInfo(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    });
  }
  fetchData(); 
}, [])

  

  
  
      useEffect(() => {
        sessionStorage.setItem('phone', JSON.stringify(newPhone));
        sessionStorage.setItem('fname', JSON.stringify(newFName));
        sessionStorage.setItem('lname', JSON.stringify(newLName));
        sessionStorage.setItem('email', JSON.stringify(newEMail));
       }, [newPhone, newFName, newLName, newEMail]);

      

  // // const [photoURL, setPhotoURL] = useState(defaultImg);
  // const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  

  // console.log(user.photoURL);

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setPhoto(e.target.files[0]);
  //   }
  // }

  const resetInput = (e) => {
    e.target.value = "";
  }

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


  // useEffect(() => {
  //   if (user?.photoURL) {
  //     setPhotoURL(user.photoURL);
  //   }
  // }, [user]);

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
              <label htmlFor='select-img' className='cursor-pointer text-[#95B4B3]'>Upload A Profile Pic</label>
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

        <form>
          <div className='flex flex-col md:flex-row pl-8  pt-20'>
            <div className='mr-10'>
              <label className='mb-3 text-sm text-[#95B4B3] font-bold'>FIRST NAME</label><br/>
              <input type='text' placeholder='first name' onChange={(e) => setNewFName(e.target.value)} className='rounded-md w-[18rem] h-[2.5rem] p-2 text-sm border border-[#95B4B3] text-[#95B4B3]'/>
            </div>
            <div>
              <label className='mb-3 text-sm text-[#95B4B3] font-bold'>LAST NAME</label><br/>
              <input type='text' placeholder='last name' onChange={(e) => setNewLName(e.target.value)} className='rounded-md w-[18rem] h-[2.5rem] p-2 text-sm border border-[#95B4B3] text-[#95B4B3]' />
            </div>
          </div>
          <div className='flex flex-col md:flex-row pl-8'>
            <div className='mr-10'>
              <label className='mb-3 text-sm text-[#95B4B3] font-bold'>PHONE NUMBER</label><br/>
              <input type='phone' placeholder='090999999' onChange={(e) => setNewPhone(e.target.value)} className='bg-[##D9D9D921] rounded-md w-[18rem] h-[2.5rem] p-2 text-sm border border-[#95B4B3] text-[#95B4B3]' />
            </div>
            <div>
              <label className='mb-3 text-sm text-[#95B4B3] font-bold'>EMAIL ADDRESS</label><br/>
              <input type='email' placeholder='yournewEmail@gmail.com' onChange={(e) => setNewEMail(e.target.value)} className='rounded-md w-[18rem] h-[2.5rem] p-2 text-sm border border-[#95B4B3] text-[#95B4B3]' />
            </div>
          </div>

        </form>
        <div>
          <ProfileEditBtn 
          // photo={photo} 
          setLoading={setLoading} firstName={firstName} firstNameInput={firstNameInput}  lastName={lastName} newPhone={newPhone} newFName={newFName} newLName={newLName} newEMail={newEMail}/>
        </div>
    </>
  )
}

export default ProfileImg;
