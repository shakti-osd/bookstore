import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import CartMini from '../shop/Cart-Mini'

import {logoutUser} from '../../actions/authActions'

function Header(props) {
	// Logout User
	const onLogoutClick = (e) => {
		e.preventDefault();
		//props.clearCurrentProfile();
		props.logoutUser();
	  }

	const { isAuthenticated } = props.auth;

	// toggle Hearder Search
	const [searchToggle, setSearchToggle] = useState({addClass:false})	
	const toggleSearch = () => {
		setSearchToggle({addClass:!searchToggle.addClass})
	}

	var searchClass = ["brown--color box-search-content search_active block-bg close__top"];	
	
	if(searchToggle.addClass) {
		searchClass.push('is-visible');
	}

	// Toggle Mini Cart
	const [cartToggle, setCartToggle] = useState({addClass:false})
	const toggleMiniCart = () => {
		setCartToggle({addClass:!cartToggle.addClass})
	}

	var cartClass = ["block-minicart minicart__active"];	
	
	if(cartToggle.addClass) {
		cartClass.push('is-visible');
	}

	// Toggle Profile Header
	const [profileToggle, setProfileToggle] = useState({addClass:false})
	const toggleProfile = () => {
		setProfileToggle({addClass:!profileToggle.addClass})
	}

	var profileClass = ["searchbar__content setting__block"];	
	
	if(profileToggle.addClass) {
		profileClass.push('is-visible');
	}

	// Total items in cart
	const totalItemsArray = props.cart.cartItems;
	const totalItems = totalItemsArray.reduce((prev, cur) => prev + cur.quantity, 0)


    return (
        <>
            <header id="wn__header" className="header__area header__absolute sticky__header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 col-sm-6 col-6 col-lg-2">
						<div className="logo">
							<NavLink to="/">
								<img src={window.location.origin + '/images/logo/logo.png'} alt="logo" />
							</NavLink>
						</div>
					</div>
					<div className="col-lg-8 d-none d-lg-block">
						<nav className="mainmenu__nav">
							<ul className="meninmenu d-flex justify-content-start">
								<li className="drop with--one--item"><NavLink to="/">Home</NavLink></li>
								<li className="drop"><NavLink to="/shop">Shop</NavLink></li>
								<li className="drop"><NavLink to="/">Books</NavLink>
									<div className="megamenu mega03">
										<ul className="item item03">
											<li className="title">Categories</li>
											<li><NavLink to="/">Biography </NavLink></li>
											<li><NavLink to="/">Business </NavLink></li>
											<li><NavLink to="/">Cookbooks </NavLink></li>
											<li><NavLink to="/">Health & Fitness </NavLink></li>
											<li><NavLink to="/">History </NavLink></li>
										</ul>
										<ul className="item item03">
											<li className="title">Customer Favourite</li>
											<li><NavLink to="/">Mystery</NavLink></li>
											<li><NavLink to="/">Religion & Inspiration</NavLink></li>
											<li><NavLink to="/">Romance</NavLink></li>
											<li><NavLink to="/">Fiction/Fantasy</NavLink></li>
											<li><NavLink to="/">Sleeveless</NavLink></li>
										</ul>
										<ul className="item item03">
											<li className="title">Collections</li>
											<li><NavLink to="/">Science </NavLink></li>
											<li><NavLink to="/">Fiction/Fantasy</NavLink></li>
											<li><NavLink to="/">Self-Improvemen</NavLink></li>
											<li><NavLink to="/">Home & Garden</NavLink></li>
											<li><NavLink to="/">Humor Books</NavLink></li>
										</ul>
									</div>
								</li>
								<li className="drop"><NavLink to="/">Kids</NavLink>
									<div className="megamenu mega02">
										<ul className="item item02">
											<li className="title">Top Collections</li>
											<li><NavLink to="/">American Girl</NavLink></li>
											<li><NavLink to="/">Diary Wimpy Kid</NavLink></li>
											<li><NavLink to="/">Finding Dory</NavLink></li>
											<li><NavLink to="/">Harry Potter</NavLink></li>
											<li><NavLink to="/">Land of Stories</NavLink></li>
										</ul>
										<ul className="item item02">
											<li className="title">More For Kids</li>
											<li><NavLink to="/">B&N Educators</NavLink></li>
											<li><NavLink to="/">B&N Kids' Club</NavLink></li>
											<li><NavLink to="/">Kids' Music</NavLink></li>
											<li><NavLink to="/">Toys & Games</NavLink></li>
											<li><NavLink to="/">Hoodies</NavLink></li>
										</ul>
									</div>
								</li>
								<li className="drop"><NavLink to="#">Pages</NavLink>
									<div className="megamenu dropdown">
										<ul className="item item01">
											<li><NavLink to="/about">About</NavLink></li>
											<li className="label2"><NavLink to="/">Portfolio</NavLink>
												<ul>
													<li><NavLink to="/">Portfolio</NavLink></li>
													<li><NavLink to="/">Portfolio Details</NavLink></li>
												</ul>
											</li>
											<li><NavLink to="/my-account">My Account</NavLink></li>
											<li><NavLink to="/cart">Cart Page</NavLink></li>
											<li><NavLink to="/checkout">Checkout</NavLink></li>
											<li><NavLink to="/wishlist">Wishlist</NavLink></li>
											
											<li><NavLink to="/faq">Faq</NavLink></li>
											<li><NavLink to="/team">Team</NavLink></li>
										</ul>
									</div>
								</li>
								<li className="drop"><NavLink to="/">Blog</NavLink>
									<div className="megamenu dropdown">
										<ul className="item item01">
											<li><NavLink to="/">Blog Page</NavLink></li>
											<li><NavLink to="/">Blog Details</NavLink></li>
										</ul>
									</div>
								</li>
								<li><NavLink to="/contact">Contact</NavLink></li>
							</ul>
						</nav>
					</div>
					<div className="col-md-6 col-sm-6 col-6 col-lg-2">
						<ul className="header__sidebar__right d-flex justify-content-end align-items-center">
							<li className="shop_search"><NavLink onClick={toggleSearch} className="search__active" to="#"></NavLink></li>
							<li className="wishlist"><NavLink to="/wishlist"></NavLink></li>
							<li className="shopcart">
								<NavLink onClick={toggleMiniCart} className="cartbox_active" to="#">
									<span className="product_qun">{totalItems}</span>
								</NavLink>
								<CartMini toggleCart={toggleMiniCart} cartClass={cartClass.join(' ')} />
								
							</li>
							<li className="setting__bar__icon"><NavLink onClick={toggleProfile} className="setting__active" to="#"></NavLink>
								<div className={profileClass.join(' ')}>
									<div className="content-inner">
										<div className="switcher-currency">
											<strong className="label switcher-label">
												<span>Currency</span>
											</strong>
											<div className="switcher-options">
												<div className="switcher-currency-trigger">
													<span className="currency-trigger">USD - US Dollar</span>
													<ul className="switcher-dropdown">
														<li>GBP - British Pound Sterling</li>
														<li>EUR - Euro</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="switcher-currency">
											<strong className="label switcher-label">
												<span>Language</span>
											</strong>
											<div className="switcher-options">
												<div className="switcher-currency-trigger">
													<span className="currency-trigger">English01</span>
													<ul className="switcher-dropdown">
														<li>English02</li>
														<li>English03</li>
														<li>English04</li>
														<li>English05</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="switcher-currency">
											<strong className="label switcher-label">
												<span>Select Store</span>
											</strong>
											<div className="switcher-options">
												<div className="switcher-currency-trigger">
													<span className="currency-trigger">Fashion Store</span>
													<ul className="switcher-dropdown">
														<li>Furniture</li>
														<li>Shoes</li>
														<li>Speaker Store</li>
														<li>Furniture</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="switcher-currency">
											<strong className="label switcher-label">
												<span>My Account</span>
											</strong>
											<div className="switcher-options">
												<div className="switcher-currency-trigger">
													<div className="setting__menu">
														<span><NavLink to="#">Compare Product</NavLink></span>
														<span><NavLink to="#">My Account</NavLink></span>
														<span><NavLink to="/wishlist">My Wishlist</NavLink></span>
														{isAuthenticated ? <span><a
															href=""
															onClick={onLogoutClick}
															className="nav-link"
														>Logout</a></span> :
														<span><NavLink to="/create-account">Sign In/Sign Up</NavLink></span>
														}
														
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				
				<div className="row d-none">
					<div className="col-lg-12 d-none">
						<nav className="mobilemenu__nav">
							<ul className="meninmenu">
								<li><NavLink to="/">Home</NavLink></li>
								<li><NavLink to="#">Pages</NavLink>
									<ul>
										<li><NavLink to="/about">About Page</NavLink></li>
										<li><NavLink to="/">Portfolio</NavLink>
											<ul>
												<li><NavLink to="/">Portfolio</NavLink></li>
												<li><NavLink to="/">Portfolio Details</NavLink></li>
											</ul>
										</li>
										<li><NavLink to="/my-account">My Account</NavLink></li>
										<li><NavLink to="/cart">Cart Page</NavLink></li>
										<li><NavLink to="/checkout">Checkout</NavLink></li>
										<li><NavLink to="/wishlist">Wishlist</NavLink></li>
										
										<li><NavLink to="/">Faq</NavLink></li>
										<li><NavLink to="/team">Team</NavLink></li>
									</ul>
								</li>
								<li><NavLink to="/shop">Shop</NavLink>
									<ul>
										<li><NavLink to="/">Shop Grid</NavLink></li>
										<li><NavLink to="single-product.html">Single Product</NavLink></li>
									</ul>
								</li>
								<li><NavLink to="/">Blog</NavLink>
									<ul>
										<li><NavLink to="/">Blog</NavLink></li>
										<li><NavLink to="/">Blog Details</NavLink></li>
									</ul>
								</li>
								<li><NavLink to="contact.html">Contact</NavLink></li>
							</ul>
						</nav>
					</div>
				</div>
				
	            <div className="mobile-menu d-block d-lg-none">
	            </div>
	            
			</div>		
		</header>

			<div className={searchClass.join(' ')}>
				<form  className="minisearch" action="#">
				<div className="field__search">
					<input type="text" placeholder="Search entire store here..." />
					<div className="action">
					<NavLink to="#"><i className="zmdi zmdi-search"></i></NavLink>
					</div>
				</div>
				</form>
				
			<div className="close__wrap"  onClick={toggleSearch}>			
				<span>close</span>
			</div>
			</div>
        </>
    )
}

const mapStateToProps = state => ({
	cart: state.cart,
	auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Header);
