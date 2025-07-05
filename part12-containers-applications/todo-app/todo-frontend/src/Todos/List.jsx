import React from 'react'
import Todo from './Todo.jsx'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  
  return (
    <>
      {todos.map(todo => 
       <Todo key = {todo.id} todo = {todo} deleteTodo = {deleteTodo} completeTodo = {completeTodo}/> 
      ).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
