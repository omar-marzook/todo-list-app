import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";

class Register extends Component {
  render() {
    return (
      <section className="reg-page">
        <header className="title">
          <img className="todo-logo" src={logo} alt="todo list logo" />
          <div className="title-text" tabIndex="1">
            <h1>TODO LIST</h1>
            <h2>Be More Productive</h2>
          </div>
        </header>
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
              <Link to="/" className="reg-submit" type="submit">
                Register <span>></span>
              </Link>
            </label>
            <p className="notice">
              Have an account?
              <Link to="/login" className="link">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </section>
    );
  }
}

export default Register;
