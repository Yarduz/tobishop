import React from 'react';
import './App.css';
import MyContext from './myContext';

const myData = {}

function App() {
  return (
    <MyContext.Provider value={myData}>
      <div className="App">
        <h1>lets go</h1>
      </div>
    </MyContext.Provider>
  );
}

export default App;
