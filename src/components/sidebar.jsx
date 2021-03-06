import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

export default class SidebarMobile extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" style={{color: 'white'}}><i /></a>
                    <aside id="colorlib-aside" role="complementary" className="border js-fullheight" style={{overflow: 'hidden', height: '100%'}}>
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(/images/about.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Jonathan Perry</a></h1>
                            <span className="email"><i className="icon-mail"></i> jon@jonperry.dev</span>
                            <span className="number"><i className="icon-phone"></i> +1 775 283 8248</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar" style={{overflow: 'hidden'}}>
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#" data-nav-section="background">Background</a></li>
                                    <li><a href="#" data-nav-section="skills">Professional Skills</a></li>
                                    <li><a href="#" data-nav-section="about">Current Work</a></li>
                                    {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                      <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                    <li><a href="#" data-nav-section="timeline">Professional Timeline</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu" style={{overflow: 'hidden', paddingTop: '10px', textAlign: "center"}}>
                            <div className="icon-row">
                                <div className="div-icon">
                                    <a href="https://www.facebook.com/jon.perry.50309277" target="_blank" className="icon-links" ><i className="icon-facebook2" /></a>
                                </div>
                                <div className="div-icon">
                                    <a href="https://www.instagram.com/perry.jon.m/" target="_blank" className="icon-links" ><i className="icon-instagram" /></a>
                                </div>
                                <div className="div-icon">
                                    <a href="https://www.linkedin.com/in/perryjon/" target="_blank" className="icon-links" ><i className="icon-linkedin2" /></a>
                                </div>
                                <div className="div-icon">
                                <a href="https://github.com/dcjmp90" target="_blank" className="icon-links"  ><i className="icon-github"></i></a>
                                </div>
                            </div>
                        </nav>
                    
                    </aside>
                    
                </div>
                
            </div>
        )
    }
}