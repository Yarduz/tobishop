import React from 'react';
import './App.css';
import MyContext from './myContext';
import AppRouter from "./components/pages/AppRouter";

const myData = {}

function App() {
  return (
    <MyContext.Provider value={myData}>
      <div className="App">
        <h1>let's go</h1>
        <AppRouter/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
