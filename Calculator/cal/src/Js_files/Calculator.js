import React,{useState} from 'react';
import '../Css_files/Style1.css';
const Calculator =() =>{

    const [number , setNumber] = useState("");
    const [sign1 , setSign] = useState("");
    const [firstval1 , setfirstVal] = useState("");
    
    var ans;
    const btnClick = (n)=>{
        var click = number + "" + n;
        setNumber(click);
    }
    const sign = (equr) =>{
        setSign(equr);
        setfirstVal(number);
        setNumber("");
    }

    const btnEqaul = ()=>{
        var lastval = parseFloat(number);
        if(sign1 === '+')
        {
            ans = parseFloat(firstval1) + parseFloat(lastval);
        }
        else if(sign1 === '-')
        {
            ans = parseFloat(firstval1) - parseFloat(lastval);
        }
        else if(sign1 === '*')
        {
            ans = parseFloat(firstval1) * parseFloat(lastval);
        }
        else
        {
            ans = parseFloat(firstval1) / parseFloat(lastval);
        }
        setNumber(ans);
    }
    const handleAc =() =>{
        setNumber("");  
    }
    const handleClear =() =>{
        setNumber(number.slice(0, number.length - 1));
    }
    return (
        <>
            <div className='main m-5'>
                <table border={3} width="30%" align = "center" cellspacing="0" cellpadding="1" bgcolor="lightgray">
                  <tr>
                    <td colspan="4"><input className='display' type="text" value={number} readonly></input></td>
                  </tr>
                  <tr align="center">
                      <td colspan="2"><input className='btn' type="button" name="All clear" value="AC" onClick={handleAc}></input></td>
                      <td><input className='btn' type="button" name="remove" value="⌫" onClick={handleClear}></input></td>
                      <td><input className='btn' type="button" name="/" value="/" onClick={() =>{sign('/')}}></input></td>
                  </tr>
                  <tr align="center">
                    <td><input className='btn' type="button" name="7" value="7" onClick={() =>{btnClick(7)}}></input></td>
                    <td><input className='btn' type="button" name="8" value="8" onClick={() =>{btnClick(8)}}></input></td>
                    <td><input className='btn' type="button" name="" value="9" onClick={() =>{btnClick(9)}}></input></td>
                    <td><input className='btn' type="button" name="9" value="*" onClick={() =>{sign('*')}}></input></td>
                  </tr>
                  <tr align="center">
                    <td><input className='btn' type="button" name="6" value="6" onClick={() =>{btnClick(6)}}></input></td>
                    <td><input className='btn' type="button" name="5" value="5" onClick={() =>{btnClick(5)}}></input></td>
                    <td><input className='btn' type="button" name="4" value="4" onClick={() =>{btnClick(4)}}></input></td>
                    <td><input className='btn' type="button" name="-" value="-" onClick={() =>{sign('-')}}></input></td>
                  </tr>
                  <tr align="center">
                    <td><input className='btn' type="button" name="1" value="1" onClick={() =>{btnClick(1)}}></input></td>
                    <td><input className='btn' type="button" name="2" value="2" onClick={() =>{btnClick(2)}}></input></td>
                    <td><input className='btn' type="button" name="3" value="3" onClick={() =>{btnClick(3)}}></input></td>
                    <td><input className='btn' type="button" name="+" value="+" onClick={() =>{sign('+')}}></input></td>
                  </tr> 
                  <tr align="center">
                      <td colspan="2"><input className='btn' type="button" name="0" value='0' onClick={() =>{btnClick(0)}}></input></td>
                      <td><input className='btn' type="button" name="." value="." onClick={() =>{btnClick('.')}}></input></td>
                      <td><input className='btn' type="button" name="=" value="=" onClick={btnEqaul}></input></td>
                  </tr>
                </table>
            </div>
        </>
    );
}


export default Calculator