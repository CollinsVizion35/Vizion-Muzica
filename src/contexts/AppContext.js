import { useEffect, useState, createContext, useContext, useRef } from 'react';

import burna from '../imgs/burna.jpg'
import chinwo from '../imgs/chinwo.jpg'
import tt from '../imgs/tomorrowsTunes.jpg'

export const AppContext = createContext();


const releases = [
  {
      id: 0,
      artist: 'eminem',
      img: tt,
      name: 'Book Of Rhymes',
      audio: 'Eminem - Book of Rhymes [Lyrics].mp3'
  }, {
      id: 0,
      artist: 'KendrickLamar',
      img: chinwo,
      name: 'Savior',
      audio: 'Kendrick_Lamar_Baby_Keem_Sam_Dew_Savior_(thinkNews.com.ng).mp3'
  }, {
      id: 0,
      artist: 'P-Square',
      img: burna,
      name: 'Beautiful onyinye',
      audio: 'P SQUARED -BEUTIFUL ONYINYE.mp3'
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