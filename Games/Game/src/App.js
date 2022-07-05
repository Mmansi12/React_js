import logo from './logo.svg';
// import './App.css';
import React ,{useState} from 'react';
// import Tictac from './Js_files/Tictac';
// import Game from './Js_files/Game';
// import Tictactoe from './Js_files/Tictactoe';
import Puzzle from './Js_files/Puzzle';



function App() {

  // const [a,b] = useState("cdmi");
  // const [c,d] =useState("cdmi");

  // const chgval =() =>{

  //   b("creative");
  //   d("institute");
  // }

     
  return (
    <div className="App">
      
       {/* <Tictactoe /> */}

      {/* <Tictac /> */}

        {/* <Game /> */}

          <Puzzle />
      
     
      {/* <h1>{a} - {c}</h1>

      <input type="button" value="click me" onClick={chgval} /> */}
    </div>
  );
}

export default App;
