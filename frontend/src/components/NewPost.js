import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getCategories } from '../actions/actionCategories.js'
import { Route, Link } from 'react-router-dom';
import { addPost } from '../actions/actionPosts.js'

var errors = {};


class Errors extends Component {

  render(){
    return(
      <div style={{"color": "red"}}>
        <h3> Fields required </h3>
        <h4 > {errors.title} </h4>
        <h4> {errors.body} </h4>
        <h4> {errors.author} </h4>
      </div>
      )
  }
}



class NewPost extends Component {

constructor(props){
  super(props);
  this.state = {
    title: '',
    body:'',
    author: '',
    category: 'react',
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


validateForm(){
  errors = {}

  if (!this.state.title) {
    errors.title = 'Title missing';
  }
  if (!this.state.body) {
    errors.body = 'Post missing';
  }
  if (!this.state.author) {
    errors.author = 'User missing';
  }


  // Form missing info mount errors Component
  if(Object.keys(errors).length > 0){
    // Mount errors component
    ReactDOM.render(
              <Errors />,
              document.getElementById('errorHere')
              )
  }
  else
  {
    ReactDOM.unmountComponentAtNode(document.getElementById('errorHere'))
    return true
  }
  

}


componentWillMount(){
    this.props.getCategories()
  }



 handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault()

    //Validate all info is in form, then submit to server and clear state
    if(this.validateForm())
    {
      this.props.addPost(this.state)

      this.setState({ 
      title: '',
      body:'',
      author: '',
    })

    }
    
   //console.log (this.state)
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

        <div id="errorHere"></div>

        <form onSubmit={this.handleSubmit}>

        {cats === undefined
            ? <h4> Categories Loading</h4>
            :
              <div>
               Category:
                <select onChange={this.handleChange} value={this.name} name="category">
                  {cats.map((cat) => (
                      <option key = {cat.path} style={{"marginBottom": 25}} >
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
                  <textarea className="form-control input-group" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
              </label>
          <br />
          <br/>
              <label>
                  Post:
                  <textarea className="form-control input-group" placeholder="Post" name="body" value={this.state.body} onChange={this.handleChange}/>
              </label>
          <br/>
          <br/>
              <label>
                User Name:
                <textarea className="form-control input-group" placeholder="User Name" name="author" value={this.state.author} onChange={this.handleChange} />
              </label>
          <br/>
          <br/>

          <button className="btn btn-primary" style={{"marginBottom": 5}}>Submit Post</button>
          <br/>

          <Link to='/'>
            <button className="btn btn-warning">
              Front Page/Cancel
            </button>
          </Link>
        </form>              
      </div >
    )
  }
}

function mapSateToProps(state){
  return {categories: state.catsReducer}

}

export default connect(mapSateToProps, { getCategories, addPost })(NewPost) 