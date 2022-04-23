import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import './Input.css'
//import Input from './Input.jsx'
function App() {
  const [counter, setCounter] = useState(0)
  const handleincrement = (value)=>{
    setCounter(counter+value);
    
    };
    
    const handledecrement = ()=>{
        setCounter(counter-1);
    }
    
    const handledouble = ()=>{
        setCounter(counter*2);
    }
    
    function color_pad(){
        if(counter % 2 === 0){
         
            //import './red.css';
        var x = document.getElementById('title');
        x.style.color=`green`;
       
        console.log(x);
            
    
        }else{
            var y = document.getElementById('title');
        y.style.color=`red`;
       
        console.log(y);
            
        }
       
        
    }
    color_pad();
  


  return (
    <div className="App">
      
      <div id='box'>
    <h1 id='title' >{counter}</h1>
    <div id='but_box'>
        <button id='inc' onClick={()=>handleincrement(1)}>+</button>
        <button id='dec' onClick={()=>handledecrement()}>-</button>
        </div>
        <div id='double_box'>
            <button id='dbl' onClick={()=>handledouble()}>2X</button>
        </div>
    
        </div>
      
    </div>
  )
}

export default App
