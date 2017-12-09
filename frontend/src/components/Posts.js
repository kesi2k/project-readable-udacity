import React, { Component } from 'react'
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getPosts } from '../actions/actionAllPosts.js'


class AllPosts extends Component {

    state = {
    newPostModal: false
  }

  addPost = function()
  {
    console.log('Works')
  }


  componentWillMount(){
    this.props.getPosts()
  }

  render(){
    const { posts } = this.props.posts
    return (
      <div style={{"margin-top": 70}}>
        <h1> Posts</h1>
          {posts === undefined
            ? <h4> Posts Loading</h4>
            :
              <div>
                <ul style={{"listStyle":"none"}}>
                  {posts.map((post) => (
                    <div key = {post.id}>
                      <h3 style={{"margin-top": 40}} >Category: {post.category}</h3>
                      <li style={{"margin-bottom": 25}}>
                        {post.title}
                      </li>
                      <p> {post.body} </p>
                    </div>
                    )
                    )}
                </ul>
                <button className='icon-btn' onClick={this.addPost} style={{"margin-bottom": 50}}>
                  Add Post
                </button>
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