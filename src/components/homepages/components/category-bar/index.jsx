import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class CategoryBar extends Component {
  constructor () {
    super();
    this.state = {
      categories: [
        {
          name: 'Vector',
          id: 1
        },
        {
          name: 'Creative',
          id: 2
        },
        {
          name: 'Video',
          id: 3
        },
        {
          name: 'Images',
          id: 4
        }
      ]
    }
  }
  render () {
    return (
      <div className="row">
        <div className="col-12">
        <div className="row portof-category-bar">
        {
          this.state.categories.map((category, i) => (
            <span className="category-item" key={i}>{category.name}</span>
            // <Route key={i} className="category-item">
            //   <Link to={`${process.env.PUBLIC_URL}/category/${category.id}`}>{category.name}</Link>
            // </Route>
          ))
        }
        </div>
        </div>
      </div>
    )
  }
}

export default CategoryBar