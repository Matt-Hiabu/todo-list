import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [todoListArray, setTodoListArray] = useState([]);

  return (
    <div className="App">
      <Form todoListArray={todoListArray} setTodoListArray={setTodoListArray}/>
      <Display todoListArray={todoListArray} setTodoListArray={setTodoListArray}/>
    </div>
  );
}

export default App;
