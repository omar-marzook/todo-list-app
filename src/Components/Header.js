import React, { Component } from "react";
import logo from "./../logo.svg";

class Header extends Component {
  render() {
    return <header className="header">
        <div className="title">
          <img className="todo-logo" src={logo} alt="todo list logo" />
          <div className="title-text" tabIndex="1">
            <h1>TODO LIST</h1>
            <h2>Be More Productive</h2>
          </div>
        </div>
        <div className="avatar" tabIndex="1" aria-label="account avatar">
          <div className="avatar-img" />
          <div className="avatar-info">
            <h3>Mohamed Atef</h3>
            <h3>atef@example.com</h3>
          </div>
        </div>
      </header>;
  }
}

export default Header;
