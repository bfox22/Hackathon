import React, { Component } from "react";
import './App.css';
import Form from './form.js';

class App extends Component {
   
  onSubmit = fields => {
  this.setState({ fields })  
};

  render(){
  return (
    <div className="App">
      <h1>I Know What I Saw Last Summer</h1>
      <Form onSubmit={fields => this.onSubmit(fields)}/>
    </div>
    );
  }
}

export default App;
