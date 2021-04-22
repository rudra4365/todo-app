import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core/';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // When the application reloads, we need to listen to database and fetch
  // new todos as they get added or removed
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo}))) // Fetching data from firebase database
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //stop from reloading

    db.collection('todos').add({ // appending in the firebase database
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input]); // append input at end of todos array
    setInput("");  // empty the input
  }

  return (
    <div className="App">
      <h1>{"Hello aaRPee... Let's take down your tasks 😃"} </h1> 
      <form>
      <FormControl>
        <InputLabel>Note down a task</InputLabel>
        <Input value = {input} onChange = {event => setInput(event.target.value)} />
      </FormControl>

      
        <Button disabled = {!input} type = "submit" variant="contained" color="primary" onClick = {addTodo}>
          {"Add Todo"}
        </Button>
        <ul>
          {todos.map(todo => (
            <Todo todo = {todo} />
          ))}
        </ul>
        </form>
    </div>
  );
}

export default App;
