import React, {useState} from 'react';
import './App.css';

function App() {

const [todos, setTodos] = useState(["Buy shopping", "Clean bathroom", "Car's MOT"])

const [newTodo, setNewTodo] = useState("")

const todoNodes = todos.map((todo, index) => {
  return(
    <li key={index}>
      <span>{todo}</span>
    </li>
  )
})

const handleTodoInput = (evt) => {
  setNewTodo(evt.target.value)
}

const saveNewTodo = (event) => {
  event.preventDefault();
  const copyTodo = [...todos]
  copyTodo.push(newTodo)
  setTodos(copyTodo)
  setNewTodo("")
}

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <hr></hr>
      <form onSubmit={saveNewTodo}>
        <label htmlFor='new-todo'>Add a new todo: </label>
        <input id='new-todo' type='text' onChange={handleTodoInput}></input>
        <input type='submit' value='Save new Todo'></input>
      </form>
      <hr></hr>
      <ul>
        {todoNodes}
      </ul>
    </div>
  );
}

export default App;
