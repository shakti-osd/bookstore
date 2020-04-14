import React from 'react'
import { NavLink } from 'react-router-dom'

import './About.css'

function About() {
    return (
        <div>
            

        <div className="ht__bradcaump__area bg-image--3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bradcaump__inner text-center">
                        	<h2 className="bradcaump-title">About us</h2>
                            <nav className="bradcaump-content">
                              <NavLink className="breadcrumb_item" to="/">Home</NavLink>
                              <span className="brd-separetor">/</span>
                              <span className="breadcrumb_item active">About us</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="page-about about_area bg--white section-padding--lg">
        	<div className="container">
				<div className="row">
        			<div className="col-lg-12">
        				<div className="section__title--3 text-center pb--30">
        					<h2>Our Process Skill Of High</h2>
        					<p>the right people for your project</p>
        				</div>
        			</div>
        		</div>
        		<div className="row align-items-center">
					<div className="col-lg-6 col-sm-12 col-12">
        				<div className="content text-left text_style--2">
    					    <h2>we have skills to show</h2>
    					    <div className="skill-container">
    					        
    					        <div className="single-skill">
    					            <p>Customer Favorites</p>
    					            <div className="progress">
    					                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".5s" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span className="pen-lable"></span>
    					                </div>
    					            </div>
    					        </div>
    					        
    					        <div className="single-skill">
    					            <p>Popular Authors</p>
    					            <div className="progress">
    					                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".5s" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><span className="pen-lable"></span>
    					                </div>
    					            </div>
    					        </div>
    					       
    					        <div className="single-skill">
    					            <p>Bestselling Series</p>
    					            <div className="progress">
    					                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".5s" role="progressbar" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"><span className="pen-lable"></span>
    					                </div>
    					            </div>
    					        </div>
    					        
    					        <div className="single-skill">
    					            <p>Bargain Books</p>
    					            <div className="progress">
    					                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".5s" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" ><span className="pen-lable"></span>
    					                </div>
    					            </div>
    					        </div>
    					       
    					    </div>
        				</div>
        			</div>
        			<div className="col-lg-6 col-sm-12 col-12">
        				<div className="content">
        					<h3>Buy Book</h3>
        					<h2>Different Knowledge</h2>
        					<p className="mt--20 mb--20">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
        					<strong>London Address</strong>
        					<p>34 Parer Place via Musk Avenue Kelvin Grove, QLD, 4059</p>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
        
        <section className="wn__team__area pb--75 bg--white">
        	<div className="container">
        		<div className="row">
        			<div className="col-lg-12">
        				<div className="section__title--3 text-center">
        					<h2>Meet our team of experts</h2>
        					<p>the right people for your project</p>
        				</div>
        			</div>
        		</div>
        		<div className="row">
        			
        			<div className="col-lg-4 col-md-4 col-sm-6 col-12">
        				<div className="wn__team">
        					<div className="thumb">
        						<img src="images/about/team/1.jpg" alt="Team" />
        					</div>
        					<div className="content text-center">
        						<h4>JOHN SMITH</h4>
        						<p>Manager</p>
        						<ul className="team__social__net">
        							<li><NavLink to="#"><i className="icon-social-twitter icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-tumblr icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-facebook icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-linkedin icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-pinterest icons"></i></NavLink></li>
        						</ul>
        					</div>
        				</div>
        			</div>
        			
        			<div className="col-lg-4 col-md-4 col-sm-6 col-12">
        				<div className="wn__team">
        					<div className="thumb">
        						<img src="images/about/team/2.jpg" alt="Team" />
        					</div>
        					<div className="content text-center">
        						<h4>ALICE KIM</h4>
        						<p>Co-Founder</p>
        						<ul className="team__social__net">
        							<li><NavLink to="#"><i className="icon-social-twitter icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-tumblr icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-facebook icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-linkedin icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-pinterest icons"></i></NavLink></li>
        						</ul>
        					</div>
        				</div>
        			</div>
        			
        			<div className="col-lg-4 col-md-4 col-sm-6 col-12">
        				<div className="wn__team">
        					<div className="thumb">
        						<img src="images/about/team/3.jpg" alt="Team" />
        					</div>
        					<div className="content text-center">
        						<h4>VICTORIA DOE</h4>
        						<p>Marketer</p>
        						<ul className="team__social__net">
        							<li><NavLink to="#"><i className="icon-social-twitter icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-tumblr icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-facebook icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-linkedin icons"></i></NavLink></li>
        							<li><NavLink to="#"><i className="icon-social-pinterest icons"></i></NavLink></li>
        						</ul>
        					</div>
        				</div>
        			</div>
        			
        		</div>
        	</div>
        </section>
       
            
        </div>
    )
}

export default About
