import React, { Component } from "react";
import logo from "./logo.svg";

class Register extends Component {
  render() {
    return (
      <section className="reg-page">
        <div className="title">
          <img className="todo-logo" src={logo} alt="todo list logo" />
          <div className="title-text" tabIndex="1">
            <h1>TODO LIST</h1>
            <h2>Be More Productive</h2>
          </div>
        </div>
        <div className="reg-form">
          <form>
            <label>
              <input type="text" placeholder="Name" name="Name" required />
              <input type="text" placeholder="Email" name="email" required />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
              <button className="reg-submit" type="submit">
                Register <span>></span>
              </button>
            </label>
            <p className="notice">
              Have an account? <a className="link">Login here</a>
            </p>
          </form>
        </div>
      </section>
    );
  }
}

export default Register;
