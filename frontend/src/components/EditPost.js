import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { Route, Link } from 'react-router-dom';
import {  editPost } from '../actions/actionPosts.js'
import { Field, reduxForm } from 'redux-form';
import { reducer as formReducer } from 'redux-form'
import { editSpecificPost, getPostById } from '../utils/ServerAPI'



class EditPost extends Component
{
  // TODO: Add category selection. No place in the server setup to handle it. Ill leave it out.

  // Field object passed in contains event handlers that lets Form track this component.

  renderField(field)
  {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ""}`

    // Three states in redux internally: Pristine, Touched and Invalid
    return(
      <div className={className}>
        <label> {field.label} </label>
          <input
            className="form-control input-group"
            type="text"
            {...field.input}
          />
          <div className="text-help">
            {field.meta.touched ? field.meta.error : ""}
          </div>
      </div>
      )
  }



  componentWillMount()
  {
    //const id = this.props.match.params.id
    //console.log('In component will mount',id)
    //this.props.getSpecificPost(id);
  }


componentDidMount(){

  console.log('In component did mount',this.props.post)

  const id = this.props.match.params.id

  this.props.getPostById(id, (post) => {
    if(post){
      const initData = {
        title: post.title,
        body: post.body,
      };
      this.props.initialize(initData);
    }

  });


}





  onSubmit(values)
  {
    // Route (root index.js file) passes in properties to a component rendered in it. History is one such prop
    let id = this.props.post.id
    console.log(values)
    console.log('In submit', values)



    
    this.props.editSpecificPost(id, values, () => {
      this.props.history.push('/');
    });

  }




  render()
{
    // onSubmit is our function that will submit data to server once handleSubmit is finished handling its stuff properly
    // onSubmit.bind(this) will bind the properties of the component with onSubmit
    const { handleSubmit } = this.props
    const post = this.props.post
    console.log('In render', post)

    if(!post){
      return (
        <h3> Loading </h3>
        )
    }

    return (
          <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}
              >
              <Field
                label="Title"
                name="title"
                component={this.renderField}
               />
              <Field
                label="Body"
                name="body"
                component={this.renderField}
              />
              <button type="submit" className="btn btn-primary" style={{"marginRight": 10}}> Submit</button>
              <Link to="/"><button className="btn btn-warning"> Cancel</button></Link>
            </form>
          </div>
          )
  }

}

function validate(values)
{
  // values { title: 'blabla', categories:'blabla', content:'blabla'}
  const errors = {}

  // Validate inputs from values
  if(!values.title || values.title.length < 3)
  {
    errors.title= "A title longer than 3 characters is required"
  }
  if(!values.body)
  {
    errors.body="A category is required"
  }

  // If errors is empty, fine to submit form.
  return errors

}


function mapStateToProps(state, ownProps)
{
  //console.log('In mapStToP', state.postsReducer[ownProps.match.params.id])
  return {
    post: state.postsReducer[ownProps.match.params.id]
  }
}

export default reduxForm({
  validate: validate,
  form: 'EditForm'
})(connect(mapStateToProps, { editSpecificPost, getPostById })(EditPost))