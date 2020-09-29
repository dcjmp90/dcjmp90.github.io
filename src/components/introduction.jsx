import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(/images/img_bg2.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid" style={{backgroundColor: 'rgba(0,0,0,.4)'}}>
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: 'white', fontSize: '50px'}}>HELLO! <br />I'M JON PERRY</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(/images/img_bg3.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid" style={{backgroundColor: 'rgba(0,0,0,.4)'}}>
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: '#f15a22', fontSize: '60px'}}>VAIL <p style={{color: 'white', fontSize: '60px', display: 'inline-flex'}}>MEMBER</p></h1>
                          <h1 style={{color: 'white', fontSize: '30px'}}>COMPUTER VISION RESEARCHER</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
