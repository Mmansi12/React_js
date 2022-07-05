import logo from './logo.svg';
// import './App.css'
import React,{useState} from 'react';
import Form from './Js_files/Form';
import FormAPI from './Js_files/FormAPI'
// import UserTable2 from './Js_files/UserTable2';
// import FormData from './Js_files/FormData';
import Form1 from './Js_files/Form1';

function App() {

  // const [getval,getvalname] = useState('');


  // const chgval =() =>{
  //   alert(getval);
  // }
  return (
    <div className="App">
      
        {/* <input type='text' onChange={(e) =>{ getvalname(e.target.value)}} value={getval}></input>
        <input type='button' value='submit' onClick={chgval}></input> */}

        <Form/>

        {/* <FormAPI/> */}

        {/* <UserTable2/> */}
        {/* <FormData/> */}
        {/* <Form1/> */}

    </div>
  );
}

export default App;
