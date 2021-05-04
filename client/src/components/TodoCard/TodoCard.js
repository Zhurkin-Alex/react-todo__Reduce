import React, { useEffect, useContext } from 'react';
import todoContext from '../../utils/todoContext/todoContext'
import TodoItem from '../TodoItem/TodoItem'
import './TodoCard.scss'

function TodoCard(props) {
  const{state, dispatch}= useContext(todoContext)

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_TODO}/findAll`)
    .then(res=>res.json())
    .then(data=> dispatch({type:"ADDALL", payload:data.allTodo}))
  },[])


  return (
    <div className="todoCard-box">
      {
        state && state.list.map(el=> <TodoItem key={el._id} todo={el}/>)
      }
    </div>
  );
}

export default TodoCard;
