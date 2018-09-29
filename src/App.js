import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Header from "./Components/Header.js";
import Input from "./Components/Input.js";
import TodoLists from "./Components/TodoLists.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        "Finishing my work",
        "Watching today's football match",
        "2h of studing",
        "Watching a movie"
      ],
      doneList: ["30 min Running", "Checking my mail"],
      value: "",
      visibility: "hidden"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //  Show Input Tasks Dialog
  showInput = () => {
    this.setState({ visibility: "visible" });
  };

  //  Hide Input Tasks Dialog
  hideInput = e => {
    e.preventDefault();
    this.setState({ visibility: "hidden" });
  };

  // Change `value` inside the state on input value change
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  // Add tasks to todo list
  addTodo = e => {
    e.preventDefault();
    let task = this.state.value;
    // Refuse empty input value
    if (task.length === 0) {
      return;
    }
    this.setState({
      todoList: [...this.state.todoList, task],
      value: ""
    });
  };

  // Move Tasks from "Todo List" TO "Done List"
  endTask = index => {
    const todoList = [...this.state.todoList];
    const doneList = [...this.state.doneList];
    doneList.push(todoList[index]);
    todoList.splice(index, 1);
    this.setState({
      todoList: todoList,
      doneList: doneList
    });
  };

  // Move Tasks from "Done List" TO "Todo List"
  recoverTask = index => {
    const todoList = [...this.state.todoList];
    const doneList = [...this.state.doneList];
    todoList.push(doneList[index]);
    doneList.splice(index, 1);
    this.setState({ todoList: todoList, doneList: doneList });
  };

  // Delete Tasks from "Todo List"
  removeTodo = index => {
    const todoList = [...this.state.todoList];
    todoList.splice(index, 1);
    this.setState({ todoList: todoList });
  };

  // Delete Tasks from "Done List"
  removeDone = index => {
    const doneList = [...this.state.doneList];
    doneList.splice(index, 1);
    this.setState({ doneList: doneList });
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <Input
                  visibility={this.state.visibility}
                  hideInput={this.hideInput}
                  value={this.state.value}
                  addTodo={this.addTodo}
                  handleChange={this.handleChange}
                />
                <Header />
                <TodoLists
                  showInput={this.showInput}
                  endTask={this.endTask}
                  todoList={this.state.todoList}
                  removeTodo={this.removeTodo}
                  doneList={this.state.doneList}
                  removeDone={this.removeDone}
                  recoverTask={this.recoverTask}
                />
              </div>
            );
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
