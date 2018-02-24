import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getCommentById, EditSpecificComment } from '../actions/actionComments.js';
import { Field, reduxForm } from 'redux-form';
import { reducer as formReducer } from 'redux-form';






class EditComment extends Component
{

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

	  


	componentDidMount(){

		 // console.log('In component did mount',this.props.post)
		  const id = this.props.match.params.id
		  this.props.getCommentById(id, (comment) => {
		    if(comment){
			      const initData = {
			        body: comment.body,
			      };
			      this.props.initialize(initData);
		    }
		  });
	}

	onSubmit(values)
	{
	    // Route (root index.js file) passes in properties to a component rendered in it. History is one such prop
	    let id = this.props.match.params.id
	    const cat = this.props.match.params.cat
	    //console.log(values)
	    values.timestamp = Date.now();
    
	    this.props.EditSpecificComment(id, values, () => {
	      this.props.history.push('/' + cat + '/' + this.props.comment.parentId);
	    });

	}




	render()
	{
		// onSubmit is our function that will submit data to server once handleSubmit is finished handling its stuff properly
	    // onSubmit.bind(this) will bind the properties of the component with onSubmit
	    const { handleSubmit } = this.props
		//console.log("In edit comment", this.props.comment)


		const cat = this.props.match.params.cat
		const id = this.props.match.params.id
		const comment = this.props.comment

		if(!comment){
	      return (
	      	<div>
		        <h3> Comments Loading </h3>
		        	<Link to='/'>  		
			            <button className="btn btn-warning">
			              Return to Comment/Cancel
			            </button>
				    </Link>
			</div>
	        )
   		}

		return(
			<div>
				<h1> Edit Comment </h1>
	            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}
	              >
	              <Field
	                label="Body"
	                name="body"
	                component={this.renderField}
	              />
	            <button type="submit" className="btn btn-primary"> Submit</button>
				<Link to={'/' + cat + '/' + comment.parentId }>
			           <button className="btn btn-warning" style={{"marginLeft": 10}}>
			              Return to Comment/Cancel
			           </button>
				</Link>
			    </form>
			</div>
			)
	}
}

function mapStateToProps(state, ownProps)
{
  //console.log('In mapStToP', state.postsReducer[ownProps.match.params.id])
  //console.log('In mapStToP', state.commentsReducer[ownProps.match.params.id])
  return {
    comment: state.commentsReducer[ownProps.match.params.id]
  }
}

export default reduxForm({
	form: 'EditComment'
})(connect(mapStateToProps, { getCommentById, EditSpecificComment })(EditComment))

// http://localhost:3000/react/8xf0y6ziyjabvozdd253nd