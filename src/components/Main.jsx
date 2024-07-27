import React, { useContext } from 'react'
import { ContextApi } from '../store';
import { useSelector } from 'react-redux';

const Main = () => {
  const {todo} = useSelector((prev)=>prev.todo)
    console.log(todo);
  return (
    <div>
    </div>
  )
}

export default Main