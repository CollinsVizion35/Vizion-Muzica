import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppPass } from '../contexts/AppContext';
import { onSnapshot, collection, doc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

import { UseAuth } from '../contexts/AuthContext';

const ProfileEditBtn = ({ firstName, firstNameInput, setFirstName, lastName, newPhone, newFName, newLName, newEMail, email, photo, setLoading }) => {
  // const split = firstName.split(' ');
  // console.log(split);
  // const [first, last] = split;
  // console.log(last);
    const navigate = useNavigate();
    // const save1Ref = useRef()
    const save2Ref = useRef();
  

  const { user, uploadPicture } = UseAuth();

  const {phone, fName, lName, eMail, setPhone, setFName, setLName, setEMail} = AppPass();

  const data = {
    email: eMail,
    phone_number: phone,
    name: fName + ' ' + lName,
    user_id: user.uid,
    lastname: lName,
    firstname: fName
  }

  console.log(data);
  const docsRef = doc(db, 'Users', 'A38XlKHzP4z4NUnDdlYp');

  const handleEditBtn = async () => {
    
    try {
      await updateDoc(docsRef, data)
      .then(docsRef => console.log('To confirm Click save again'));
      uploadPicture(photo, user, setLoading);
      
    } catch (error) {
      console.log(error);
    }
    save2Ref.current.style.display = 'flex'
  }

  const handleEditBtn2 = async () => {
    
    try {
      await updateDoc(docsRef, data)
      .then(docsRef => console.log('User details have been updated successfully'));
      uploadPicture(photo, user, setLoading);
      
      alert('User details have been updated successfully');
    } catch (error) {
      console.log(error);
    }
    navigate('/profile');

  }

  const handleEditBtn3 =  () => {
    save2Ref.current.style.display = 'none'
  }

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
 
 
  // save update of profile info

  const handleContext = () => {
    setPhone(newPhone);
    setFName(newFName);
    setLName(newLName);
    setEMail(newEMail);
  }


  useEffect(() => {
    save2Ref.current.style.display = 'none'
  }, [])
  


    // const handleEditBtn = () => {
    //     alert('Your profile has been edited');
    // }

    
  return (
    <>
    {/* <div className='hidden'>
    {usersInfo.map((info, index) => {
        return (
          <div key={index}>
            <h2>email: {info.email}</h2>
            <h2>name: {info.name}</h2>
            <h2>phone: {info.phone_number}</h2>
          </div>
        );
      })}

    </div> */}
        <button onClick={() => {handleEditBtn(); handleContext()}} className='w-[19.6875rem] bg-[#95B4B3] rounded-lg py-2 text-white my-5'>Save</button>
        
        {/* style={{display: "none"}} */}

        <div ref={save2Ref} className='absolute lg:top-[37.5%] lg:left-[35%] top-[0%] left-0 bottom-[0%] right-0 lg:w-[19.6875rem] bg-[#95B4B3] rounded-[30px] py-2 text-white lg:my-5 flex justify-center items-center text-center flex-col'>
          <h1 className='w-[19.6875rem] bg-[#95B4B3] rounded-lg py-2 text-white my-5'>Are you sure you want to save new Informations</h1>
          <div className='flex flex-row'>
          <button onClick={handleEditBtn3} className='w-[5em] mr-2 text-[#95B4B3] hover:bg-[#95B4B3] hover:border hover:border-white hover:text-white rounded-lg py-2 bg-white my-5  justify-center items-center text-center'>No</button>
          <button onClick={() => {handleEditBtn2(); handleContext()}} className='w-[5em] ml-2 text-[#95B4B3] hover:bg-[#95B4B3] hover:border hover:border-white hover:text-white rounded-lg py-2 bg-white my-5  justify-center items-center text-center'>Yes</button>
          </div>
        </div>
    </>
  )
}

export default ProfileEditBtn;