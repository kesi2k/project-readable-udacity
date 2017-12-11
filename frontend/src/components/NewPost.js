import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getPosts } from '../actions/actionAllPosts.js'
import { Route, Link } from 'react-router-dom';


class NewPost extends Component {

  render(){
    return (
      <div style={{"marginTop": 20}}>
        <form>

          <input type="radio" name="category" value="male"/> React
          <input type="radio" name="category" value="female"/> Redux
          <input type="radio" name="category" value="other" style={{"marginBottom": 10}}/> Udacity 

          <br/>
          <input type='text' name='title' placeholder='Title here'style={{"marginBottom": 10}}/>
          <br/>
          <textarea name='body' cols="40" rows="5" placeholder='Post details' style={{"marginBottom": 10}}>
          </textarea>
          <br/>
          <input type='text' name='user' placeholder='UserName' style={{"marginBottom": 50}}/>
          <br/>
          <button style={{"marginBottom": 5}}>Submit Post</button>
          <br/>
          <Link to='/'>
            Front Page/Cancel
          </Link>
        </form>              
      </div >
    )
  }
}

export default NewPost