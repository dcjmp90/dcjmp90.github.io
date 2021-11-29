import React, { Component } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import Blog from './components/blog';
import Timeline from './components/timeline';
import SidebarMobile from './components/sidebar-mobile';
import TimelineMobile from './components/timeline-mobile';
import AboutMobile from './components/about-mobile';
import SpotifyPlayer from 'react-spotify-web-playback';
import BlogMobile from './components/blog-mobile';

import './App.css';

class App extends Component {
  render() {
    if (isBrowser){
      return (
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar>
            </Sidebar>
            <div id="colorlib-main">
              <Introduction></Introduction>
              <Blog></Blog>
              <Timeline></Timeline>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div id="colorlib-page">
          <div id="container-wrap">
            <div>
              <SidebarMobile></SidebarMobile>
            </div>
            <BlogMobile></BlogMobile>
            <TimelineMobile></TimelineMobile>
          </div>
      </div>
        
    )
  }
}

export default App;