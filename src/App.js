//app.js
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


//class based component
export default class App extends Component {


  render() {
    // console.log("render function")

    return (
      <>
        <Navbar/>
        <News />
      </>
    )
  }
}










