import React from 'react'
import { store } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    console.log("HEWADER");
    const test = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    console.log(test);
   
    const plus=()=>{
        dispatch({type: "PLUS"})
    }
    const minus=()=>{
        dispatch({type: "MINUS"})
    }
  return (
    <div>
        <h1>HEADER</h1>
        <button onClick={plus}>+</button>
        <h2>{test.num}</h2>
        <button onClick={minus}>-</button>
    </div>
  )
}

export default Header