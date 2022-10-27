import React, { useEffect, useRef, useState } from "react";
import SearchArtist from "../Home/searchArtist";
import { AppPass } from "../../contexts/AppContext";
import Player from "../Players/ReggaePlayer/player";

import logo from "../../imgs/logo.svg";
import {
  BsThreeDotsVertical,
  BsHeart,
  BsFillPlayCircleFill,
  BsHeartFill,
} from "react-icons/bs/index";
import { MdCollectionsBookmark } from "react-icons/md/index";

import { Link } from "react-router-dom";
import Sidebar from "../Home/sidebar";
import "../../index.css";
import LogoutModal from "../SignInUp/logoutModal";

import kaya from "../../imgs/kaya.webp";
import respect from "../../imgs/respect.jpg";
import sheriff from "../../imgs/I_Shot_the_Sheriff_by_Bob_Marley_and_the_Wailers_German_vinyl.jpg";
import buffaloSoldier from "../../imgs/BuffaloSoldier.jpg";
import prisoner from "../../imgs/Prisoner.jpg";
import houseOfEx from "../../imgs/houseOfExile.jpg";
import exodus from "../../imgs/exodus.png";
import nattyDread from "../../imgs/nattyDread.jpg";
import soulTaker from "../../imgs/soulTaker.jpg";

import { MdHomeFilled, MdLibraryMusic } from "react-icons/md/index";
import { RiRadio2Fill, RiLogoutBoxRFill } from "react-icons/ri/index";
import { HiFilm } from "react-icons/hi/index";
import { BsFillPersonFill } from "react-icons/bs/index";

const options = [
  {
    id: 0,
    img: MdHomeFilled,
    navigate: "/home",
    color: "#52514E",
  },
  {
    id: 1,
    img: MdLibraryMusic,
    navigate: "/collection",
    color: "#52514E",
  },
  {
    id: 2,
    img: RiRadio2Fill,
    navigate: "/radio",
    color: "#52514E",
  },
  {
    id: 3,
    img: HiFilm,
    navigate: "/musicvideos",
    color: "#52514E",
  },
];

const reggaes = [
  {
    id: 0,
    artist: "Bob Marley",
    img: kaya,
    name: "Is This Love",
    audio: "Bob Marley - Is This Love.mp3",
    album: "Kaya",
  },
  {
    id: 2,
    artist: "Bob Marley",
    img: sheriff,
    name: "I Shot The Sheriff",
    audio: "Bob Marley - I Shot The Sheriff.mp3",
    album: "Singles",
  },
  {
    id: 3,
    artist: "Bob Marley",
    img: buffaloSoldier,
    name: "Buffalo Soldier",
    audio: "Bob Marley -Buffalo Soldier.mp3",
    album: "Singles",
  },
  {
    id: 4,
    artist: "Lucky Dube",
    img: prisoner,
    name: "Prisoner",
    audio: "lucky dube - prisoner.mp3",
    album: "Prisoner",
  },
  {
    id: 5,
    artist: "Lucky Dube",
    img: houseOfEx,
    name: "Freedom Fighters",
    audio: "lucky dube  fredom fighters.mp3",
    album: "House of Exile",
  },
  {
    id: 6,
    artist: "Bob Marley",
    img: exodus,
    name: "Three Little Birds",
    audio: "Bob Marley- don't worry about a thing.mp3",
    album: "Exodus",
  },
  {
    id: 7,
    artist: "Lucky Dube",
    img: houseOfEx,
    name: "Crazy World",
    audio: "lucky dube  crazy world.mp3",
    album: "House of Exile",
  },
  {
    id: 8,
    artist: "Lucky Dube",
    img: prisoner,
    name: "War and Crime",
    audio: "lucky dube   war and  crime.mp3",
    album: "Prisoner",
  },
  {
    id: 9,
    artist: "Bob Marley",
    img: nattyDread,
    name: "No Woman No Cry",
    audio: "Bob_Marley_No_Woman_No_Cry.mp3",
    album: "Natty Dread",
  },
  {
    id: 10,
    artist: "Lucky Dube",
    img: soulTaker,
    name: "Soul Taker",
    audio: "lucky dube 5ve soul 2aker.mp3",
    album: "Soul Taker",
  },
];

const ReggaeBlues = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const {
    currentSongIndex,
    setCurrentSongIndex,
    nextSongIndex,
    isPlaying,
    setIsPlaying,
    setDuration,
    getCurrDuration,
    playerAudio4Ref,
    playerImage4Ref,
    playerName4Ref,
    playerArtist4Ref,
  } = AppPass();

  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    document.title = "Reggae and Blues - Vizimuz";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setCanShow(true), 3000);
    return () => clearTimeout(timer);
  });

  const audioEl = useRef(null);
  audioEl.current = [];
  const audioToEl = (el) => {
    if (el && !audioEl.current.includes(el)) {
      audioEl.current.push(el);
    }
  };

  const imageEl = useRef(null);
  imageEl.current = [];
  const imageToEl = (el) => {
    if (el && !imageEl.current.includes(el)) {
      imageEl.current.push(el);
    }
  };

  const musicNameEl = useRef(null);
  musicNameEl.current = [];
  const musicNameToEl = (el) => {
    if (el && !musicNameEl.current.includes(el)) {
      musicNameEl.current.push(el);
    }
  };

  // const artistNameEl = useRef(null);
  //      artistNameEl.current = [];
  //          const artistNameToEl = (el) => {
  //          if (el && !artistNameEl.current.includes(el)) {
  //              artistNameEl.current.push(el);
  //          }
  //          };

  const musicBoxEl = useRef(null);
  musicBoxEl.current = [];
  const musicBoxToEl = (el) => {
    if (el && !musicBoxEl.current.includes(el)) {
      musicBoxEl.current.push(el);
    }
  };

  return (
    <div
      className="bg-opacity-[0%] overflow-x-hidden"
      style={{
        backgroundImage: "url('marley.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#1A1E1F] bg-opacity-[50%] text-white flex flex-col min-h-screen">
        <div className="bg-[#1A1E1F] bg-opacity-[50%] p-4 w-screen pb-8 hidden lg:flex flex-row">
          <img src={logo} alt="home icon" className="mr-2" />

          <SearchArtist />
        </div>

        <div className="bg-inherit text-white flex flex-col lg:flex-row">
          <div className="sidebar-sm lg:hidden">
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          </div>

          <div className="sidebar-lg fixed hidden lg:flex flex-col mt-[2em]">
            <div className="flex flex-col justify-between bg-[#1A1E1F] mx-4 w-[4vw] rounded-[50px] py-4">
              {options.map((option, index) => {
                return (
                  <>
                    <Link to={option.navigate}>
                      <div
                        key={option.id}
                        className="flex my-3 w-1/2 mx-auto items-center cursor-pointer"
                      >
                        <option.img
                          className="stroke-black mx-auto w-[40px] hover:scale-[1.2]"
                          style={{ color: option.color }}
                        />
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>

            <div className="flex flex-col justify-between mt-3 bg-[#1A1E1F] mx-4 w-[4vw] rounded-[50px] my-4 py-4">
              <Link to="/profile">
                <div className="flex my-3 w-1/2 mx-auto items-center cursor-pointer">
                  <BsFillPersonFill
                    className="mx-auto w-[40px] hover:scale-[1.2]"
                    style={{ color: "#52514E" }}
                  />
                </div>
              </Link>

              <div
                onClick={() => setShowLogoutModal(true)}
                className="flex items-center mx-auto w-1/2 my-3 cursor-pointer"
              >
                <div className="flex cursor-pointer">
                  <RiLogoutBoxRFill
                    className="ml-1 hover:scale-[1.2]"
                    style={{ color: "#52514E" }}
                  />
                </div>
                {showLogoutModal === true && (
                  <LogoutModal
                    showLogoutModal={showLogoutModal}
                    setShowLogoutModal={setShowLogoutModal}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="goldenAge flex flex-col lg:w-full w-[90vw] mx-auto lg:ml-[5vw] lg:pl-8">
            <div className="flex lg:flex-row flex-col mb-8 items-end items-left">
              <img
                src="marley.webp"
                alt="music cover"
                className="lg:w-[250px] lg:h-[250px] lg:mr-4 w-full mx-auto rounded-[20px]"
              />
              <div className="flex flex-col lg:w-[100%] w-[95vw] mx-auto mt-4 lg:mt-[0px]">
                <div className="text-bold text-[1.4em] text-[#829D9D] mb-2">
                  Reggae and Blues
                </div>
                <div className=" text-[0.8em] mb-1 lg:w-[40vw] w-[90vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </div>
                <div className="text-[0.7em] mb-6">11 songs ~ 16 hrs+</div>
                <div className="flex items-center flex-row">
                  <button
                    className="rounded-[20px] w-max p-2 bg-[#262A2D] text-[.7em] lg:text-[1em] flex flex-row mr-3 items-center"
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                    }}
                  >
                    <BsFillPlayCircleFill className="text-[#FACD66] w-[1em] mr-2" />{" "}
                    Play all
                  </button>
                  <button className="rounded-[20px] w-max p-2 bg-[#262A2D] text-[.7em] lg:text-[1em] flex flex-row mr-3 items-center">
                    <MdCollectionsBookmark className="text-[#FACD66] w-[1em] mr-2" />{" "}
                    Add to collection
                  </button>
                  <button className="rounded-[20px] w-max p-2 bg-[#262A2D] text-[.7em] lg:text-[1em] flex flex-row mr-3 items-center">
                    <BsHeartFill className="text-[#E5524A] w-[1em]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[90vw] mb-[8em]">
              {reggaes.map((release, index) => {
                return (
                  <>
                    <div
                      key={index}
                      ref={musicBoxToEl}
                      onClick={() => {
                        console.log(imageEl.current);
                        console.log(audioEl.current[index]);
                        console.log(musicNameEl.current[index]);
                        // console.log(artistNameEl.current[index])
                        console.log(reggaes[currentSongIndex].name);
                        // musicBoxEl.current[0].style.display = 'none'
                        // musicBoxEl.current[0].style.scale = '0'
                        console.log(isPlaying);

                        console.log(playerAudio4Ref.current.currentSrc);
                        console.log(playerImage4Ref.current.outerHTML);
                        console.log(imageEl);
                        console.log(playerName4Ref.current.innerHTML);
                        console.log(playerArtist4Ref.current.innerHTML);
                        isPlaying === true
                          ? setIsPlaying(isPlaying)
                          : setIsPlaying(!isPlaying);
                        playerAudio4Ref.current.src =
                          audioEl.current[index].src;
                        playerImage4Ref.current.src =
                          imageEl.current[index].src;

                        playerName4Ref.current.innerHTML =
                          musicNameEl.current[index].innerHTML;
                        playerArtist4Ref.current.innerHTML = "";
                      }}
                      className="flex items-center flex-row justify-evenly rounded-[20px] relative bg-opacity-[50%] bg-[#262A2D] p-2 mx-auto mb-4 cursor-pointer"
                    >
                      <audio
                        src={release.audio}
                        ref={audioToEl}
                        onTimeUpdate={getCurrDuration}
                        onLoadedData={(e) => {
                          setDuration(e.currentTarget.duration.toFixed(2));
                        }}
                      ></audio>
                      <img
                        className="w-[50px] h-[50px] mr-4  rounded-[10px]"
                        title={release.img}
                        ref={imageToEl}
                        src={release.img}
                        alt="artist"
                      />
                      <BsHeart className="w-[7%] lg:block hidden" />
                      <div className="lg:w-[60%] w-[80%] flex flex-col text-left lg:flex-row lg:text-center">
                        <h2
                          ref={musicNameToEl}
                          className="lg:w-[50%] text-left lg:text-center text-white text-[.6em] md:text-[.7em] opacity-[70%]"
                        >
                          {release.name} - {release.artist}
                        </h2>
                        <h2 className="lg:w-[50%] text-left lg:text-center text-white text-[.6em] md:text-[.7em] opacity-[70%]">
                          {release.album}
                        </h2>
                      </div>
                      <div className="lg:w-[21%] w-[10%] flex flex-col lg:flex-row text-center items-center">
                        <h2 className="lg:w-[50%] text-center text-white text-[.6em] md:text-[.7em] opacity-[70%]">
                          4:12
                        </h2>
                        <BsThreeDotsVertical className="text-[#FACD66] lg:w-[50%]" />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 z-[99999] w-screen left-0">
        {canShow ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            reggaes={reggaes}
          />
        ) : (
          <> </>
        )}
      </footer>
    </div>
  );
};

export default ReggaeBlues;
