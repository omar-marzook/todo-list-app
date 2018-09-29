import React, { Component } from "react";

class TodoLists extends Component {
  render() {
    return (
      <main className="main">
        <section className="todo-list">
          <header className="boxes-header">
            <h2 tabIndex="1">TODO ITEMS</h2>
            <button
              className="add-btn"
              tabIndex="2"
              aria-label="add new task"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {
                this.props.showInput();
              }}
            >
              ADD
            </button>
          </header>
          <ul className="todo-items">
            {this.props.todoList.map((todo, index) => (
              <li className="item-list" key={Date.now() * Math.random()}>
                <a
                  className="item-text"
                  tabIndex="3"
                  aria-label="Select to consider the task done"
                  onClick={() => {
                    this.props.endTask(index);
                  }}
                  onKeyPress={() => {
                    this.props.endTask(index);
                  }}
                >
                  {todo}
                </a>
                <button
                  className="del-task"
                  tabIndex="3"
                  aria-label="delete task"
                  onClick={() => {
                    this.props.removeTodo(index);
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="done-list">
          <header className="boxes-header">
            <h2 tabIndex="1">DONE ITEMS</h2>
          </header>
          <ul className="done-items">
            {this.props.doneList.map((done, index) => (
              <li className="item-list" key={Date.now() * Math.random()}>
                <a
                  className="item-text"
                  tabIndex="3"
                  aria-label="Select to consider the task as a task"
                  onClick={() => {
                    this.props.recoverTask(index);
                  }}
                  onKeyPress={() => {
                    this.props.recoverTask(index);
                  }}
                >
                  {done}
                </a>
                <button
                  className="del-task"
                  tabIndex="3"
                  aria-label="delete finished task"
                  onClick={() => {
                    this.props.removeDone(index);
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default TodoLists;
