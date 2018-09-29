import React, { Component } from "react";
import logo from "./../logo.svg";

class Login extends Component {
  render() {
    return (
      <section className="login-page">
        <header className="title">
          <img className="todo-logo" src={logo} alt="todo list logo" />
          <div className="title-text" tabIndex="1">
            <h1>TODO LIST</h1>
            <h2>Be More Productive</h2>
          </div>
        </header>
        <div className="login-form">
          <form>
            <label>
              <input type="text" placeholder="Email" name="email" required />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
              <button className="login-submit" type="submit">
                Login <span>></span>
              </button>
            </label>
            <p className="notice">
              Not registered? <a className="link">Create an accout</a>
            </p>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
