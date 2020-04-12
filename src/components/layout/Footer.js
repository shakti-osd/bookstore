import React from 'react';
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
	<>  
		<footer id="wn__footer" className="footer__area bg__cat--8 brown--color">
				<div className="footer-static-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="footer__widget footer__menu">
									<div className="ft__logo">
										<NavLink to="/">
											<img src={window.location.origin + "/images/logo/3.png"} alt="logo" />
										</NavLink>
										<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered duskam alteration variations of passages</p>
									</div>
									<div className="footer__content">
										<ul className="social__net social__net--2 d-flex justify-content-center">
											<li><NavLink to="#"><i className="bi bi-facebook"></i></NavLink></li>
											<li><NavLink to="#"><i className="bi bi-google"></i></NavLink></li>
											<li><NavLink to="#"><i className="bi bi-twitter"></i></NavLink></li>
											<li><NavLink to="#"><i className="bi bi-linkedin"></i></NavLink></li>
											<li><NavLink to="#"><i className="bi bi-youtube"></i></NavLink></li>
										</ul>
										<ul className="mainmenu d-flex justify-content-center">
											<li><NavLink to="/">Trending</NavLink></li>
											<li><NavLink to="/">Best Seller</NavLink></li>
											<li><NavLink to="/">All Product</NavLink></li>
											<li><NavLink to="/">Wishlist</NavLink></li>
											<li><NavLink to="/">Blog</NavLink></li>
											<li><NavLink to="/contact">Contact</NavLink></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright__wrapper">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="copyright">
									<div className="copy__right__inner text-left">
										<p>Copyright <i className="fa fa-copyright"></i> <NavLink to="#">BookStore</NavLink> All Rights Reserved</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="payment text-right">
									<img src={window.location.origin + "/images/icons/payment.png"} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		
		<div id="quickview-wrapper">
			<div className="modal fade" id="productmodal" tabIndex="-1" role="dialog">
			<div className="modal-dialog modal__container" role="document">
				<div className="modal-content">
					<div className="modal-header modal__header">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					</div>
					<div className="modal-body">
						<div className="modal-product">
							
							<div className="product-images">
								<div className="main-image images">
									<img alt="big images" src={window.location.origin + "/images/product/big-img/1.jpg"} />
								</div>
							</div>
							
							<div className="product-info">
								<h1>Simple Fabric Bags</h1>
								<div className="rating__and__review">
									<ul className="rating">
										<li><span className="ti-star"></span></li>
										<li><span className="ti-star"></span></li>
										<li><span className="ti-star"></span></li>
										<li><span className="ti-star"></span></li>
										<li><span className="ti-star"></span></li>
									</ul>
									<div className="review">
										<NavLink to="#">4 customer reviews</NavLink>
									</div>
								</div>
								<div className="price-box-3">
									<div className="s-price-box">
										<span className="new-price">$17.20</span>
										<span className="old-price">$45.00</span>
									</div>
								</div>
								<div className="quick-desc">
									Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look.
								</div>
								<div className="select__color">
									<h2>Select color</h2>
									<ul className="color__list">
										<li className="red"><NavLink title="Red" to="#">Red</NavLink></li>
										<li className="gold"><NavLink title="Gold" to="#">Gold</NavLink></li>
										<li className="orange"><NavLink title="Orange" to="#">Orange</NavLink></li>
										<li className="orange"><NavLink title="Orange" to="#">Orange</NavLink></li>
									</ul>
								</div>
								<div className="select__size">
									<h2>Select size</h2>
									<ul className="color__list">
										<li className="l__size"><NavLink title="L" to="#">L</NavLink></li>
										<li className="m__size"><NavLink title="M" to="#">M</NavLink></li>
										<li className="s__size"><NavLink title="S" to="#">S</NavLink></li>
										<li className="xl__size"><NavLink title="XL" to="#">XL</NavLink></li>
										<li className="xxl__size"><NavLink title="XXL" to="#">XXL</NavLink></li>
									</ul>
								</div>
								<div className="social-sharing">
									<div className="widget widget_socialsharing_widget">
										<h3 className="widget-title-modal">Share this product</h3>
										<ul className="social__net social__net--2 d-flex justify-content-start">
											<li className="facebook"><NavLink to="#" className="rss social-icon"><i className="zmdi zmdi-rss"></i></NavLink></li>
											<li className="linkedin"><NavLink to="#" className="linkedin social-icon"><i className="zmdi zmdi-linkedin"></i></NavLink></li>
											<li className="pinterest"><NavLink to="#" className="pinterest social-icon"><i className="zmdi zmdi-pinterest"></i></NavLink></li>
											<li className="tumblr"><NavLink to="#" className="tumblr social-icon"><i className="zmdi zmdi-tumblr"></i></NavLink></li>
										</ul>
									</div>
								</div>
								<div className="addtocart-btn">
									<NavLink to="#">Add to cart</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>

	</>
 );
};


export default Footer;