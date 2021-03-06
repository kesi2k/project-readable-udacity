import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import PostDetail from './components/PostDetail';
import Comments from './components/Comments.js';
import NewComment from './components/NewComment.js';
import EditComment from './components/EditComment.js'
import { Route, Link, Switch } from 'react-router-dom';




class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">    
          <h1 className="App-title">Kesi's Reddit clone in reactRedux </h1>
        </header>
          <Switch>
            <Route exact path='/' component={props => <Categories {...props} />}
            />
            <Route exact path='/:cat' component={props => <Categories {...props} />} 
            />
            <Route exact path='/:cat/:id' component={props => <Categories {...props} />}
            />
          </Switch>

          <Switch>
           <Route exact path='/' component={props => <Posts {...props} />}
            />
            
            <Route exact path='/newpost' component={props => <NewPost {...props} />} 
            />

            <Route exact path='/:cat/:id/newcomment' component={props => <NewComment {...props} />} 
            />

            <Route exact path='/:cat' component={props => <Posts {...props} />} 
            />

            <Route exact path='/posts/:id' component={props => <EditPost {...props}/>} 
            />

            <Route exact path='/:cat/:id' component={props => <PostDetail {...props}/>} 
            />


            <Route exact path='/:cat/:id/editComment/:id' component={props => <EditComment {...props}/>} 
            />


          </Switch>
            <Route exact path='/:cat/:id' component={props => <Comments {...props}/>} 
            />

          <Switch>

          </Switch>

      </div>
    );
  }
}

export default App;
