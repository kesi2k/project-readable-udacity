import React, { Component } from 'react'
import { connect } from 'react-redux'
// { getCategories } gets used in connect.
import { getCategories } from '../actions/actionCategories.js'


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
                      <h3>{cat.name}</h3>
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
  console.log(state)
  return {categories: state.catsReducer}

}


export default connect(mapSateToProps, { getCategories })(Categories)