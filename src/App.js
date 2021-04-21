import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core/';
import Todo from './Todo'
import db from './firebase'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // When the application reloads, we need to listen to database and fetch
  // new todos as they get added or removed
  // useEffect(() => {
  //   setTodos()
  // }, []);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput(""); 
  }

  return (
    <div className="App">
      <h1>Hello aaRPee... Let's take down your tasks :) </h1> 
      <form>
      <FormControl>
        <InputLabel>Note down a task</InputLabel>
        <Input value = {input} onChange = {event => setInput(event.target.value)} />
      </FormControl>

      
        <Button disabled = {!input} type = "submit" variant="contained" color="primary" onClick = {addTodo}>
          Add Todo
        </Button>
        <ul>
          {todos.map(todo => (
            <Todo text = {todo} />
          ))}
        </ul>
        </form>
    </div>
  );
}

export default App;
