import React,{useState} from "react";
import '../Css_files/Tictactoe.css';

function Tictactoe(){

        // const [btn,setbtn] = useState('X');
        const [play,setplay] = useState("Let's Play Game..!😊");
        let i=0;
        const btn1=() =>{
            if(i%2==0)
            {
                document.getElementById('b1').value="O";
            }
            else 
            {
                document.getElementById('b2').value="X";
            }
            i++;
        }
        const btn2 =() =>{
            if(i%2==0)
            {
                document.getElementById('b2').value="O";
            }
            else
            {
                document.getElementById('b2').value="X";
            }
            i++;
        } 
        const btn3=() =>{
            if(i%2==0)
            {
                document.getElementById('b3').value="O";
            }
            else
            {
                document.getElementById('b3').value="X";
            }
            i++;
        } 
        const btn4 =() =>{
            if(i%2==0)
            {
                document.getElementById('b4').value="O";
            }
            else
            {
                document.getElementById('b4').value="X";
            }
            i++;
        } 
        const btn5 =() =>{
            if(i%2==0)
            {
                document.getElementById('b5').value="O";
            }
            else
            {
                document.getElementById('b5').value="X";
            }
            i++;
        } 
        const btn6 =() =>{
            if(i%2==0)
            {
                document.getElementById('b6').value="O";
            }
            else
            {
                document.getElementById('b6').value="X";
            }
            i++;
        } 
        const btn7 =() =>{
            if(i%2==0)
            {
                document.getElementById('b7').value="O";
            }
            else
            {
                document.getElementById('b7').value="X";
            }
            i++;
        } 
        const btn8 =() =>{
            if(i%2==0)
            {
                document.getElementById('b8').value="O";
            }
            else
            {
                document.getElementById('b8').value="X";
            }
            i++;
        } 
        const btn9 =() =>{
            if(i%2==0)
            {
                document.getElementById('b9').value="O";
            }
            else
            {
                document.getElementById('b9').value="X";
            }
            i++;
        }
        
    
       
    return(
        <>
            <div className="container">
                <div className="head">
                    <h1>Tic-Tac-Toe Game</h1>
                    <h2>{play}</h2>
                </div>
                <div className="row">
                    <input type='button' value="" onclick={() =>btn1() } id='r1'></input>
                    <input type='button' value="" onclick={() =>btn2() } id='r2'></input>
                    <input type='button' value="" onclick={() =>btn3() } id='r3'></input><br />
                    <input type='button' value="" onclick={() =>btn4() } id='r4'></input>
                    <input type='button' value="" onclick={() =>btn5() } id='r5'></input>
                    <input type='button' value="" onclick={() =>btn6() } id='r6'></input><br />
                    <input type='button' value="" onclick={() =>btn7() } id='r7'></input>
                    <input type='button' value="" onclick={() =>btn8() } id='r8'></input>
                    <input type='button' value="" onclick={() =>btn9() } id='r9'></input>
                </div>

            </div>
        
        </>
    );
}
export default Tictactoe