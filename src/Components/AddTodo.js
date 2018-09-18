import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input value={this.props.value} onChange={this.props.handleChange} type="text"/>
        <button>Submit</button>
      </form>
    );
  }

}

export default AddTodo;
