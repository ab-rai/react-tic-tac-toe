import { useState } from "react";

const Details = (props) => {
    const {turn, winner} = props
    let [player1, setPlayer1] = useState("Player1")
    let [player2, setPlayer2] = useState("Player2")
    return (
        <div className="details">
            <label for="player1">Player1 Name</label>
            <input className="input-name" onChange={(e) => setPlayer1(e.target.value)} type="text" value={player1}></input>
            <label for="player2">Player2 Name</label>
            <input className="input-name" onChange={(e) => setPlayer2(e.target.value)} type="text" value={player2}></input>
            <h3>Player 1(0) - {player1 === "Player1" ? "" : player1}</h3>
            <h3>Player 2(X) - {player2 === "Player2" ? "" : player2}</h3>
            {winner === null ?  <h3>Turn Of - {turn === "0" ? player1 : player2}</h3> : ""}
            <h2>{winner !== null ? `Winner is ${winner === "0" ? player1 : player2}`:""}</h2>
        </div>
    );
}
export default Details;