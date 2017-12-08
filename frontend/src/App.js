import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories'
import Posts from './components/Posts'




class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">    
          <h1 className="App-title">Welcome to Kesi's Readable</h1>
        </header>
          <Categories/>
          <Posts />
      </div>
    );
  }
}

export default App;
