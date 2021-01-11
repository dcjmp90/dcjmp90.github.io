import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="background">

                <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{fontSize:'small', width:'100%', textAlign:'center', float:'left', alignself:'center', alignItems:'center', clear:'both', paddingTop:'5%'}}>
                                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                        <div className="col-md-10">
                                            <div className="about-desc">                                                
                                                <div className="col-md-12 col-md-offset-1 animate-box" data-animate-effect="fadeInLeft">
                                                        <div className="services color-2">
                                                            <span className="icon">
                                                                <i className="fa fa-history fa-3x"></i>
                                                            </span>
                                                            <div className="desc">
                                                                <div style={{textAlign:'center'}}>
                                                                    <h3>How I got into programming <br />& Computer Science</h3>
                                                                </div>
                                                                <div style={{width:'100%'}}>
                                                                    <div style={{display:'flex'}}>
                                                                        <div style={{float:'left', display:'flex', width:'70%'}}>
                                                                            <p style={{fontSize:'12px', fontSize:'.9vw', textAlign:'left', margin: 'auto', paddingRight:'4px'}}>
                                                                                Jon first ran across scripts and programming when he was going to Carson High School in Nevada. 
                                                                                In his last two years of high school, he took several dual-credit college level courses in technology related fields. Specifically, he 
                                                                                completed courses in Web Design I & II, 3D Animation, and Graphic Design. In his Web Design courses, he learned some
                                                                                basics of javascript, perl/PHP, CSS, and HTML. Later on in his 3D Animation course, he taught himself how to
                                                                                create some simple shell scripts in Bash, which as a video game addicted teenager he used this skill to prevent
                                                                                the instructor from locking his screen during lecture for web-based flash player games. Admittedly, this was not the best
                                                                                use of these skills.
                                                                            </p>
                                                                        </div>                                                               
                                                                        
                                                                        

                                                                        {/** 
                                                                         * 
                                                                         * IMAGE HERE
                                                                         * 
                                                                         * High school grad pic
                                                                         * 
                                                                         * **/}
                                                                        
                                                                            
                                                                            
                                                                                

                                                                        <div style={{float:'right', width:'30%', display:'inline'}}>
                                                                            <div className="overlay" />
                                                                            <div className="container-fluid" style={{backgroundColor:'rgba(0,0,0,.5)', width:'100%', padding:'0'}}>
                                                                                <img src='/images/grad.jpg' alt="" style={{width:'100%'}}></img>
                                                                                    
                                                                            </div>
                                                                            <p style={{padding:'2 2 2 2', width:'100%', fontSize:'9px', fontSize:'.7vw'}}>
                                                                                <i>Post-Graduation ceremony from Carson High School</i>
                                                                            </p>
                                                                        
                                                                        </div>
                                                                    </div>
                                                                    <br />
                                                                    <div style={{display:'flex'}}>

                                                                        <div style={{float:'left', width:'30%'}}>
                                                                            <div className="overlay" />
                                                                            <div className="container-fluid" style={{backgroundColor:'rgba(0,0,0,.5)', width:'100%', padding:'0'}}>
                                                                                <img src='/images/military_pic.jpg' alt="" style={{width:'100%'}}></img>
                                                                                
                                                                            </div>
                                                                            <p style={{padding:'2 2 2 2', width:'100%', fontSize:'9px', fontSize:'.7vw'}}>
                                                                                    <i>While stationed at Andrews, AFB in the United States Air Force, holding the rank of Senior Airman (E-4) in picture.</i>
                                                                                </p>
                                                                        
                                                                        </div>
                                                                        <div style={{float:'left', width:'70%', display:'flex'}}>
                                                                            <p style={{fontSize:'12px', fontSize:'.9vw', textAlign:'left', margin: 'auto', paddingLeft:'4px'}}>
                                                                                In 2010, Jon enlisted in the United States Air Force as a 20 year old seeking adventure and opportunity.
                                                                                During his first tour of duty in South Korea, he rekindled a love and passion for technology and networking
                                                                                that was originally a cornerstone in early years. This inspiration sparked a devotion to be a first generation 
                                                                                university graduate while serving in the military. Once he was in the continential United States in 2013, Jon 
                                                                                started a Bachelor's in Networking and Cyber Security at the University of Maryland, which was partially completed due to
                                                                                a new special duty as Presidential Security until 2016. 
                                                                            </p>
                                                                        </div>
                                                                        {/** 
                                                                         * 
                                                                         * IMAGE HERE
                                                                         * 
                                                                         * Air force Pic
                                                                         * 
                                                                         * **/}
                                                                        
                                                                    </div>
                                                                    <br />
                                                                    <div style={{display:'flex'}}> 
                                                                        
                                                                        <div style={{float:'left', display:'flex', width:'70%'}}>
                                                                            <p style={{fontSize:'12px', fontSize:'.9vw', textAlign:'left', margin: 'auto', paddingRight:'4px'}}>
                                                                                Separating from the military with an honorable discharge, Jon
                                                                                transferred to University of Texas and changed his major to Computer Science after discovering that his passions align
                                                                                with design and programming. Mentorship from two amazing professors, namely Larry Clark and Amanda Fernandez, led his academics
                                                                                to new and never imagined levels of graduate school in Computer Science. During the last year of undergraduate courses, his 
                                                                                mentors guided him to find his passion within this dicipline that went beyond software engineering. Jon was given a project 
                                                                                that was a live and on-going challenge in Computer Vision and Deep Learning hosted by Facebook to help him explore his abilities and hone in on what will
                                                                                become his thesis for graduate school. That project turned into a success and actually was of great interest, which led to a 
                                                                                publication as an ungraduate student prior to being enrolled as a full-time graduate student. 
                                                                            </p>
                                                                        </div>
                                        
                                                                        {/** 
                                                                         * 
                                                                         * IMAGE HERE
                                                                         * 
                                                                         * Masters/Ugrad Picture
                                                                         * 
                                                                         * **/}
                                                                        <div style={{float:'left', width:'30%', display:'inline'}}>
                                                                            <div className="overlay" />
                                                                            <div className="container-fluid" style={{backgroundColor:'rgba(0,0,0,.5)', width:'100%', padding:'0'}}>
                                                                                <img src='/images/img_bg.jpg' alt="" style={{width:'100%'}}></img>
                                                                                
                                                                            </div>
                                                                            <p style={{padding:'2 2 2 2', width:'100%', fontSize:'9px', fontSize:'.7vw'}}>
                                                                                    <i>Oral Presentation of MinENet publication from ICCV 2019.</i>
                                                                                </p>
                                                                        
                                                                        </div>
                                                                        
                                                                        
                                                                        
                                                                    </div>
                                                                    
                                                                    <br />
                                                                    <center>
                                                                        <div style={{float:'center', display:'block', width:'70%'}}>
                                                                                <p style={{fontSize:'12px', fontSize:'.9vw', textAlign:'left', margin: 'auto'}}> 
                                                                                    This work continued through into 
                                                                                    the Master's program further exploring Computer Vision and Deep Learning. He strives to continue education even after joining the workforce.
                                                                                    Jon also envisions completing an MBA program to understand the other side of industry as well as preparing for his own business ventures. 
                                                                                </p>
                                                                        </div>
                                                                    </center>
                                                            
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>                                   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    

                <section className="colorlib-about" data-section="skills">
                
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{fontSize:'small', width:'100%', textAlign:'center', float:'left', alignself:'center', alignItems:'center', clear:'both', paddingTop:'5%'}}>
                                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                        <div className="col-md-10">
                                            <div className="about-desc">                                                
                                                <div className="col-md-12 col-md-offset-1 animate-box" data-animate-effect="fadeInLeft">
                                                        <div className="services color-6">
                                                            <span className="icon">
                                                                <i className="fa fa-tasks fa-3x"></i>
                                                            </span>
                                                            <div className="desc">
                                                                <div style={{textAlign:'center'}}>
                                                                    <h3>Professional Skills</h3>
                                                                </div>
                                                                
                                                                <div className="wrap" style={{fontSize:'12px', fontWeight:'300', letterSpacing:'.2px'}}>
                                                                    <div className="bar">
                                                                        <h3>Java</h3>
                                                                        <span></span>
                                                                    </div>
                                                               


                                                                
                                                                    <div className="bar">
                                                                        <h3>Python 3</h3>
                                                                        <span></span>
                                                                    </div>
                                                             

                                                                
                                                                    <div className="bar">
                                                                        <h3>TensorFlow 2</h3>
                                                                        <span></span>
                                                                    </div>
                                                            
                                                                    <div className="bar">
                                                                        <h3>Keras</h3>
                                                                        <span></span>
                                                                    </div>

                                                                    <div className="bar">
                                                                        <h3>PyTorch</h3>
                                                                        <span></span>
                                                                    </div>
                                                           

                                                                
                                                                    <div className="bar">
                                                                        <h3>C Programming</h3>
                                                                        <span></span>
                                                                    </div>
                                                                
                                                                
                                                              
                                                                    <div className="bar">
                                                                        <h3>Front-End Web Dev</h3>
                                                                        <span></span>
                                                                    </div>
                                                              

                                                          
                                                                    <div className="bar">
                                                                        <h3>Bash</h3>
                                                                        <span></span>
                                                                    </div>

                                                                    <div className="bar">
                                                                        <h3>Machine Learning <br/> & Deep Learning</h3>
                                                                        <span></span>
                                                                    </div>

                                                
                                                             
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>                                   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    






                <section className="colorlib-about" data-section="about">



                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{fontSize:'small', width:'100%', textAlign:'center', float:'left', alignself:'center', alignItems:'center', clear:'both', paddingTop:'5%'}}>
                                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                        <div className="col-md-10">
                                            <div className="about-desc">
                                                <div className="col-md-12 col-md-offset-1 text-center animate-box">
                                                    <div className="services color-4">
                                                        <span className="icon">
                                                            <i className="fa fa-eye fa-3x"></i>
                                                        </span>
                                                        <div className="desc">
                                                            <div style={{width:'100%',height:'.5',paddingbottom:'100%',position:'relative', textAlign:'left'}}>
                                                                    <div style={{textAlign:'center'}}>
                                                                        <h3>CURRENT RESEARCH SUMMARY</h3>
                                                                    </div>
                                                            
                                                                    <img src='/images/eyepreds.gif' alt="" style={{width:'100%'}}></img>
                                                                
                                                                    <img src='/images/carpreds.gif' alt="" style={{width:'100%'}}></img>
                                                                    <br/>
                                                                    <br/>
                                                                    <p style={{margin:'0 2% 2% 2%', paddingTop:'10px', fontSize:'12px', fontSize:'.9vw'}}>
                                                                        I'm currently exploring the capabilities of Real-Time Low Memory Traffic Neural Networks 
                                                                        for Deep Learning and exploring new ways of balancing class-wise imbalanced data. Below is the
                                                                        list of my current stack for development and research:
                                                                    </p>
                                                                    <p style={{textAlign:'center', paddingTop:'10px', margin:'0', fontSize:'16px', fontSize:'1vw'}}> 
                                                                        <b>Tools | Utilities | Frameworks | Languages</b>
                                                                        <hr style={{height:'2px', color:'black', backgroundColor:'black', top:'0px'}} />
                                                                        </p>
                                                        
                                                                        <ul style={{fontSize:'14px', fontSize:'.9vw'}}>
                                                                            <li>
                                                                                Linux & Windows
                                                                            </li>

                                                                            <li>
                                                                                Docker
                                                                            </li>
                                                                            <li>
                                                                                VS Code & Remote SSH
                                                                            </li>
                                                                            <li>
                                                                                Tensorflow 2.x & Keras
                                                                            </li>
                                                                            <li>
                                                                                PyTorch
                                                                            </li>
                                                                            <li>
                                                                                OpenCV & Numpy
                                                                            </li>
                                                                            <li>
                                                                                Segmentation Models [ mIoU | Dice Loss | CCE ]
                                                                            </li>
                                                                            <li>
                                                                                Python 3.x
                                                                            </li>
                                                                            <li>
                                                                                Bash
                                                                            </li>
                                                                        </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
     
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{fontSize:'small', width:'100%', textAlign:'center', float:'left', alignself:'center', alignItems:'center', clear:'both', paddingTop:'5%'}}>
                                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                        <div className="col-md-10">
                                            <div className="about-desc">                                                
                                                <div className="col-md-12 col-md-offset-1 text-center animate-box" data-animate-effect="fadeInLeft">
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
                                                                    <p style={{margin:'0 2% 2% 2%', fontSize:'12px', fontSize:'.9vw'}}>
                                                                        Semantic segmentation is a key component in eye- and gaze-tracking for virtual reality (VR) and augmented reality (AR) applications. 
                                                                        While it is a well-studied computer vision problem, most state-of-the-art models require large amounts of labeled data, which is limited in this specific domain. 
                                                                        An additional consideration in eye tracking is the capacity for real-time predictions, necessary for responsive AR/VR interfaces. 
                                                                        In this work, we propose SparSeg, an encoder-decoder architecture designed for accurate pixel-wise semantic segmentation on sparsely annotated data. We report results from the OpenEDS2020 Challenge, yielding a 94.5% mean Intersection Over Union (mIOU) score, which is a 10.5% score increase over the baseline approach. 
                                                                        The experimental results demonstrate state-of-the-art performance while preserving a low latency framework.
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{fontSize:'small', width:'100%', textAlign:'center', float:'left', alignself:'center', alignItems:'center', clear:'both', paddingTop:'5%'}}>
                                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                        <div className="col-md-10">
                                            <div className="about-desc">                                                
                                                <div className="col-md-12 col-md-offset-1 text-center animate-box">
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
                                                                <p style={{margin:'0 2% 2% 2%', fontSize:'12px', fontSize:'.9vw'}}>
                                                                Fast and accurate eye tracking is a critical task for a range of research in virtual and augmented reality, attention tracking, mobile applications, and medical analysis, among other fields. 
                                                                While deep neural network models excel at image analysis tasks, existing approaches to segmentation often consider only one class, emphasize classification over segmentation, or come with prohibitively high resource costs. 
                                                                In this work, we propose MinENet, a minimized efficient neural network architecture designed for fast multi-class semantic segmentation. We demonstrate performance of MinENet on the OpenEDS Semantic Segmentation Challenge dataset, against a baseline model as well as vanilla neural network architectures. 
                                                                Our encoder-decoder architecture improves accuracy of multi-class segmentation of eye features in this large-scale high-resolution dataset, while also providing a design that is lightweight and efficient.
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    
            </div>
        )
    }

}