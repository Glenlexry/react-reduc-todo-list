import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo,index)=> <Todo todo={todo} key={index} />)}
  </ul>
);

export default TodoList;
