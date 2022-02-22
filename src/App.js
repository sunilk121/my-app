import {useState} from 'react'
import './App.css';
import {Header}   from './Header';
import { Main }   from './Main';
import { Footer } from './Footer';
import { Display } from './Display';

const App=()=> {

const [number,setnumber] =useState(10);

const [str, setstr]=useState();


  const randomnumbergenerator=()=>
  {
    return Math.floor(Math.random()*100);
  }

  const handleOnClick=()=>
  {
    setnumber(randomnumbergenerator());
  };
  const handleOnChange=(e)=>
  {
    const{value}=e.target;
    setstr(value);

  }



  return (
    <div className="App">
      
      {/* <Header/>
      <Main/>
      <Footer/> */}


      <h1>Lotto generator</h1>
      <hr />
      <div className="numbers">
        <button onClick={handleOnClick}>generate nimber</button>
        <br />
        {/* passing props */}
        <Display myNum={number}/>
        <input type="text" name="" onChange={handleOnChange} />
        <br />
        Power Ball:.......{str}
      </div>
    
    </div>
  );
}

export default App;
