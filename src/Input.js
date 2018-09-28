import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div
        id="popup"
        className="popup"
        style={{ visibility: this.props.visibility }}
      >
        <form className="add-window">
          <input
            className="input"
            type="text"
            placeholder="Task"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <div className="form-btns">
            <button className="cancel" onClick={this.props.hideInput}>
              Cancel <span> X </span>
            </button>
            <button className="save" onClick={this.props.addTodo}>
              Save <span> > </span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
