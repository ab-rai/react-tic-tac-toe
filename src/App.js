import { useState } from 'react';
import './App.css'
import Box from './Components/Box';
function App() {
  const [boxInputs,setBoxInputs] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
  const [turn, setTurn] = useState("0");
  const [winner, setWinner] = useState(null);
  // const [boxInputs,setBoxInputs] = useState([0,1,2,3,4,5,6,7,8]) 
  return (
    <div className="app">
      
      <div className="header">
        <h2>Tic Tac Toe</h2>
      </div>

      <div className="body">
        {
          boxInputs.map((el,index)=>{
            return <Box key={index} boxInputs={boxInputs} setBoxInputs={setBoxInputs} index = {index} 
                        turn = {turn} setTurn = {setTurn} winner = {winner} setWinner = {setWinner}/>
          })
        }  
      </div>
      
      <div className="footer">
        <h2>Developed by <b>Ab Rai</b></h2>
        <h2>  Winner is {winner !== null ? winner : "Not Decided Yet" } </h2>
      </div>
    
    </div>
      
  );
}

export default App;
