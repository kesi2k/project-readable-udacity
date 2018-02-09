import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { addCommentToServer } from '../actions/actionComments';
import { connect } from 'react-redux';




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


class NewComment extends Component
{

	constructor(props){
  super(props);
  this.state = {
    body:'',
    author: ''
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


validateForm(){
  errors = {}


  if (!this.state.body) {
    errors.body = 'Comment missing';
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
    //this.props.getCategories()
  }



 handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault()

    //Validate all info is in form, then submit to server and clear state
    if(this.validateForm())
    {
    	// SUBMIT COMMENT TO SERVER HERE
      this.props.addCommentToServer(this.state, this.props.match.params.id)

      this.setState({ 
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
	render()
	{
		const id = this.props.match.params.id
		const cat = this.props.match.params.cat

		return(

		      <div style={{"marginTop": 20}}>

		        <div id="errorHere"></div>

		        <form onSubmit={this.handleSubmit}>

		          <br/>
		              <label>
		                  Comment:
		                  <textarea className="form-control input-group" placeholder="Comment" name="body" value={this.state.body} onChange={this.handleChange}/>
		              </label>
		          <br/>
		          <br/>
		              <label>
		                User Name:
		                <textarea className="form-control input-group" placeholder="User Name" name="author" value={this.state.author} onChange={this.handleChange} />
		              </label>
		          <br/>
		          <br/>

		          <button className="btn btn-primary" style={{"marginBottom": 5}}>Submit Comment</button>
		          <br/>

		          <Link to={`/${cat}/${id}`}>
		            <button className="btn btn-warning">
		              Return to Comment/Cancel
		            </button>
		          </Link>
		        </form>              
		      </div >
			)

	}
}

export default connect(null, {addCommentToServer} )(NewComment) 