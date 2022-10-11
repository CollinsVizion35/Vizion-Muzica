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
                
                <Route path='/home' element={<Home/>}/>

                
                <Route path='/player' element={<Player/>}/>

                <Route path='/newRelease' element={<NewReleases/>}/>

                <Route path='/searchArtist' element={<SearchArtist/>}/>
                  
                <Route path='*' element={<PageNotFound/>}/>

              </Routes>
          </AppContextPage>
        </AuthContextProvider>
      </div>
  );
}

export default App;
