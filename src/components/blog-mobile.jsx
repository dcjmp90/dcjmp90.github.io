import React, { Component } from 'react'

export default class BlogMobile extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content blog-box">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3 col-sm-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://jonperry.dev/blog/2021/11/29/a-dream-of-computer-science.html" className="blog-img"><img src="images/blog_post_my_journey.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Nov 28, 2021 </small> | <small> My Journey</small> </span>
							<h3><a href="https://jonperry.dev/blog/2021/11/29/a-dream-of-computer-science.html">My Journey of Attaining a Degree in Computer Science</a></h3>
							<p>...Of course you want the change, who wouldn’t want better? It sounds amazing in theory, but the reality of it is a tough pill to swallow. This is my journey.</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box" id="loadMore">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="fa fa-arrow-down" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
