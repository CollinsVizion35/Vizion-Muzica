import { useEffect, useState, createContext, useContext } from 'react';
export const AppContext = createContext();

export const AppContextPage = ({children}) => {

    const [token, setToken] = useState("")
    const [releases, setReleases] = useState([])
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    // const getToken = () => {
    //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    //     let token = urlParams.get('access_token');
    // }

    useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      // getToken()


      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }

    
  return (
    <>
        <AppContext.Provider 
            value={{ 
              token,
              setToken,
              releases, 
              setReleases,
              currentSongIndex, 
              setCurrentSongIndex,
              nextSongIndex, 
              setNextSongIndex,
              }}>
            {children}
        </AppContext.Provider>

    </>
  )
}

export const AppPass = () => {
    return useContext(AppContext);
}