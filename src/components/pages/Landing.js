import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import InfiniteCarousel from 'react-leaf-carousel';
//import HorizontalGallery from 'react-dynamic-carousel'


import ProductCrasual from '../shop/Product-Crasual'

import  './Landing.css'

class Landing extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }


  }

  
  componentDidMount(){
    axios.get('/products.js')
      .then(response => {
       // console.log('All Mounted Products',response.data.results)
        this.setState({products: response.data.results})
      })
      .catch(err => console.log(err))
  }

  render() {
    const productLists = this.state.products;

  //   const productCrasual = productLists.map(product => {
  //     return (
  //       <div key={product.id}><img alt='' src={product.image} /></div>
  //     )
  //   }       
  // ) ;

    return (
      <> 

		      <div className="header-slider">    

            <Carousel autoPlay showThumbs={false}>
                <div>
                    <img src="images/slider/slider1.jpg" alt="" />
                </div>
                <div>
                    <img src="images/slider/slider2.jpg" alt="" />
                </div>
                <div>
                    <img src="images/slider/slider3.jpg" alt="" />
                </div>
            </Carousel>
          </div>



		

        <section className="wn__product__area brown--color pt--80  pb--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__title text-center">
                <h2 className="title__be--2">New <span className="color--theme">Products</span></h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
              </div>
            </div>
          </div>
          
        <ProductCrasual items={productLists} />     
           
       
        </div>
      </section>

        <section className="wn__newsletter__area bg-image--2">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 offset-lg-5 col-md-12 col-12 ptb--150">
						<div className="section__title text-center">
							<h2>Stay With Us</h2>
						</div>
						<div className="newsletter__block text-center">
							<p>Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers.</p>
							<form action="#">
								<div className="newsletter__box">
									<input type="email" placeholder="Enter your e-mail" />
									<button>Subscribe</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>

    	<section className="wn__bestseller__area bg--white pt--80  pb--30 project-tab" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section__title text-center">
							<h2 className="title__be--2">All <span className="color--theme">Products</span></h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
						</div>
					</div>
				</div>
				<div className="row mt--50">
					<div className="col-md-12 col-lg-12 col-sm-12">
						<div className=" nav justify-content-center nav-tabs nav-fill" role="tablist" id="nav-tab">
                  <a className="nav-item nav-link active" id="product-home-all-tab" data-toggle="tab" href="#nav-all" role="tab">ALL</a>
                  <a className="nav-item nav-link" id="product-home-biographic-tab" data-toggle="tab" href="#nav-biographic" role="tab">BIOGRAPHIC</a>
                  <a className="nav-item nav-link" id="product-home-adventure-tab" data-toggle="tab" href="#nav-adventure" role="tab">ADVENTURE</a>
                  <a className="nav-item nav-link" id="product-home-children-tab" data-toggle="tab" href="#nav-children" role="tab">CHILDREN</a>
                  <a className="nav-item nav-link" id="product-home-cook-tab" data-toggle="tab" href="#nav-cook" role="tab">COOK</a>
              </div>
					</div>
				</div>
				
      <div className="tab-content" id="nav-tabContent">
				<div className=" tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="product-home-all-tab">
          
            <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                  ]}
                  dots={true}
                 // showSides={true}
                 // sidesOpacity={.5}
                 //  sideSize={.1}
                  slidesToScroll={5}
                  slidesToShow={5}
                  scrollOnDevice={true}
                >                      
              <div><img alt='' src='images/books/1.jpg' /></div>
              <div><img alt='' src='images/books/2.jpg' /></div>
              <div><img alt='' src='images/books/3.jpg' /></div>
              <div><img alt='' src='images/books/4.jpg' /></div>
              <div><img alt='' src='images/books/5.jpg' /></div>
              <div><img alt='' src='images/books/6.jpg' /></div>
              <div><img alt='' src='images/books/7.jpg' /></div>
              <div><img alt='' src='images/books/8.jpg' /></div>
              <div><img alt='' src='images/books/9.jpg' /></div>
              <div><img alt='' src='images/books/10.jpg' /></div>
              <div><img alt='' src='images/books/11.jpg' /></div>
              <div><img alt='' src='images/books/12.jpg' /></div>




				</InfiniteCarousel>
				</div>
        <div className=" tab-pane fade" id="nav-biographic" role="tabpanel" aria-labelledby="product-home-biographic-tab" >  
       
            <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                  ]}
                  dots={true}
                 // showSides={true}
                 // sidesOpacity={.5}
                 //  sideSize={.1}
                  slidesToScroll={5}
                  slidesToShow={5}
                  scrollOnDevice={true}
                >                      
              <div><img alt='' src='images/books/1.jpg' /></div>
              <div><img alt='' src='images/books/2.jpg' /></div>
              <div><img alt='' src='images/books/3.jpg' /></div>
              <div><img alt='' src='images/books/4.jpg' /></div>
              <div><img alt='' src='images/books/5.jpg' /></div>
              <div><img alt='' src='images/books/6.jpg' /></div>
              <div><img alt='' src='images/books/7.jpg' /></div>
              <div><img alt='' src='images/books/8.jpg' /></div>
              <div><img alt='' src='images/books/9.jpg' /></div>
              <div><img alt='' src='images/books/10.jpg' /></div>
              <div><img alt='' src='images/books/11.jpg' /></div>
              <div><img alt='' src='images/books/12.jpg' /></div>




				</InfiniteCarousel>
				</div>

        <div className=" tab-pane fade" id="nav-adventure" role="tabpanel" aria-labelledby="product-home-adventure-tab">  
        
            <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                  ]}
                  dots={true}
                 // showSides={true}
                 // sidesOpacity={.5}
                 //  sideSize={.1}
                  slidesToScroll={5}
                  slidesToShow={5}
                  scrollOnDevice={true}
                >                      
              <div><img alt='' src='images/books/1.jpg' /></div>
              <div><img alt='' src='images/books/2.jpg' /></div>
              <div><img alt='' src='images/books/3.jpg' /></div>
              <div><img alt='' src='images/books/4.jpg' /></div>
              <div><img alt='' src='images/books/5.jpg' /></div>
              <div><img alt='' src='images/books/6.jpg' /></div>
              <div><img alt='' src='images/books/7.jpg' /></div>
              <div><img alt='' src='images/books/8.jpg' /></div>
              <div><img alt='' src='images/books/9.jpg' /></div>
              <div><img alt='' src='images/books/10.jpg' /></div>
              <div><img alt='' src='images/books/11.jpg' /></div>
              <div><img alt='' src='images/books/12.jpg' /></div>




				</InfiniteCarousel>
				</div>

        <div className=" tab-pane fade" id="nav-children" role="tabpanel" aria-labelledby="product-home-children-tab"> 
        
            <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                  ]}
                  dots={true}
                 // showSides={true}
                 // sidesOpacity={.5}
                 //  sideSize={.1}
                  slidesToScroll={5}
                  slidesToShow={5}
                  scrollOnDevice={true}
                >                      
              <div><img alt='' src='images/books/1.jpg' /></div>
              <div><img alt='' src='images/books/2.jpg' /></div>
              <div><img alt='' src='images/books/3.jpg' /></div>
              <div><img alt='' src='images/books/4.jpg' /></div>
              <div><img alt='' src='images/books/5.jpg' /></div>
              <div><img alt='' src='images/books/6.jpg' /></div>
              <div><img alt='' src='images/books/7.jpg' /></div>
              <div><img alt='' src='images/books/8.jpg' /></div>
              <div><img alt='' src='images/books/9.jpg' /></div>
              <div><img alt='' src='images/books/10.jpg' /></div>
              <div><img alt='' src='images/books/11.jpg' /></div>
              <div><img alt='' src='images/books/12.jpg' /></div>




				</InfiniteCarousel>
				</div>

        <div className=" tab-pane fade" id="nav-cook" role="tabpanel" aria-labelledby="product-home-cook-tab"> 
        
            <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                  ]}
                  dots={true}
                 // showSides={true}
                 // sidesOpacity={.5}
                 //  sideSize={.1}
                  slidesToScroll={5}
                  slidesToShow={5}
                  scrollOnDevice={true}
                >                      
              <div><img alt='' src='images/books/1.jpg' /></div>
              <div><img alt='' src='images/books/2.jpg' /></div>
              <div><img alt='' src='images/books/3.jpg' /></div>
              <div><img alt='' src='images/books/4.jpg' /></div>
              <div><img alt='' src='images/books/5.jpg' /></div>
              <div><img alt='' src='images/books/6.jpg' /></div>
              <div><img alt='' src='images/books/7.jpg' /></div>
              <div><img alt='' src='images/books/8.jpg' /></div>
              <div><img alt='' src='images/books/9.jpg' /></div>
              <div><img alt='' src='images/books/10.jpg' /></div>
              <div><img alt='' src='images/books/11.jpg' /></div>
              <div><img alt='' src='images/books/12.jpg' /></div>




				</InfiniteCarousel>
				</div>
			</div>
    </div>
      
		</section>
     
    <section className="wn__recent__post bg--gray ptb--80">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section__title text-center">
							<h2 className="title__be--2">Our <span className="color--theme">Blog</span></h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
						</div>
					</div>
				</div>
				<div className="row mt--50">
					<div className="col-md-6 col-lg-4 col-sm-12">
						<div className="post__itam">
							<div className="content">
								<h3><NavLink to="blog-details.html">International activities of the Frankfurt Book </NavLink></h3>
								<p>We are proud to announce the very first the edition of the frankfurt news.We are proud to announce the very first of  edition of the fault frankfurt news for us.</p>
								<div className="post__time">
									<span className="day">Dec 06, 18</span>
									<div className="post-meta">
										<ul>
											<li><NavLink to="#"><i className="bi bi-love"></i>72</NavLink></li>
											<li><NavLink to="#"><i className="bi bi-chat-bubble"></i>27</NavLink></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 col-sm-12">
						<div className="post__itam">
							<div className="content">
								<h3><NavLink to="blog-details.html">Reading has a signficant info  number of benefits</NavLink></h3>
								<p>Find all the information you need to ensure your experience.Find all the information you need to ensure your experience . Find all the information you of.</p>
								<div className="post__time">
									<span className="day">Mar 08, 18</span>
									<div className="post-meta">
										<ul>
											<li><NavLink to="#"><i className="bi bi-love"></i>72</NavLink></li>
											<li><NavLink to="#"><i className="bi bi-chat-bubble"></i>27</NavLink></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 col-sm-12">
						<div className="post__itam">
							<div className="content">
								<h3><NavLink to="blog-details.html">The London Book Fair is to be packed with exciting </NavLink></h3>
								<p>The London Book Fair is the global area inon marketplace for rights negotiation.The year  London Book Fair is the global area inon forg marketplace for rights.</p>
								<div className="post__time">
									<span className="day">Nov 11, 18</span>
									<div className="post-meta">
										<ul>
											<li><NavLink to="#"><i className="bi bi-love"></i>72</NavLink></li>
											<li><NavLink to="#"><i className="bi bi-chat-bubble"></i>27</NavLink></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="best-seel-area pt--80 pb--60">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section__title text-center pb--50">
							<h2 className="title__be--2">Best <span className="color--theme">Seller </span></h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
						</div>
					</div>
				</div>
			</div>
			<div className="slider center">
				
			<div className="product-slider">  
            <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                  ]}
                  dots={true}
                 // showSides={true}
                 // sidesOpacity={.5}
                 //  sideSize={.1}
                  slidesToScroll={5}
                  slidesToShow={5}
                  scrollOnDevice={true}
                >                      
              <div><img alt='' src='images/books/1.jpg' /></div>
              <div><img alt='' src='images/books/2.jpg' /></div>
              <div><img alt='' src='images/books/3.jpg' /></div>
              <div><img alt='' src='images/books/4.jpg' /></div>
              <div><img alt='' src='images/books/5.jpg' /></div>
              <div><img alt='' src='images/books/6.jpg' /></div>
              <div><img alt='' src='images/books/7.jpg' /></div>
              <div><img alt='' src='images/books/8.jpg' /></div>
              <div><img alt='' src='images/books/9.jpg' /></div>
              <div><img alt='' src='images/books/10.jpg' /></div>
              <div><img alt='' src='images/books/11.jpg' /></div>
              <div><img alt='' src='images/books/12.jpg' /></div>




        </InfiniteCarousel>
        </div>
				
			</div>
		</section>


	  
	   </> 
    )
  }
}

export default Landing
