import React, { useEffect, useState } from 'react';
import '../Css_files/Puzzle.css';

function Puzzle() {

    let [bt1, setbt1] = useState('1');
    let [bt2, setbt2] = useState('2');
    let [bt3, setbt3] = useState('3');
    let [bt4, setbt4] = useState('4');
    let [bt5, setbt5] = useState('5');
    let [bt6, setbt6] = useState('6');
    let [bt7, setbt7] = useState('7');
    let [bt8, setbt8] = useState('');
    let [bt9, setbt9] = useState('8');
    let [player, setplayer] = useState("Let's Play Game..!");


    useEffect(() => {
       win();
    }, [bt1,bt2,bt3,bt4,bt5,bt6,,bt7,,bt8,bt9])

    const btn1 = () => {
        if (bt2 === '') {
            setbt2(bt1);
            setbt1('');
            document.getElementById('b1').style.background = 'lightgray';
            document.getElementById('b2').style.background = '#003049';
        }
        else if (bt4 === '') {
            setbt4(bt1);
            setbt1('');
            document.getElementById('b1').style.background = 'lightgray';
            document.getElementById('b4').style.background = '#003049';
        }
        
    }
    const btn2 = () => {
        if (bt1 === '') {
            setbt1(bt2);
            setbt2('');
            document.getElementById('b2').style.background = 'lightgray';
            document.getElementById('b1').style.background = '#003049';
        }
        else if (bt3 === '') {
            setbt3(bt2);
            setbt2('');
            document.getElementById('b2').style.background = 'lightgray';
            document.getElementById('b3').style.background = '#003049';
        }
        else if (bt5 === '') {
            setbt5(bt2);
            setbt2('');
            document.getElementById('b2').style.background = 'lightgray';
            document.getElementById('b5').style.background = '#003049';
        }
        
    }
    const btn3 = () => {
        if (bt2 === '') {
            setbt2(bt3);
            setbt3('');
            document.getElementById('b3').style.background = 'lightgray';
            document.getElementById('b2').style.background = '#003049';
        }
        else if (bt6 === '') {
            setbt6(bt3);
            setbt3('');
            document.getElementById('b3').style.background = 'lightgray';
            document.getElementById('b6').style.background = '#003049';
        }
      
    }
    const btn4 = () => {
        if (bt1 === '') {
            setbt1(bt4);
            setbt4(' ');
            document.getElementById('b4').style.background = 'lightgray';
            document.getElementById('b1').style.background = '#003049';
        }
        else if (bt5 === '') {
            setbt5(bt4);
            setbt4('');
            document.getElementById('b4').style.background = 'lightgray';
            document.getElementById('b5').style.background = '#003049';
        }
        else if (bt7 === '') {
            setbt7(bt4);
            setbt4('');
            document.getElementById('b4').style.background = 'lightgray';
            document.getElementById('b7').style.background = '#003049';
        }
      
    }
    const btn5 = () => {
        if (bt2 === '') {
            setbt2(bt5);
            setbt5('');
            document.getElementById('b5').style.background = 'lightgray';
            document.getElementById('b2').style.background = '#003049';
        }
        else if (bt4 === '') {
            setbt4(bt5);
            setbt5('');
            document.getElementById('b5').style.background = 'lightgray';
            document.getElementById('b4').style.background = '#003049';
        }
        else if (bt6 === '') {
            setbt6(bt5);
            setbt5('');
            document.getElementById('b5').style.background = 'lightgray';
            document.getElementById('b6').style.background = '#003049';
        }
        else if (bt8 === '') {
            setbt8(bt5);
            setbt5('');
            document.getElementById('b5').style.background = 'lightgray';
            document.getElementById('b8').style.background = '#003049';
        }
        
    }
    const btn6 = () => {
        if (bt3 === '') {
            setbt3(bt6);
            setbt6('');
            document.getElementById('b6').style.background = 'lightgray';
            document.getElementById('b3').style.background = '#003049';
        }
        else if (bt5 === '') {
            setbt5(bt6);
            setbt6('');
            document.getElementById('b6').style.background = 'lightgray';
            document.getElementById('b5').style.background = '#003049';
        }
        else if (bt9 === '') {
            setbt9(bt6);
            setbt6('');
            document.getElementById('b6').style.background = 'lightgray';
            document.getElementById('b9').style.background = '#003049';
        }
        
    }
    const btn7 = () => {
        if (bt4 === '') {
            setbt4(bt7);
            setbt7('');
            document.getElementById('b7').style.background = 'lightgray';
            document.getElementById('b4').style.background = '#003049';
        }
        else if (bt8 === '') {
            setbt8(bt7);
            setbt7('');
            document.getElementById('b7').style.background = 'lightgray';
            document.getElementById('b8').style.background = '#003049';
        }
        
    }
    const btn8 = () => {
        if (bt5 === '') {
            setbt5(bt8);
            setbt8('');
            document.getElementById('b8').style.background = 'lightgray';
            document.getElementById('b5').style.background = '#003049';
        }
        else if (bt7 === '') {
            setbt7(bt8);
            setbt8('');
            document.getElementById('b8').style.background = 'lightgray';
            document.getElementById('b7').style.background = '#003049';
        }
        else if (bt9 === '') {
            setbt9(bt8);
            setbt8('');
            document.getElementById('b8').style.background = 'lightgray';
            document.getElementById('b9').style.background = '#003049';
        }
      
    }
    const btn9 = () => {
        if (bt6 === '') {
            setbt6(bt9);
            setbt9('');
            document.getElementById('b9').style.background = 'lightgray';
            document.getElementById('b6').style.background = '#003049';
        }
        else if (bt8 === '') {
            setbt8(bt9);
            setbt9('');
            document.getElementById('b9').style.background = 'lightgray';
            document.getElementById('b8').style.background = '#003049';
        }
   
    }
    function win() {
        if (bt1 === '1' && bt2 === '2' && bt3 === '3' && bt4 === '4' && bt5 === '5' && bt6 === '6' && bt7 === '7' &&
            bt8 === '8' && bt9 === '')
            setplayer('You are Winner..!!🥳🥳');
    }
    const Restart = () => {
        setbt1('1');
        setbt2('2');
        setbt3('3');
        setbt4('4');
        setbt5('5');
        setbt6('6');
        setbt7('7');
        setbt8('');
        setbt9('8');
        setplayer("Let's Play Game..!");
        document.getElementById('b1').style.background = '#003049';
        document.getElementById('b2').style.background = '#003049';
        document.getElementById('b3').style.background = '#003049';
        document.getElementById('b4').style.background = '#003049';
        document.getElementById('b5').style.background = '#003049';
        document.getElementById('b6').style.background = '#003049';
        document.getElementById('b7').style.background = '#003049';
        document.getElementById('b8').style.background = '#003049';
        document.getElementById('b9').style.background = '#003049';
    }


    return (
        <div className='container'>
            <div className='heading'>
                <h1>Arrange Puzzle Game</h1>
                <h2>{player}</h2>
            </div>
            <div className='box'>
                <input id='b1' type="button" value={bt1} onClick={() => btn1()} />
                <input id='b2' type="button" value={bt2} onClick={() => btn2()} />
                <input id='b3' type="button" value={bt3} onClick={() => btn3()} />
            </div>
            <div className='box'>
                <input id='b4' type="button" value={bt4} onClick={() => btn4()} />
                <input id='b5' type="button" value={bt5} onClick={() => btn5()} />
                <input id='b6' type="button" value={bt6} onClick={() => btn6()} />
            </div>
            <div className='box'>
                <input id='b7' type="button" value={bt7} onClick={() => btn7()} />
                <input id='b8' type="button" value={bt8} onClick={() => btn8()} />
                <input id='b9' type="button" value={bt9} onClick={() => btn9()} />
            </div>
            <div className='top'>
                <button onClick={() => Restart()} className='btn'>Restart</button>
            </div>
        </div>

    )
}

export default Puzzle;