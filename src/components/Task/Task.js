import React from 'react';
import Card from '../Card/Card';
import './Task.css';

class Task extends React.Component {
 state = {
  todoItems: [],
  newTodo: ''
}

handleChange = (e) => {
  this.setState({ newTodo: e.target.value })
  console.log(e.target.value);
}

handleSubmit = (e) => {
  e.preventDefault();
  this.setState((prevState)=>{
    return {todoItems: prevState.todoItems.concat(this.state.newTodo),
            newTodo: ''}});
}

componentDidUpdate(prevProps, prevState){
  if(prevState.todoItems.length !== this.state.todoItems.length){
    localStorage.setItem('todoItems', JSON.stringify(this.state.todoItems))
  }
}

componentDidMount(){
  if(localStorage.getItem('todoItems') !== null){
    this.setState({todoItems: JSON.parse(localStorage.getItem('todoItems'))})
  }
}

render(){

 return (
  <div id="task">
   <form onSubmit={this.handleSubmit}>
    <label>Todo TaskBar</label><br></br>
    <input type="text" name="todo-item"
     value={this.state.newTodo}
     onChange={this.handleChange}
     placeholder='write your task here'>
       </input>
    <button>submit</button>
   </form>
    <Card individualItems={this.state.todoItems} />
  </div>
 )
}}

export default Task;


