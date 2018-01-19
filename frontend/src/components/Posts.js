import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getPosts, getPostsByCats } from '../actions/actionPosts.js'
import { Route, Link } from 'react-router-dom';
//import { toUTCString } from 'datejs';


class AllPosts extends Component {

    state = {
    
  }


  componentWillMount(){
    // If props came in with a category use this API else use other
    if(this.props.match.params.cat)
    {
      this.props.getPostsByCats(this.props.match.params.cat)
    }
    else
    {
      this.props.getPosts()
    }
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
                      <p> {new Date(post.timestamp).toUTCString() } </p>
                      <Link to={'/posts/'+post.id}>
                        Edit Post
                      </Link>
                    </div>
                    )
                    )}
                </ul>
                <div style={{"marginBottom": 75, "marginTop": 50}}>
                  <Link to='/newpost'>
                    Add Post
                  </Link>
                  {this.props.match.params.cat 
                    ?
                    <div>
                      <br/>
                      <Link to='/'>
                        Front Page
                      </Link>
                    </div>
                    : null
                  }
                </div>
              </div>
          }
      </div>
    )
  }
}

function mapSateToProps(state){
  return {posts: state.postsReducer}

}


export default connect(mapSateToProps, { getPosts, getPostsByCats })(AllPosts)