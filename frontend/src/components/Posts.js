import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getPosts, getPostsByCats, sortPosts } from '../actions/actionPosts.js'
import { Route, Link } from 'react-router-dom';
import { deletePost, vote } from '../utils/ServerAPI'
import _ from 'lodash';

//import { toUTCString } from 'datejs';


class AllPosts extends Component {

    state = {
    
  }

  deletePostButton(postId) {
    //console.log('In deletePostButt function', postId)
    this.props.deletePost(postId, () => {
      this.props.history.push('/');
    });
  }

  votePostButton(postId, voteType){
    //console.log('In likePostBut function', postId, voteType)
    this.props.vote(postId, voteType, () => {
      this.props.history.push('/');
    });

  }

  sortPostsButton(sortBy){
    // Call action, then action to reducer, new sorted state(whether by votes or date) produced and re-render stuff
    // posts = _.sortBy(posts, ['voteScore'])
    this.props.sortPosts(sortBy);



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
    const sortedPostsArgu  =this.props.sortedPostsArgu
    const sortedPosts = _.sortBy(posts, [sortedPostsArgu]).reverse()
    

    if(posts)
    {
      //console.log('In comments render', sortedPosts)
    }

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
        <div className="col-md-6 col-lg-6">
          <h1> Posts</h1>
        </div>
        <div className="col-md-6 col-lg-6">

            <button className="btn btn-primary"  onClick={ () => this.sortPostsButton('voteScore')}>
              Sort by Votes
            </button>


            <button className="btn btn-primary "  style={{"marginLeft": 10}} onClick={ () => this.sortPostsButton('timestamp')}>
              Sort by Time
            </button>
        </div>

            {posts === undefined
              ? <h4> Posts Loading</h4>
              :

                <div >

                  <ul style={{"listStyle":"none"}}>
                    {sortedPosts.map((post) => (

                      <div className="col-md-12 col-lg-12" key = {post.id} style={{"marginBottom": 50}}>

                        <div className="col-md-6 col-lg-6">
                          <h3 style={{"marginTop": 40}} >Category: {post.category}</h3>
                          <li style={{"marginBottom": 25}}>
                            {post.title}
                          </li>
                          <p> {post.body} </p>
                          <p> Author: { post.author } </p>
                          <p> {new Date(post.timestamp).toUTCString() } </p>

                          <div>
                            <Link to={'/posts/'+post.id}>
                              <button className="btn btn-warning">
                                Edit Post
                              </button>
                            </Link>
                            <button className="btn btn-danger" style={{"marginLeft": 10}}  onClick={ () => this.deletePostButton(post.id)}>
                              Delete Post
                            </button>
                          </div>

                          <div style={{"marginTop": 10}}>
                            <button className="btn btn-primary"  onClick={ () => this.votePostButton(post.id, 'upVote')}>
                              Like Post
                            </button>
                            <button className="btn btn-danger"  style={{"marginLeft": 10}} onClick={ () => this.votePostButton(post.id, 'downVote')}>
                              Unlike Post
                            </button>
                          </div>

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
  return { sortedPostsArgu: state.sortReducer, posts: state.postsReducer}

}


export default connect(mapSateToProps, { getPosts, getPostsByCats, deletePost, vote, sortPosts })(AllPosts)