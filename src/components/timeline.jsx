import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Big Picture</span>
                            <h2 className="colorlib-heading animate-box">Experience Timeline</h2>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                <div className="timeline-entry-inner">
                                <div className="timeline-icon color-4">
                                    <i className="fa fa-desktop" />
                                </div>
                                <div className="timeline-label">
                                    <h2><a href="#"> Computer Vision Researcher - University of Texas at San Antonio</a> <span>2019-present</span></h2>
                                    <ul>
                                        <li>
                                            <p> <b> ICCV 2019 Publication </b> - oral presentation for OpenEDS workshop in Seoul, South Korea</p>
                                        </li>
                                        <li>
                                            <p> <b> ECCV 2020 Publiction </b> -  oral presentation for OpenEDS2020 workshop virtually (Glasgow, UK)</p>
                                        </li>
                                        <li>
                                            <p> <b> Semantic Segmentation Research </b> - researching improvements within deep learning for AR/VR and autonomous driving tasks</p>
                                        </li>
                                        <li>
                                            <p> <b> Member of CONNECT team for NNSA MSIPP </b> CONsortium on Nuclear sECurity Technologies member utilizing real-time segmentation funded by the National Nuclear Security Administration Minority Serving Institution Partnership Program   </p>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                <div className="timeline-entry-inner">
                                <div className="timeline-icon color-5">
                                    <i className="fa fa-cogs" />
                                </div>
                                <div className="timeline-label">
                                    <h2><a href="#"> Machine Learning Engineer Intern - Sierra Nevada Corporation</a> <span>Summer 2020</span></h2>
                                    <ul>
                                    <li>
                                        <p> <b>Analysis of Real World Data</b> -  Applied reinforcement learning techniques to a real-world military application.</p>
                                    </li>
                                    <li>
                                        <p> <b> Reinforcement Learning Framework Experience</b> -  Utilized Multi-Agent Reinforcement Learning with the Keras-RL and OpenAI frameworks.</p>
                                    </li>
                                    <li>
                                        <p> <b> Team Building & Collaboration </b> Led the R & D team in setup by creating Docker runtime environments to suit the project needs and requirements. </p>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                <div className="timeline-entry-inner">
                                <div className="timeline-icon color-6">
                                    <i className="fa fa-filter" />
                                </div>
                                <div className="timeline-label">
                                    <h2><a href="#"> Machine Learning Engineer  -  FunnelAI</a> <span>Jan 2019 - June 2019</span></h2>
                                    <ul>
                                    <li>
                                        <p> <b> Natural Language Processing </b> -  Constructed end to end Machine Learning pipelines for NLP classifications. </p>
                                    </li>
                                    <li>
                                        <p> <b> Aamazon Web Services </b> -  Utilized Amazon Web Services to serve the pipeline to a real-time web application. </p>
                                    </li>
                                    <li>
                                        <p> <b> Team Building & Collaboration </b> Collaborated on a daily basis with the development team for proper testing and utilization of the ML models. </p>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                <div className="timeline-entry-inner">
                                <div className="timeline-icon color-none">
                                </div>
                                </div>
                            </article>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
      </div>
    )
  }
}
