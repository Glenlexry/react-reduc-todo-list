import React, { Component } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { connect } from 'react-redux'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     input: '',
  //     todos: []
  //   }
  // }

  handleChange = () => {
    // this.setState({
    //   input: event.target.value
    // })
    this.props.dispatch({type: 'ON_INPUT_CHANGE'});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.setState({
    //   input: '',
    //   todos: [...this.state.todos,this.state.input]
    // })
    this.props.dispatch({type: 'ADD_TODO'});
  }


  render() {
    return (
      <div>
      <AddTodo
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      value={this.props.input}
      />
      <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  input: state.input,
  todos: state.todos
})

export default connect(mapStatetoProps)(App);
