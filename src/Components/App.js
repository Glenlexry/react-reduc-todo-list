import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      todoItems: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleClick(event) {
    this.state.input !== '' ? (this.setState({
      input: '',
      todoItems: [...this.state.todoItems,this.state.input]
    })) : null;
    event.preventDefault();
    document.querySelector('#input').focus();
  }

  componentDidUpdate() {
    console.log(this.state.todoItems);
  }

  render() {
    return (
      <div className="App">
        <input type="text" id="input" onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.handleClick} >Submit</button>
        <TodoList todoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
