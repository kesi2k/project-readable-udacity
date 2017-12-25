import React, { Component } from 'react'
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getCategories } from '../actions/actionCategories.js'
import { Route, Link } from 'react-router-dom';



class Categories extends Component {
  componentWillMount(){
    this.props.getCategories()
  }

  render(){
    const { cats } = this.props.categories
    return (
      <div>
        <h1> Categories</h1>
          {cats === undefined
            ? <h4> Categories Loading</h4>
            :
              <ul style={{"listStyle":"none"}}>
                {cats.map((cat) => (
                    <li key = {cat.path} style={{"marginBottom": 25}}>
                      <Link to={'/'+cat.path}>
                         <h3>{cat.name}</h3>
                      </Link>
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
  return {categories: state.catsReducer}

}


export default connect(mapSateToProps, { getCategories })(Categories)