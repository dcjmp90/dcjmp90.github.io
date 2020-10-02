import React, { Component } from 'react'

export default class AboutMobile extends Component {
    render() {
        return (
            <div>
                
               
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="about-desc" style={{paddingTop:'10%', alignItems: 'center', alignContent:'center', textAlign:'center', float:'center', clear:'both'}}>
                            <span className="heading-meta" style={{float:'center', paddingBottom:'10%', paddingTop:'50%'}}>Segmentation Research</span>
                            <div style={{fontSize:'small', width:'100%', textAlign:'center', float:'center', alignself:'center', alignItems:'center'}}>
                                
                                <div className="col-md-6 col-md-offset-3 text-center animate-box">
                                    <div className="services color-4">
                                        <span className="icon">
                                            <i className="fa fa-eye fa-3x"></i>
                                        </span>
                                        <div className="desc">
                                            <div style={{width:'100%',height:'1',paddingbottom:'100%', paddingTop:'0',position:'relative', textAlign:'left'}}>
                                                <div style={{textAlign:'center'}}>
                                                    <h3>QUICK SUMMARY</h3>
                                                </div>
                                                
                                                <img src='/images/eyepreds.gif' alt="" style={{width:'100%'}}></img>
                                                <img src='/images/berlin.jpg' alt="" style={{width:'100%'}}></img>
                                                <img src='/images/carpreds.gif' alt="" style={{width:'100%'}}></img>
                                                <br/>
                                                <p style={{margin:'0 2% 2% 2%', paddingTop:'10px'}}>
                                                    I'm currently exploring the capabilities of Real-Time Low Memory Traffic Neural Networks 
                                                    for Deep Learning and exploring new ways of balancing class-wise imbalanced data.  
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-desc" style={{alignItems: 'center', alignContent:'center', textAlign:'center', float:'center', clear:'both'}}>
                            <div style={{fontSize:'small', width:'100%', textAlign:'center', float:'center', alignself:'center', alignItems:'center'}}>
                                <div className="col-md-6 col-md-offset-3 text-center animate-box">
                                    <div className="services color-5">
                                        <span className="icon">
                                            <i className="fa fa-graduation-cap fa-3x"></i>
                                        </span>
                                        <div className="desc">
                                            <div style={{textAlign:'center'}}>
                                                <h3>EYESEG</h3>
                                            </div>
                                            <div style={{width:'100%',height:'1',paddingbottom:'100%', paddingTop:'0',position:'relative', textAlign:'left'}}>
                                                <img src='/images/eyeseg.jpg' alt="" style={{width:'100%'}}></img>
                                                <p style={{margin:'0 2% 2% 2%'}}>
                                                    We propose EyeSeg, an encoder-decoder architecture designed 
                                                    for accurate pixel-wise semantic segmentation on annotated data 
                                                    where labeled data in limited. 
                                                </p>
                                                <p>
                                                    <i className="fa fa-sticky-note fa-1x"></i><a href="https://openeyes-workshop.github.io/downloads/openeyes2020_jonathan_perry_eyeseg_fast_and_efficient_few_shot_semantic_segmentation.pdf" style={{paddingLeft:'10px'}}>Get the paper Here</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-desc" style={{alignItems: 'center', alignContent:'center', textAlign:'center', float:'center', clear:'both'}}>
                            <div style={{fontSize:'small', width:'100%', textAlign:'center', float:'center', alignself:'center', alignItems:'center'}}>
                                <div className="col-md-6 col-md-offset-3 text-center animate-box">
                                    <div className="services color-6">
                                        <span className="icon">
                                            <i className="fa fa-graduation-cap fa-3x"></i>
                                        </span>
                                        <div className="desc">
                                            <div style={{textAlign:'center'}}>
                                                <h3>MINENET</h3>
                                            </div>
                                            <div style={{width:'100%',height:'1',paddingbottom:'100%', paddingTop:'0',position:'relative', textAlign:'left'}}>
                                                <img src='/images/MinENet.png' alt="" style={{width:'100%'}}></img>
                                                <p style={{margin:'0 2% 2% 2%'}}>
                                                    Our encoder-decoder architecture improves accuracy of multi-class segmentation of 
                                                    eye features in this large-scale high-resolution 
                                                    dataset, while also providing a design that is lightweight and efficient.
                                                </p>
                                                <p>
                                                    <i className="fa fa-sticky-note fa-1x"></i><a href="https://openaccess.thecvf.com/content_ICCVW_2019/papers/OpenEDS/Perry_MinENet_A_Dilated_CNN_for_Semantic_Segmentation_of_Eye_Features_ICCVW_2019_paper.pdf" style={{paddingLeft:'10px'}}>Get the paper Here</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <hr />
            </div>
        )
    }

}