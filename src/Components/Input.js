import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div
        id="popup"
        className="popup"
        style={{ visibility: this.props.visibility }}
      >
        <form className="add-window" tabIndex="-1" role="dialog">
          <input
            className="input"
            type="text"
            tabIndex="3"
            aria-label="add new task input"
            placeholder="Task"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <div className="form-btns">
            <button
              className="cancel"
              tabIndex="3"
              data-control="close"
              aria-label="Close Modal Window"
              onClick={this.props.hideInput}
            >
              Cancel <span tab-index="-1"> X </span>
            </button>
            <button
              className="save"
              tabIndex="3"
              data-control="save"
              aria-label="Save Modal Window"
              onClick={this.props.addTodo}
            >
              Save <span tab-index="-1"> > </span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
