import React from 'react';
import './App.css';
import MyContext from './myContext';
import AppRouter from "./components/pages/AppRouter"
import AboutUs from './components/pages/AboutUs';
import HomePage from './components/pages/HomePage';

const myData = {}

function App() {
  return (
    <MyContext.Provider value={myData}>
      <div className="App">
        <AppRouter></AppRouter>
        <h1>lets go</h1>
      </div>
    </MyContext.Provider>
  );
}

export default App;
