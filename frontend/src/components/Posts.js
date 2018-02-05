import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getPosts, getPostsByCats } from '../actions/actionPosts.js'
import { Route, Link } from 'react-router-dom';
import { deletePost } from '../utils/ServerAPI'

//import { toUTCString } from 'datejs';


class AllPosts extends Component {

    state = {
    
  }

  deletePostButton(postId) {
    console.log('In deletePostButt function', postId)
    this.props.deletePost(postId, () => {
      this.props.history.push('/');
    });
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

    const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
    );

    return (
      <div style={{"marginTop": 70}}>
        <h1> Posts</h1>
          {posts === undefined
            ? <h4> Posts Loading</h4>
            :
              <div >


                <ul style={{"listStyle":"none"}}>
                  {posts.map((post) => (

                    <div className="col-md-12 col-lg-12" key = {post.id} style={{"marginBottom": 50}}>

                      <div className="col-md-6 col-lg-6">
                        <h3 style={{"marginTop": 40}} >Category: {post.category}</h3>
                        <li style={{"marginBottom": 25}}>
                          {post.title}
                        </li>
                        <p> {post.body} </p>
                        <p> Author: { post.author } </p>
                        <p> {new Date(post.timestamp).toUTCString() } </p>
                        <Link to={'/posts/'+post.id}>
                          <button className="btn btn-warning">
                            Edit Post
                          </button>
                        </Link>
                        <button className="btn btn-danger" style={{"marginLeft": 10}}  onClick={ () => this.deletePostButton(post.id)}>
                          Delete Post
                        </button>
                      </div>

                      <div className="col-md-6 col-lg-6">
                        <p style={{"marginTop": 70}}> Comment Count: { post.commentCount } </p>
                        <p style={{"marginTop": 40}}> Post Vote:{ post.voteScore } </p>
                        <Link to={'/' + post.category + '/' +post.id}>
                          <p> Link to post and comments. </p>
                        </Link>
                      </div>           

                    </div>

                    )
                    )}
                </ul>
                <div style={{"marginBottom": 75, "marginTop": 50}}>
                  <Link to='/newpost'>
                    <button className="btn btn-primary">
                     Add Post
                    </button>
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


export default connect(mapSateToProps, { getPosts, getPostsByCats, deletePost })(AllPosts)