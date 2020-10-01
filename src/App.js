import React, { Component } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Timeline from './components/timeline';


import './App.css';

class App extends Component {
  render() {
    if (isBrowser){
      return (
        <div id="colorlib-page" style={{overflow: 'hidden'}}>
          <div id="container-wrap">
            <Sidebar></Sidebar>
            <div id="colorlib-main" style={{overflow: 'hidden'}}>
              <Introduction></Introduction>
              <Timeline></Timeline>
            </div>
          </div>
        </div>
      )
    }
    if (isMobile){
      <div>Mobile App Coming soon!</div>
    }
  }
}

export default App;