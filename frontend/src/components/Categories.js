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
                  <li key = {cat.path} style={{"margin-bottom": 25}}>
                    {cat.name}
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
  return {categories: state}

}


export default connect(mapSateToProps, { getCategories })(Categories)