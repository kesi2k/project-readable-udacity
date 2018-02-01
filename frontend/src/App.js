import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories'
import Posts from './components/Posts'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import { Route, Link, Switch } from 'react-router-dom';




class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">    
          <h1 className="App-title">Kesi's Reddit clone in reactRedux </h1>
        </header>

        <Categories />


          <Switch>
           <Route exact path='/' component={props => <Posts {...props} />}
            />
            
            <Route exact path='/newpost' component={props => <NewPost {...props} />} 
            />

            <Route exact path='/:cat' component={props => <Posts {...props} />} 
            />

            <Route exact path='/posts/:id' component={props => <EditPost {...props}/>} 
            />
          </Switch>

      </div>
    );
  }
}

export default App;
