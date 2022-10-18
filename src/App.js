import { useEffect, useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { AppContextPage } from './contexts/AppContext';
import PageNotFound from './pages/404';
import { UseAuth } from './contexts/AuthContext';
import Home from './pages/home';
import NewReleases from './pages/newRelease'
import SearchArtist from './pages/searchArtist'
import Welcome from './pages/welcome'
import Player from './pages/popular'
import Header from './pages/header';
import MusicVideos from './pages/musicVideo';
import Radio from './pages/radio';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import EditProfile from './pages/editProfile';
import Profile from './pages/profile';



export const AppContext = createContext();
// export const PhoneContext = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div>
        <AuthContextProvider>
          <AppContextPage>
              <Routes>

                <Route path='/' element={<Welcome/>}/>

                <Route path='/signIn' element={<SignIn isOpen={isOpen} setIsOpen={setIsOpen} />}/>

                <Route path='/signup' element={<SignUp isOpen={isOpen} setIsOpen={setIsOpen} />}/>
                
                <Route path='/profile' element={<Profile/>}/>

                <Route path='/editprofile' element={<EditProfile/>}/>
                
                <Route path='/home' element={<Home/>}/>

                
                <Route path='/player' element={<Player/>}/>

                <Route path='/newRelease' element={<NewReleases/>}/>

                <Route path='/head' element={<Header/>}/>      

                <Route path='/musicvideos' element={<MusicVideos/>}/>    

                <Route path='/radio' element={<Radio/>}/>   

                {/* <Route path='/profile' element={<Pr/>}/>           */}

                <Route path='/searchArtist' element={<SearchArtist/>}/>
                  
                <Route path='*' element={<PageNotFound/>}/>

              </Routes>
          </AppContextPage>
        </AuthContextProvider>
      </div>
  );
}

export default App;
