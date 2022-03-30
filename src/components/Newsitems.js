import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {

    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <>
        <div className="container my-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" className="btn btn-outline-info btn-sm">Read More</a>
            </div>
          </div>
        </div>

      <div className="d-flex justify-content-between">
        <button type="button" class="btn btn-info">Previous</button>
        <button type="button" class="btn btn-info">Next</button>
      </div>
      </>
    )
  }
}
