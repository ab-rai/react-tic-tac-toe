let Box = (props) => {
    let {boxInputs, setBoxInputs, index, turn, setTurn, winner, setWinner} = props
    function handleButtonClick(index){
        if(boxInputs[index] !== -1){
            return;
        }
        else{
            let newBoxInputs = boxInputs;
            if(turn === "0"){
                newBoxInputs[index] = "0";
                setTurn("X");
            }
            else{
                newBoxInputs[index] ="X";
                setTurn("0");
            }
            setBoxInputs(newBoxInputs)
        }
        checkWinner();
    }
    function checkWinner(){
        if(boxInputs[0] !== -1){
            if( (boxInputs[0] === boxInputs[1] && boxInputs[1] === boxInputs[2]) ||
                (boxInputs[0] === boxInputs[3] && boxInputs[3] === boxInputs[6]) ||
                (boxInputs[0] === boxInputs[4] && boxInputs[4] === boxInputs[8]) 
                ){
                console.log("Can in true")
                handleSetWinner()
              }
        }
        if(boxInputs[1] !== -1){
            if( boxInputs[1] === boxInputs[4] && boxInputs[4] === boxInputs[7]) {
                console.log("Can in 2 true")
                handleSetWinner()
              }
        }
       if(boxInputs[2] !== -1){
            if( (boxInputs[2] === boxInputs[5] && boxInputs[5] === boxInputs[8]) ||
                (boxInputs[2] === boxInputs[4] && boxInputs[4] === boxInputs[6])
                ) {
                console.log("Can in 3 true")
                handleSetWinner()
              }
        }
        if(boxInputs[6] !== -1){
            if( boxInputs[6] === boxInputs[7] && boxInputs[7] === boxInputs[8]) {
                console.log("Can in 4 true")
                handleSetWinner()
              }
        } 
        if(boxInputs[3] !== -1){
            if( boxInputs[3] === boxInputs[4] && boxInputs[4] === boxInputs[5]) {
                console.log("Can in 5 true")
                handleSetWinner()
              }
        }
    }

    function handleSetWinner(){
        turn === "0" ? setWinner("0") : setWinner("X")
    }
    return (
        <div className="box">
            <button disabled={winner !== null} onClick={()=>handleButtonClick(index)}>{boxInputs[index] === -1 ? "" : boxInputs[index]}</button>
        </div>
    );

    
}



export default Box;