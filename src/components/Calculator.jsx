import React from 'react';
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'
import { useState } from 'react';


function Calculator() {
    const [val, setVal] = useState(0);

    function setNum(e){
        if (val === 0){
            setVal( e.target.value);
        }else{
            
        setVal( val + e.target.value);
        }
    }

    function clear(){
        setVal(0);
    }

    function porcentage(){
        setVal(val/100);
    }

    function handler(){
        setVal(-val)
    }


  return (
    <div>
    <Box m={5}/>
    <Container maxWidth="xs">
    <div className='wrapper'>
        <Box m={12}/>
        <h1 className='result'>{val}</h1>
        <button onClick={clear}>AC</button>
        <button onClick={handler}>+/-</button>
        <button onClick={porcentage}>%</button>
        <button className='orange'>/</button>
        <button className='grey' onClick={setNum} value={7}>7</button>
        <button className='grey'onClick={setNum} value={8}>8</button>
        <button className='grey'onClick={setNum} value={9}>9</button>
        <button className='orange'>x</button>
        <button className='grey'onClick={setNum} value={4}>4</button>
        <button className='grey'onClick={setNum} value={5}>5</button>
        <button className='grey'onClick={setNum} value={6}>6</button>
        <button className='orange'>-</button>
        <button className='grey'onClick={setNum} value={1}>1</button>
        <button className='grey'onClick={setNum} value={2}>2</button>
        <button className='grey'onClick={setNum} value={3}>3</button>
        <button className='orange'>+</button>
        <button className='grey'onClick={setNum} value={7}>0</button>
        {/* <button className='grey' style={{visibility : "hidden"}}>0</button> */}
        <button className='grey' onClick={setNum} value={","}>,</button>
        <button className='orange'>=</button>
    </div>
    </Container>
    </div>
  );
}

export default Calculator;