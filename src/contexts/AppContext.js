import { useEffect, useState, createContext, useContext, useRef } from 'react';

import otilo from '../imgs/poco.jpeg'
import mMWTV from '../imgs/asake.jpeg'
import rush from '../imgs/ayra-starr.jpg'
import remaRaves from '../imgs/Rema-Rave-Roses.jpeg'
import breezy from '../imgs/Chris-Brown-Call-me-everyday.jpg'
import pSquare from '../imgs/p-square.jpeg'
import coughKizz from '../imgs/Kizz-Daniel-Cough.jpg'
import blaqUni from '../imgs/Blaqbonez-Back-To-Uni.jpeg'
import PheelzElec from '../imgs/electricity.png'


export const AppContext = createContext();


const releases = [
  {
      id: 0,
      artist: 'Poco Lee Ft Hotkid',
      img: otilo,
      name: 'Otilo',
      audio: 'Poco_Lee_-_Otilo_Izz_Gone_feat_Hotkid__@BaseNaija.com.mp3'
  }, {
      id: 1,
      artist: 'Blaqbonez',
      img: blaqUni,
      name: 'Back in Uni',
      audio: 'Blaqbonez-JAE5-Back-In-Uni_@BaseNaija.com_.mp3'
  }, {
      id: 2,
      artist: 'Asake',
      img: mMWTV,
      name: 'Organise',
      audio: 'Asake_-_Organise_@BaseNaija.com.mp3'
  }, {
    id: 3,
    artist: 'Kizz Daniel',
    img: coughKizz,
    name: 'Cough (Odo)',
    audio: 'Kizz_Daniel_-_Cough_Odo__@BaseNaija.com.mp3'
}, {
  id: 4,
  artist: 'Asake',
  img: mMWTV,
  name: 'Dull',
  audio: 'Asake_-_Dull_@BaseNaija.com.mp3'
}, {
  id: 5,
  artist: 'Ayra Starr',
  img: rush,
  name: 'Rush',
  audio: 'Ayra_Starr_-_Rush_@BaseNaija.com.mp3'
}, {
  id: 6,
  artist: 'Pheelz Ft Davido',
  img: PheelzElec,
  name: 'Electricity',
  audio: 'Pheelz_-_Electricity_feat_Davido__@BaseNaija.com.mp3'
}, {
  id: 7,
  artist: 'Chris Brown Ft Wizkid',
  img: breezy,
  name: 'Call Me Everyday',
  audio: 'Chris_Brown_-_Call_Me_Everyday_feat_Wizkid__@BaseNaija.com.mp3'
}, {
  id: 8,
  artist: 'Rema',
  img: remaRaves,
  name: 'Are You There',
  audio: 'Rema_-_Are_You_There__@BaseNaija.com.mp3'
}, {
  id: 9,
  artist: 'P-Square',
  img: pSquare,
  name: 'Ihe Geme',
  audio: 'P-Square_-_Jaiye_Ihe_Geme__@BaseNaija.com.mp3'
}, 
]

export const AppContextPage = ({children}) => {

    const [token, setToken] = useState("")
    // const [releases, setReleases] = useState([])
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [volume, setVolume ] = useState('1')


    const [phone, setPhone] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("phone");
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    });
    const [cert, setCert] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("expertcert");
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    });
    const [fName, setFName] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("fname");
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    });
    const [lName, setLName] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("lname");
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    });
    const [eMail, setEMail] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("email");
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    });
  
  
    useEffect(() => {
     localStorage.setItem('phone', JSON.stringify(phone));
    //  localStorage.setItem('cert', JSON.stringify(cert));
     localStorage.setItem('fname', JSON.stringify(fName));
     localStorage.setItem('lname', JSON.stringify(lName));
     localStorage.setItem('email', JSON.stringify(eMail));
    }, [phone, fName, lName, eMail]);

    // const getToken = () => {
    //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    //     let token = urlParams.get('access_token');
    // }

    useEffect(() => {
      const hash = window.location.hash
      let token = window.sessionStorage.getItem("token")

      // getToken()


      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.sessionStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  const logout = () => {
      setToken("")
      window.sessionStorage.removeItem("token")
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  const audioEl = useRef(null);

  const playerAudioRef = useRef(null)
  const playerImageRef = useRef(null)
  const playerNameRef = useRef(null)
  const playerArtistRef = useRef(null)
    
  return (
    <>
        <AppContext.Provider 
            value={{
              phone, 
              setPhone, 
              cert, 
              setCert, 
              fName, 
              setFName, 
              lName, 
              setLName, 
              eMail, 
              setEMail, 
              token,
              setToken,
              releases, 
              currentSongIndex, 
              setCurrentSongIndex,
              nextSongIndex, 
              setNextSongIndex,
              isPlaying, 
              setIsPlaying,
              duration, 
              setDuration,
              currentTime, 
              setCurrentTime,
              percentage, 
              setPercentage,
              volume, 
              setVolume,
              getCurrDuration,
              audioEl,
              playerAudioRef,
              playerImageRef,
              playerNameRef,
              playerArtistRef
              }}>
            {children}
        </AppContext.Provider>

    </>
  )
}

export const AppPass = () => {
    return useContext(AppContext);
}