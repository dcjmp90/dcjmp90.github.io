import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div style={{justifyContent:'flex-end', height:'100%', paddingBottom:'0', verticalAlign:'center'}}>
                <div>
                    
                    <aside id="colorlib-aside-mobile" className="border" style={{overflow: 'hidden'}}>
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(/images/about.jpg)' }} />
                            <h1 id="colorlib-logo-mobile"><a href="index.html">Jonathan Perry</a></h1>
                            <span className="email"><i className="icon-mail"></i> <a href="mailto:dcjmp90@gmail.com">dcjmp90@gmail.com</a></span>
                            <span className="number"><i className="icon-phone"></i> <a href="tel:1-775-283-8248">+1 775 283 8248</a> </span>
                        </div>
                        <nav id="colorlib-main-menu-mobile" role="navigation" className="navbar" style={{overflow: 'hidden'}}>
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                                    {/*<li><a href="#" data-nav-section="about">About</a></li>
                                    <li><a href="#" data-nav-section="projects">Projects</a></li>
                      <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                    <li><a href="#" data-nav-section="timeline">Professional Timeline</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu-mobile" style={{overflow: 'hidden', paddingTop: '10px', textAlign: "center"}}>
                            <div className="icon-row">
                                <div className="div-icon">
                                    <a href="https://www.facebook.com/jon.perry.50309277" target="_blank" className="icon-links-mobile" ><i className="icon-facebook2" /></a>
                                </div>
                                <div className="div-icon">
                                    <a href="https://www.instagram.com/perry.jon.m/" target="_blank" className="icon-links-mobile" ><i className="icon-instagram" /></a>
                                </div>
                                <div className="div-icon">
                                    <a href="https://www.linkedin.com/in/perryjon/" target="_blank" className="icon-links-mobile" ><i className="icon-linkedin2" /></a>
                                </div>
                                <div className="div-icon">
                                <a href="https://github.com/dcjmp90" target="_blank" className="icon-links-mobile"  ><i className="icon-github"></i></a>
                                </div>
                            </div>
                        </nav>
                        <div className="text-center">
                            <span className="email">SCROLL DOWN FOR MORE CONTENT</span>
                            <div className="text-center arrow bounce">
                                <a className="fa fa-arrow-down fa-2x" href="#"></a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}