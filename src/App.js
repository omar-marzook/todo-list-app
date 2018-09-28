import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Input from "./Input.js";

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

  hideInput = () => {
    this.setState({ visibility: "hidden" });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    let task = this.state.value;
    this.setState({
      todoList: [...this.state.todoList, task],
      value: ""
    });
  };

  render() {
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

        <main className="main">
          <section className="todo-list">
            <header className="boxes-header">
              <h2>TODO ITEMS</h2>
              <button
                className="add-btn"
                onClick={() => {
                  this.showInput();
                }}
              >
                ADD
              </button>
            </header>
            <ul className="todo-items">
              {this.state.todoList.map(todo => (
                <li className="item-list" key={Date.now() * Math.random()}>
                  {todo}
                </li>
              ))}
            </ul>
          </section>

          <section className="done-list">
            <header className="boxes-header">
              <h2>DONE ITEMS</h2>
            </header>
            <ul className="done-items">
              {this.state.doneList.map(done => (
                <li className="item-list" key={Date.now() * Math.random()}>
                  {done}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
