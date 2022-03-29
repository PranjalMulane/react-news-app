import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {

    let {title, description}  = this.props;

    return (
     <>
      <div className="card" style={{width: '18rem'}}>
        <img src="https://c.ndtvimg.com/2022-03/qs3qamco_ukraine-war-afp-650_625x300_08_March_22.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
     </>
    )
  }
}
