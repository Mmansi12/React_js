import React ,{useState} from 'react';
import '../Css_files/Tictac.css';

function Tictac() {

    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();

    const checkForWinner =(sqaures) =>{
        let combos = {
            across : [
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down : [
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagnol : [
                [0,4,8],
                [2,4,6],
            ]
        }

        for (let combo in combos){
            combos[combo].forEach((pattern) => {
                if(sqaures[pattern[0]] === '' || sqaures[pattern[1]] === '' || sqaures[pattern[2]] === '')
                {

                }
                else if (sqaures[pattern[0]] === sqaures[pattern[1]] && sqaures[pattern[1]] === sqaures[pattern[2]])
                {
                    setWinner(sqaures[pattern[0]]);
                }   
            });
        }
    };

    const Click = (num) =>{

        if(cells[num] != '')
        {
            // alert('Already click!');
            return;
        }

        let sqaures = [...cells];
        if(turn == 'X')
        {
            sqaures[num] = 'X';
            setTurn('O');
        }
        else
        {
            sqaures[num] = 'O';
            setTurn('X');
        }

        checkForWinner(sqaures);
        setCells(sqaures);
        console.log(sqaures);
    };

    const Restart =() =>{
        setWinner(null);
        setCells(Array(9).fill(''));
    }

    const Cell =({num}) =>
    {
        return(
            <td onClick={() => Click(num)}>{cells[num]}</td>
        );
    } 
  
    return (
    
        <div className='container'>
            <h2>Let's Play Game..!</h2>
            <table>
                Player : {turn}
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>    
               </tbody>
           </table>
           <h3> {winner} is the win..!</h3>
           <button onClick={() => Restart()} className='btn'>Restart</button>
        </div>
      
  );
}

export default Tictac;