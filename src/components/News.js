import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
  render() {
    return (
     <>
        <div className="container my-3">
        <div className="row">
            <div className="col-md-4">
                 <Newsitems title=" main News" description="this is news descriptions "/>
            </div>
            <div className="col-md-4">
                 <Newsitems title=" main News" description="this is news descriptions "/>
            </div>
            <div className="col-md-4">
                 <Newsitems title=" main News" description="this is news descriptions "/>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                 <Newsitems title=" main News" description="this is news descriptions "/>
            </div>
            <div className="col-md-4">
                 <Newsitems title=" main News" description="this is news descriptions "/>
            </div>
            <div className="col-md-4">
                 <Newsitems title=" main News" description="this is news descriptions "/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                 <Newsitems title=" main News" description="this is news descriptions "/>
            </div>
            <div className="col-md-4">
                 <Newsitems title=" main News" description="this is news descriptions "/>
            </div>
            <div className="col-md-4">
                 <Newsitems title=" main News" description="this is news descriptions "/>
            </div>
        </div>
     
     
      </div>
     </>
    )
  }
}
