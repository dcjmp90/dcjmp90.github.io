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
import AboutMobile from './components/about-mobile';
import SpotifyPlayer from 'react-spotify-web-playback';


import './App.css';

class App extends Component {
  render() {
    if (isBrowser){
      return (
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar><SpotifyPlayer token="BQAI_7RWPJuqdZxS-I8XzhkUi9RKr8Q8UUNaJAHwWlpIq6..."
                                    uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}>
                      </SpotifyPlayer>
            </Sidebar>
            <div id="colorlib-main">
              <Introduction></Introduction>
              <About></About>
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
            <AboutMobile></AboutMobile>
            <TimelineMobile></TimelineMobile>
          </div>
      </div>
        
    )
  }
}

export default App;