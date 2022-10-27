import React from "react";
import { AppPass } from "../../../contexts/AppContext";

function PlayerDetails() {
  const {
    golden,
    currentSongIndex,
    playerImage6Ref,
    playerName6Ref,
    playerArtist6Ref,
  } = AppPass();

  return (
    <div className="flex flex-row items-center w-[70%]">
      <img
        src={golden[currentSongIndex].img}
        ref={playerImage6Ref}
        className="w-[100px] h-[100px] rounded-[20px] mr-2"
        alt="artist"
      ></img>
      <div>
        <h3 ref={playerName6Ref} className="text-[1.1em]">
          {golden[currentSongIndex].name}
        </h3>
        <h3 ref={playerArtist6Ref} className="text-[0.9em]">
          {golden[currentSongIndex].artist}
        </h3>
      </div>
    </div>
  );
}

export default PlayerDetails;
