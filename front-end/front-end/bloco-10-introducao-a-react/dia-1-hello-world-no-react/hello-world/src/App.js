import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['estudar', 'praticar', 'medico', 'academia']

class App extends React.Component {
  render() {
    return (
      <ol>{ tasks.map((tarefa) => Task(tarefa)) }</ol>
    )
  }
}

// function App() {
//   return (
//     <ol>{ Task('praticar') }</ol>    
//   );
// }

export default App;
