import "./styles.css";
import { useEffect, useState } from "react";
import Squares from "./Squares";
import { Pattern } from "./pattern";

export default function App() {
  const [board, setboard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setplayer] = useState("X");
  const [winner, setwinner] = useState(["", null]);
  const [player1, setplayer1] = useState(0);
  const [player2, setplayer2] = useState(0);

  useEffect(() => {
    wingame();
    console.log("hello");
  });

  useEffect(() => {
    if (winner[1] != null) {
      if (winner[0] === "X") setplayer1(player1 + 1);
      if (winner[0] === "0") setplayer2(player2 + 1);
      alert("The game is won by " + winner[0]);
      setboard(["", "", "", "", "", "", "", "", ""]);
      setplayer("X");
      setwinner(["", null]);
    } else if (!board.includes("")) {
      alert("Draw");
      setboard(["", "", "", "", "", "", "", "", ""]);
      setplayer("X");
      setwinner(["", null]);
    }
  }, [winner, board, player1, player2]);

  const changebox = (box) => {
    setboard(
      board.map((val, idx) => {
        if (idx === box && val === "") {
          const k = player;
          if (player === "X") setplayer("O");
          else setplayer("X");
          return k;
        }
        return val;
      })
    );
  };

  const wingame = () => {
    for (let i = 0; i < 8; i++) {
      let x = 0;
      let y = 0;
      for (let j = 0; j < 3; j++) {
        if (board[Pattern[i][j]] === "X") {
          x += 1;
          if (x === 3) setwinner(["X", 1, winner[2] + 1]);
        }
        if (board[Pattern[i][j]] === "O") {
          y += 1;
          if (y === 3) setwinner(["0", 1, winner[2] + 1]);
        }
      }
    }
  };

  return (
    <div>
      <center>
        <h1>Tic-Tac-Toe</h1>
      </center>
      <div className="board">
        <div className="board-row">
          <Squares
            value={board[0]}
            changebox={() => {
              changebox(0);
            }}
          ></Squares>
          <Squares
            value={board[1]}
            changebox={() => {
              changebox(1);
            }}
          ></Squares>
          <Squares
            value={board[2]}
            changebox={() => {
              changebox(2);
            }}
          ></Squares>
        </div>
        <div className="board-row">
          <Squares
            value={board[3]}
            changebox={() => {
              changebox(3);
            }}
          ></Squares>
          <Squares
            value={board[4]}
            changebox={() => {
              changebox(4);
            }}
          ></Squares>
          <Squares
            value={board[5]}
            changebox={() => {
              changebox(5);
            }}
          ></Squares>
        </div>
        <div className="board-row">
          <Squares
            value={board[6]}
            changebox={() => {
              changebox(6);
            }}
          ></Squares>
          <Squares
            value={board[7]}
            changebox={() => {
              changebox(7);
            }}
          ></Squares>
          <Squares
            value={board[8]}
            changebox={() => {
              changebox(8);
            }}
          ></Squares>
        </div>
        <div className="points">
          <div className="points-sub">
            <div>Player 1</div>
            <div>{player1}</div>
          </div>
          <div>
            <div className="points-sub">Player 2</div>
            <div>{player2}</div>
          </div>
        </div>
        <div className="newgame">
          <button
            onClick={() => {
              setplayer1(0);
              setplayer2(0);
            }}
          >
            New game
          </button>
        </div>
      </div>
    </div>
  );
}
