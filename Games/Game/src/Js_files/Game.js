import React,{useState} from 'react';
import '../App.css';

function Game() {

        let [sign,setSign] = useState('X');
        let [turn,setTurn] = useState('O');
        let [disp,setDisp] = useState("Let's Play");

        const printx = (number) =>{
            let obj = document.getElementById('r' +number);
            console.log(obj);
            console.log("sign = "+turn);
            if(obj.innerHTML == "")
            {
                obj.innerHTML = sign;
                Winner();
                checksign();
                setDisp("Turn of Player :" + turn);
            }
        }
        let checksign = () =>{
            if(sign === 'X')
            {
                setTurn('X');
                setSign('O');
            }
            else
            {
                setTurn('O');
                setSign('X');
            }
        }
        const getbox = (no) =>{
            return document.getElementById("r" + no).innerHTML;
        }
        const checkmove =(a,b,c,m) =>{
            if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        const Winner = () =>
        {
            if(checkmove(1,2,3,sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign) ||
            checkmove(1,4,7,sign) || checkmove(2,5,8,sign) || checkmove(3,6,9,sign) ||
            checkmove(1,5,9,sign) || checkmove(3,5,7,sign))
            {
                setDisp("Congrats..! " + sign + "is winner");
                for(var i=1 ; i<=9 ; i++)
                {
                    document.getElementById('r'+i).innerHTML = "";
                }
                throw "Game End";
            }
            else
            {
                if(getbox(1)!= "" && getbox(2)!= "" && getbox(3)!= "" && getbox(4)!= "" && getbox(5)!= "" && 
                getbox(6)!= "" && getbox(7)!= "" && getbox(8)!= "" && getbox(9)!= "")
                {
                    setDisp("It's a Tie !!!");
                    throw ("It's a Tie");
                }
            }
        }
        const Restart =() =>{
            for(let i=1 ; i<=9 ; i++)
            {
                document.getElementById('r' +i).innerHTML = "";
            }
        }
  return (

    <>
        <div className='container'>
            <div className='row'>
                <h1 className='heading'>TIC TAC TOE</h1>
            </div>
            <div className='row'>
                <h1 className='turn'>{disp}</h1>
            </div>
            <div className='row'>
                <table>
                    <tbody>
                        <tr>
                            <td id='r1' className='b-bottom-right' onClick={() => printx('1')}></td>
                            <td id='r2' className='b-bottom-right' onClick={() => printx('2')}></td>
                            <td id='r3' className='b-bottom' onClick={() => printx('3')}></td>
                        </tr>
                        <tr>
                            <td id='r4' className='b-bottom-right' onClick={() => printx('4')}></td>
                            <td id='r5' className='b-bottom-right' onClick={() => printx('5')}></td>
                            <td id='r6' className='b-bottom' onClick={() => printx('6')}></td>
                        </tr>
                        <tr>
                            <td id='r7' className='b-right' onClick={() => printx('7')}></td>
                            <td id='r8' className='b-right' onClick={() => printx('8')}></td>
                            <td id='r9' onClick={() => printx('9')}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row'>
                <button className='btn' onClick={() => Restart()}>Restart</button>
            </div>
            
        </div>
    </>    
  )
}

export default Game