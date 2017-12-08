import React, { Component } from 'react'
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getPosts } from '../actions/actionAllPosts.js'


class AllPosts extends Component {
  componentWillMount(){
    this.props.getPosts()
  }

  render(){
    const { posts } = this.props.posts
    return (
      <div>
        <h1> Posts</h1>
          {posts === undefined
            ? <h4> Posts Loading</h4>
            :
              <ul style={{"listStyle":"none"}}>
                {posts.map((post) => (
                  <li key = {post.id} style={{"margin-bottom": 25}}>
                    {post.title}
                  </li>
                  )
                  )}
              </ul>
          }
      </div>
    )
  }
}

function mapSateToProps(state){
  return {posts: state}

}


export default connect(mapSateToProps, { getPosts })(AllPosts)