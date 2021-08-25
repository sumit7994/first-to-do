// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './Mycomponents/Header';
import { Todos } from './Mycomponents/Todos';
import { Footer } from './Mycomponents/Footer';
import { Addtodo } from './Mycomponents/Addtodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from './Mycomponents/About';

function App() {



  const [todos, setTodos] = useState([
    {
      todo: "Go to Market",
      SNo: 1,
      desc: "Buy Clothes"
    },
    {
      todo: "Go to Mandi",
      SNo: 2,
      desc: "buy Vegetables"
    },
    {
      todo: "Go for Vacation",
      SNo: 3,
      desc: "GO to Camping"
    }
  ])

  function addTodo(title, desc) {
    let uniqueN;
    if (todos.length === 0) {
      uniqueN = 1;
    } else {
      uniqueN = todos[todos.length - 1].SNo + 1;
    }

    const newTodo = {
      todo: title,
      SNo: uniqueN,
      desc: desc
    }
    console.log(title, desc)
    setTodos([...todos, newTodo]);
  }

  function deleteTask(id) {
    console.log("Deleted", id)
    setTodos(todos.filter((todo) => {
      return todo.SNo !== id
    }))
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos} deleteTask={deleteTask} />
              </>
            )
          }}></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
