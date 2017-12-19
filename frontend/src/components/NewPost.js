import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getCategories } from '../actions/actionCategories.js'
import { Route, Link } from 'react-router-dom';
import { addPost } from '../actions/actionPosts.js'


class NewPost extends Component {

constructor(props){
  super(props);
  this.state = {
    Title: '',
    Post:'',
    UserName: ''
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

}



componentWillMount(){
    this.props.getCategories()
  }



 handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault()

    //Submit info in state to server then route to front page
    addPost(this.state)
   console.log (this.state)


  }

  //keep track of state
  handleChange(e){
    //console.log(e.target)
    //console.log(e.target.value)
    //console.log(e.target.name)
    const val = e.target.value
    const name = e.target.name

    this.setState({
     [name]  : val
    })

  }


  render(){
    const { cats } = this.props.categories
    return (
      <div style={{"marginTop": 20}}>
        <form onSubmit={this.handleSubmit}>

        {cats === undefined
            ? <h4> Categories Loading</h4>
            :
              <div>
               Category:
                <select>
                  {cats.map((cat) => (
                      <option key = {cat.path} value={this.name} style={{"marginBottom": 25}}>
                        {cat.name}
                      </option>
                    )
                    )}
                </select>
              </div>
          }


          <br/>
              <label>
                  Title:
                  <textarea placeholder="Title" name="Title" value={this.state.Title} onChange={this.handleChange} />
              </label>
          <br />
          <br/>
              <label>
                  Post:
                  <textarea placeholder="Post" name="Post" value={this.state.Post} onChange={this.handleChange}/>
              </label>
          <br/>
          <br/>
              <label>
                User Name:
                <textarea placeholder="User Name" name="UserName" value={this.state.UserName} onChange={this.handleChange} />
              </label>
          <br/>
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

function mapSateToProps(state){
  return {categories: state.catsReducer}

}

export default connect(mapSateToProps, { getCategories })(NewPost)