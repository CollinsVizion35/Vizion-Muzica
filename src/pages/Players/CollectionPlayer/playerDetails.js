import React from "react";
import { AppPass } from "../../../contexts/AppContext";

function PlayerDetails() {
  const {
    collections,
    currentSongIndex,
    playerImage2Ref,
    playerName2Ref,
    playerArtist2Ref,
  } = AppPass();

  return (
    <div className="flex flex-row items-center w-[70%]">
      <img
        src={collections[currentSongIndex].img}
        ref={playerImage2Ref}
        className="w-[100px] h-[100px] rounded-[20px] mr-2"
        alt="artist"
      ></img>
      <div>
        <h3 ref={playerName2Ref} className="text-[1.1em]">
          {collections[currentSongIndex].name}
        </h3>
        <h3 ref={playerArtist2Ref} className="text-[0.9em]">
          {collections[currentSongIndex].artist}
        </h3>
      </div>
    </div>
  );
}

export default PlayerDetails;
