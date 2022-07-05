import React,{useState} from 'react';
import '../Css_files/Style.css';

function MoblieCalculator () {
    const [history, setHistory] = useState([]);
    const [result,setResult] = useState();

    const handleClick =(val) =>{
        setHistory([...history,val]);
    }
    const handleDelete =() =>{
        setHistory('');
        setResult();
    }
    const handleRemove =() =>{
        setHistory(history.slice(0,history.length-1))
    }
    const handleResult =() =>{
        console.log(history.join('').split(/([\÷\%\+\-\*])/g).map((value) => (value.match(/\d/g)) ?  parseFloat(value) : value));

        const res =history.join('').split(/([\÷\%\+\-\*])/g).map((value) => (value.match(/\d/g)) ? parseFloat(value) : value).reduce((acc,value,index,array) =>{

            console.log('array : '+ array + ' value : ' +value + ' acc : ' + acc);

        switch(value) {
            case '+' :
                return(acc = acc + array[index + 1]);
            case '-' :
                return(acc = acc - array[index + 1]);
            case '*' :
                return(acc = acc * array[index + 1]);
            case '÷' :
                return(acc = acc / array[index + 1]);
            case "%" :
                return(acc = acc % array[index+1]);
            default :
                return acc;       
        }
    });
        setResult(res);
    }
    return(
        <>
            <div className='container mt-5 mb-4'>
                <div className='row'>
                    <h2 className='w-100 text-center mt-3 mb-4'>Mobile calculator</h2>
                </div>
                <div className='row'>
                    <div className='tbl m-auto'>
                        <h6 className='float-end text-end mt-3 pe-3'>{history}</h6>
                        <h5 className='float-end text-end mt-2 pe-3'>{result}</h5>
                        <table className='w-100'>
                            <tbody className='text-center'>
                                <tr>
                                    <td>
                                        <button onClick={() => handleDelete()}>C</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleRemove()}>CE</button>
                                    </td>
                                    <td>
                                        <button></button>
                                    </td>
                                    <td>
                                        <button className='sign' onClicK={(e) => handleClick(e.target.value)} value={'÷'}>÷</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={7}>7</button>
                                    </td>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={8}>8</button>
                                    </td>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={9}>9</button>
                                    </td>
                                    <td>
                                        <button className='sign' onClick={(e) => handleClick(e.target.value)} value={'*'}>*</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={6}>6</button>
                                    </td>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={5}>5</button>
                                    </td>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={4}>4</button>
                                    </td>
                                    <td>
                                        <button className='sign' onClick={(e) => handleClick(e.target.value)} value={'-'}>-</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={1}>1</button>
                                    </td>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={2}>2</button>
                                    </td>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={3}>3</button>
                                    </td>
                                    <td>
                                        <button className='sign' onClick={(e) => handleClick(e.target.value)} value={'+'}>+</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={'.'}>.</button>
                                    </td>
                                    <td>
                                        <button onClick={(e) => handleClick(e.target.value)} value={0}>0</button>
                                    </td>
                                    <td>
                                        <button style={{color:"green"}} onClick={(e) => handleClick(e.target.value)} value={'%'}>%</button>
                                    </td>
                                    <td>
                                        <button className='equal' onClick={(e) => handleResult()} value={'='}>=</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default MoblieCalculator;
