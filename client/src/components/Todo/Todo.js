import React, {useEffect, useContext } from "react";
import "./todo.scss";
import todoContext from '../../utils/todoContext/todoContext'
import TodoCard from '../TodoCard/TodoCard'

function Todo(props) {
  const {state, dispatch} = useContext(todoContext)

  

  const formhandler = (e) => {
    e.preventDefault();
    const{
      todoName:{value:todoName},
      todoTextarea:{value:todoTextarea},
    }= e.target
    formhandler && fetch(`${process.env.REACT_APP_TODO}/addTodo`,{
      method:"POST",
      headers:{
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        todoName,todoTextarea
      })
    })
    .then(res=>res.json())
    // .then(data=> console.log(data))
    .then(data=>dispatch({type:"ADDONE", payload:data.newTodo}))
  };


  return (
    <section className="Todo">
      <div className="container">
        <div className="Todo-box">
          <form className="form" onSubmit={formhandler}>
            <div className="form-input">
              <input className="form-control" name="todoName" type="text" placeholder="todo" />
              <div className="form-textarea">
                <textarea
                
                  className="form-control form-textarea"
                  type="text"
                  name="todoTextarea"
                  placeholder="about"
                  rows="3"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary todo-btn">
              Submit
            </button>
          </form>
          <div className="todo-card">
            <TodoCard />
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default Todo;
