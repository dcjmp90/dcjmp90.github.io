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
import SidebarMobile from './components/sidebar-mobile';
import TimelineMobile from './components/timeline-mobile';


import './App.css';

class App extends Component {
  render() {
    if (isBrowser){
      return (
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar></Sidebar>
            <div id="colorlib-main">
              <Introduction></Introduction>
              <Timeline></Timeline>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div id="colorlib-page" >
          <div id="container-wrap">
            <SidebarMobile></SidebarMobile>
            <TimelineMobile></TimelineMobile>
          </div>
      </div>
        
    )
  }
}

export default App;