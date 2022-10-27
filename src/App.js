import { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AppContextPage } from "./contexts/AppContext";
import PageNotFound from "./pages/404";
import { UseAuth } from "./contexts/AuthContext";
import Home from "./pages/Home/home";
import NewReleases from "./pages/Home/newRelease";
import SearchArtist from "./pages/Home/searchArtist";
import Welcome from "./pages/welcome";
import Player from "./pages/Home/popular";
import Header from "./pages/Home/header";
import MusicVideos from "./pages/MultiMedia/musicVideo";
import Radio from "./pages/MultiMedia/radio";
// import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';
import EditProfile from "./pages/Profile/editProfile";
// import Profile from './pages/profile';
import GoldenAge from "./pages/Charts/goldenAge";
import SignUpProfile from "./pages/SignInUp/signUpProfile";
import ReggaeBlues from "./pages/Charts/reggaeBlues";
import Tomorrow from "./pages/Charts/tomorrowTunes";
import Collection from "./pages/Collection/collection";
import Likes from "./pages/Collection/likes";

export const AppContext = createContext();
// export const PhoneContext = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <AuthContextProvider>
        <AppContextPage>
          <Routes>
            <Route path="/" element={<Welcome />} />

            {/* <Route path='/signIn' element={<SignIn isOpen={isOpen} setIsOpen={setIsOpen} />}/>

                <Route path='/signup' element={<SignUp isOpen={isOpen} setIsOpen={setIsOpen} />}/> */}

            <Route
              path="/profile"
              element={<SignUpProfile isOpen={isOpen} setIsOpen={setIsOpen} />}
            />

            <Route path="/editprofile" element={<EditProfile />} />

            <Route path="/home" element={<Home />} />

            <Route path="/player" element={<Player />} />

            <Route path="/newRelease" element={<NewReleases />} />

            <Route path="/collection" element={<Collection />} />

            <Route path="/likes" element={<Likes />} />

            <Route path="/goldenAge" element={<GoldenAge />} />

            <Route path="/reggaeblues" element={<ReggaeBlues />} />

            <Route path="/tomorrow" element={<Tomorrow />} />

            <Route path="/head" element={<Header />} />

            <Route path="/musicvideos" element={<MusicVideos />} />

            <Route path="/radio" element={<Radio />} />

            {/* <Route path='/profile' element={<Pr/>}/>           */}

            <Route path="/searchArtist" element={<SearchArtist />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AppContextPage>
      </AuthContextProvider>
    </div>
  );
}

export default App;
