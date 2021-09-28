import React, { useState } from "react";
import { useSelector } from "react-redux";
import Player from "./Player";

const Players = () => {
  const players = useSelector((state) => state.players.players);
  const [role, setrole] = useState("");
  const handleFilter = (role) => {
    setrole(role);
  };
  const handleClear = () => {
    setrole("");
  };

  return (
    <div>
      <div>
        <button
          onClick={() => (role === "" ? handleFilter("MID") : handleClear())}
        >
          {" "}
          MID LANERS
        </button>
        <button
          onClick={() => (role === "" ? handleFilter("TOP") : handleClear())}
        >
          {" "}
          TOP LANERS
        </button>
        <button
          onClick={() => (role === "" ? handleFilter("JUNGLE") : handleClear())}
        >
          {" "}
          JUNGLERS
        </button>
        <button
          onClick={() => (role === "" ? handleFilter("ADC") : handleClear())}
        >
          {" "}
          ADC'S
        </button>
        <button
          onClick={() =>
            role === "" ? handleFilter("SUPPORT") : handleClear()
          }
        >
          {" "}
          SUPPORTS
        </button>
      </div>
      {role === ""
        ? players.map((el) => <Player player={el} />)
        : players
            .filter((el) => el.role === role)
            .map((el) => <Player player={el} />)}
    </div>
  );
};

export default Players;
