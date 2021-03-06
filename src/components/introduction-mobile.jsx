import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{background: 'url(/images/img_bg.jpg) center', backgroundSize: 'cover' }}>
                <div className="overlay" />
                <div className="container-fluid" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: 'white', fontSize: '50px'}}>HELLO! <br />I'M JON PERRY</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{background: 'url(/images/lab_img_cut.jpg) center', backgroundSize: 'cover' }}>
                <div className="overlay" />
                <div className="container-fluid" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
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
              <li style={{background: 'url(/images/main_campus.jpg) center', backgroundSize: 'cover' }}>
                <div className="overlay" />
                <div className="container-fluid" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc" style={{textAlign: 'left', alignContent: 'left', position: 'relative'}}>
                          <div style={{width: '20%', height: 'auto', float:'left'}}>
                            <img src="/images/cs_logo.png" className="cs-logo" alt=""></img>
                          </div>
                          
                          <h1 style={{color: 'white', fontSize: '40px', float:'left', clear:'left'}}>GRADUATE STUDENT</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{background: 'url(/images/conference.jpg)', backgroundSize: 'cover' }}>
                <div className="overlay" />
                <div className="container-fluid" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc" style={{textAlign: 'left', alignContent: 'left', position: 'relative'}}>
                          <div className="desc">
                            <h1 style={{color: 'white', fontSize: '40px'}}>CHECK OUT <p style={{display: 'inline-flex', color:'#f15a22'}}>VAIL </p> RESEARCH</h1>
                            <p className="border-links"><a className="btn btn-primary btn-learn border-links" href="https://cs.utsa.edu/research/facilities/#bottom-content" target="_blank">View Lab research <i className="fa fa-graduation-cap fa-2x" style={{paddingtop: '10px'}}/></a></p>
                          </div>
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
