import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Board from './componants/bourd/bourd.component'
import Header from './componants/header/header.component'

function App() {
  const [turn, setTurn] = useState('X');
  const [wins, setWins] = useState({ xwins: 0, owins: 0 });
  return (
    <div className="App">
      <Header turn={turn} wins={wins} />
      <Board turn={turn} setTurn={setTurn} setWins={setWins} />
    </div>
  );
}

export default App;
