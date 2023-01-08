import { useState } from 'react';
import './bourd.css';
import evealuate from '../utils/utils'
const Board = (props) => {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', ''])
  const [wineer, setwineer] = useState(null)

  const cellClick = (index) => {
    if (cells[index] !== "") return;
    const newCells = [...cells];
    newCells[index] = props.turn;
    setCells(newCells);
    props.setTurn(props.turn === 'X' ? 'O' : 'X');

    const result = evealuate(newCells);
    if (result) {
      setwineer(result);
      if (result === "X")
        props.setWins(wins => { return { ...wins, xwins: wins.xwins + 1 } });
      else if (result === "O")
        props.setWins(wins => { return { ...wins, owins: wins.owins + 1 } });
    }
  }
  const restart = () => {
    setCells(['', '', '', '', '', '', '', '', '']);
    setwineer(null);
    props.setTurn('X');
  }

  return (
    <>
      <div className="bourd">
        {
          cells.map((cell, index) =>
            <div
              key={index}
              className={`cell ${cell}`}
              onClick={() => cellClick(index)}
            >
              {cell}
            </div>
          )
        }
        {
          wineer &&
          <div className="result" >{wineer === 'draw' ? "Draw :-(" : "winner is: " + wineer}
            <br /> <button className="btnRes" onClick={restart}>Restart</button>
          </div>
        }
      </div>
    </>
  );
};

export default Board