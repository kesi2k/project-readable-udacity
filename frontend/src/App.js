import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories'
import Posts from './components/Posts'
import NewPost from './components/NewPost'
import { Route, Link } from 'react-router-dom';




class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">    
          <h1 className="App-title">Kesi's Reddit clone in reactRedux </h1>
        </header>

          <Route exact path='/' render={ () => (
            <div>
              <Categories/>
              <Posts />
            </div>
            )} />

          <Route exact path='/newpost' render= { () => (
            <NewPost/>
            )} />

      </div>
    );
  }
}

export default App;
