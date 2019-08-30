import React from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <ParentComp></ParentComp>
      {/*
      <FunctionClick></FunctionClick>
      <Counter></Counter>
      <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
          <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"></Greet>
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Diana" heroName="Wonder Woman"></Welcome>
      <Message></Message>
      <Greet name="Diana" heroName="Wonder Woman"></Greet>
      <Welcome name="Clark" heroName="Superman"></Welcome>
      */}
    </div>
  );
}

export default App