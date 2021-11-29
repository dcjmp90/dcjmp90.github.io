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
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Nov 28, 2021 </small> | <small> Computer Science</small> </span>
							<h3><a href="blog.html">Blog of Software and Machine Learning Engineering</a></h3>
							<p>Blog posts and webpage coming soon!</p>
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
