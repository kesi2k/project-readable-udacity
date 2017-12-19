import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getPosts } from '../actions/actionPosts.js'
import { Route, Link } from 'react-router-dom';


class AllPosts extends Component {

    state = {
    
  }


  componentWillMount(){
    this.props.getPosts()
  }

  render(){
    const { posts } = this.props.posts
    return (
      <div style={{"marginTop": 70}}>
        <h1> Posts</h1>
          {posts === undefined
            ? <h4> Posts Loading</h4>
            :
              <div >
                <ul style={{"listStyle":"none"}}>
                  {posts.map((post) => (
                    <div key = {post.id}>
                      <h3 style={{"marginTop": 40}} >Category: {post.category}</h3>
                      <li style={{"marginBottom": 25}}>
                        {post.title}
                      </li>
                      <p> {post.body} </p>
                    </div>
                    )
                    )}
                </ul>
                <div style={{"marginBottom": 25}}>
                  <Link to='/newpost'>
                    Add Post
                  </Link>
                </div>
              </div>
          }
      </div>
    )
  }
}

function mapSateToProps(state){
  console.log(state)
  return {posts: state.postsReducer}

}


export default connect(mapSateToProps, { getPosts })(AllPosts)