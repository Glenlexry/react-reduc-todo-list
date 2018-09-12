import React from 'react';

const TodoList = props => {
  return (
    <ul>
      {props.todoItems.map((items,index)=> <li key={index}>{items}</li>)}
    </ul>
  )
}

export default TodoList;
