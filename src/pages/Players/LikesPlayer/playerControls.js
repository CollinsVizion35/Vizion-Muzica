import React from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa/index";
import { BsShuffle } from "react-icons/bs/index";
import { TbRepeatOnce } from "react-icons/tb/index";
import Slider from "./slider";
import { AppPass } from "../../../contexts/AppContext";

function PlayerControls(props) {
  const {
    likes,
    percentage,
    setPercentage,
    playerAudio3Ref,
    repeat,
    setRepeat,
    shuffle,
    setShuffle,
  } = AppPass();

  const onChange = (e) => {
    const audio = playerAudio3Ref.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  return (
    <div className="flex flex-col items-center w-[60vw]">
      <div className="flex flex-row items-center w-[40vw] lg:justify-between ml-[50%] lg:ml-[0px] mb-2">
        <button
          className={
            shuffle ? "hidden lg:block" : "hidden lg:block text-[#F9D175]"
          }
          onClick={() => {
            setShuffle(!shuffle);
            console.log(shuffle);
          }}
        >
          <BsShuffle />
        </button>
        <button
          className="hidden lg:block"
          onClick={() => props.SkipSong(false)}
        >
          <FaStepBackward />
        </button>
        <button
          className="p-3 bg-[#F9D175] rounded-[50%] mr-3 lg:mr-[0px]"
          onClick={() => props.setIsPlaying(!props.isPlaying)}
        >
          {props.isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => props.SkipSong()}>
          <FaStepForward />
        </button>
        <button
          className={
            repeat ? "hidden lg:block" : "hidden lg:block text-[#F9D175]"
          }
          onClick={() => {
            setRepeat(!repeat);
            console.log(repeat);
            console.log(likes.length);
          }}
        >
          <TbRepeatOnce />
        </button>
      </div>

      <div>
        <Slider percentage={percentage} onChange={onChange} />
      </div>
    </div>
  );
}

export default PlayerControls;
