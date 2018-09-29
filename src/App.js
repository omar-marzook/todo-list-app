import React, { Component } from "react";
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

  showInput = () => {
    this.setState({ visibility: "visible" });
  };

  hideInput = e => {
    e.preventDefault();
    this.setState({ visibility: "hidden" });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    let task = this.state.value;
    if (task.length === 0) {
      return;
    }
    this.setState({
      todoList: [...this.state.todoList, task],
      value: ""
    });
  };

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

  recoverTask = index => {
    const todoList = [...this.state.todoList];
    const doneList = [...this.state.doneList];
    todoList.push(doneList[index]);
    doneList.splice(index, 1);
    this.setState({ todoList: todoList, doneList: doneList });
  };

  removeTodo = index => {
    const todoList = [...this.state.todoList];
    todoList.splice(index, 1);
    this.setState({ todoList: todoList });
  };

  removeDone = index => {
    const doneList = [...this.state.doneList];
    doneList.splice(index, 1);
    this.setState({ doneList: doneList });
  };

  render() {
    return (
      <div>
        <Login />
        <Register />
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
  }
}

export default App;
