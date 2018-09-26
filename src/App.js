import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  render() {
    return(
      <div>
        <Header/>

        <main className="main">
          <section className="todo-list">
            <header className="boxes-header">
              <h2>TODO ITEMS</h2>
              <button className="add-btn">ADD</button>
            </header>
            <ul>
              <li className="item-list">65464</li>
              <li className="item-list">65464</li>
            </ul>
          </section>

          <section className="done-list">
            <header className="boxes-header">
              <h2>DONE ITEMS</h2>
            </header>
            <ul>
              <li className="item-list">65464</li>
              <li className="item-list">65464</li>
            </ul>
          </section>
        </main>

      </div>
      );
  }
}

export default App;
