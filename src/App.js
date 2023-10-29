import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
         <Navbar/>
         <News/>
      </div>
    )
  }
}


//2d33366ebb3247509dd236105de0dd32