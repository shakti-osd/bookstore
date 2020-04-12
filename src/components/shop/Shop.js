import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import ShopGrid from './Shop-Grid'
import ShopList from './Shop-List'

import './Shop.css'

class Shop extends Component{
    constructor(props){
		super(props)
		
		this.state = {
			products: [],
			error: ''
		}
	}
	
	componentDidMount(){
		axios.get('/products.js')
      .then(response => {
        console.log(response.data.results)
        this.setState({products: response.data.results})
      })
      .catch(err => console.log(err))
	}


    render(){

		// Shop Grid
		const productsGrid = this.state.products;
		const productShopGrid = productsGrid.map(product => {
				return <ShopGrid key={product.id} product={product} />		
			}		
		)

		// Shop 
		const productsList = this.state.products;
		const productShopList = productsList.map(product => {
				return <ShopList key={product.id} product={product} />		
			}		
		)

		
        return (
            <div>
                <div className="ht__bradcaump__area bg-image--6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title">Shop Grid</h2>
                                    <nav className="bradcaump-content">
                                    <NavLink  className="breadcrumb_item" to="/">Home</NavLink>
                                    <span className="brd-separetor">/</span>
                                    <span className="breadcrumb_item active">Shop Grid</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        	<div className="container">
        		<div className="row">
        			<div className="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
        				<div className="shop__sidebar">
        					<aside className="wedget__categories poroduct--cat">
        						<h3 className="wedget__title">Product Categories</h3>
        						<ul>
        							<li><NavLink  to="#">Biography <span>(3)</span></NavLink></li>
        							<li><NavLink  to="#">Business <span>(4)</span></NavLink></li>
        							<li><NavLink  to="#">Cookbooks <span>(6)</span></NavLink></li>
        							<li><NavLink  to="#">Health & Fitness <span>(7)</span></NavLink></li>
        							<li><NavLink  to="#">History <span>(8)</span></NavLink></li>
        							<li><NavLink  to="#">Mystery <span>(9)</span></NavLink></li>
        							<li><NavLink  to="#">Inspiration <span>(13)</span></NavLink></li>
        							<li><NavLink  to="#">Romance <span>(20)</span></NavLink></li>
        							<li><NavLink  to="#">Fiction/Fantasy <span>(22)</span></NavLink></li>
        							<li><NavLink  to="#">Self-Improvement <span>(13)</span></NavLink></li>
        							<li><NavLink  to="#">Humor Books <span>(17)</span></NavLink></li>
        							<li><NavLink  to="#">Harry Potter <span>(20)</span></NavLink></li>
        							<li><NavLink  to="#">Land of Stories <span>(34)</span></NavLink></li>
        							<li><NavLink  to="#">Kids' Music <span>(60)</span></NavLink></li>
        							<li><NavLink  to="#">Toys & Games <span>(3)</span></NavLink></li>
        							<li><NavLink  to="#">hoodies <span>(3)</span></NavLink></li>
        						</ul>
        					</aside>
        					<aside className="wedget__categories pro--range">
        						<h3 className="wedget__title">Filter by price</h3>
        						<div className="content-shopby">
        						    <div className="price_filter s-filter clear">
        						        <form action="#" method="GET">
										<div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all __web-inspector-hide-shortcut__">
											<div className="ui-slider-range ui-widget-header ui-corner-all" ></div>
												<span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" ></span>
												<span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" ></span>
										</div>
        						            <div className="slider__range--output">
        						                <div className="price__output--wrap">
        						                    <div className="price--output">
        						                        <span>Price :</span><input type="text" id="amount"  readOnly />
        						                    </div>
        						                    <div className="price--filter">
        						                        <NavLink  to="#">Filter</NavLink>
        						                    </div>
        						                </div>
        						            </div>
        						        </form>
        						    </div>
        						</div>
        					</aside>
        					<aside className="wedget__categories poroduct--tag">
        						<h3 className="wedget__title">Product Tags</h3>
        						<ul>
        							<li><NavLink  to="#">Biography</NavLink></li>
        							<li><NavLink  to="#">Business</NavLink></li>
        							<li><NavLink  to="#">Cookbooks</NavLink></li>
        							<li><NavLink  to="#">Health & Fitness</NavLink></li>
        							<li><NavLink  to="#">History</NavLink></li>
        							<li><NavLink  to="#">Mystery</NavLink></li>
        							<li><NavLink  to="#">Inspiration</NavLink></li>
        							<li><NavLink  to="#">Religion</NavLink></li>
        							<li><NavLink  to="#">Fiction</NavLink></li>
        							<li><NavLink  to="#">Fantasy</NavLink></li>
        							<li><NavLink  to="#">Music</NavLink></li>
        							<li><NavLink  to="#">Toys</NavLink></li>
        							<li><NavLink  to="#">Hoodies</NavLink></li>
        						</ul>
        					</aside>
        					<aside className="wedget__categories sidebar--banner">
								<img src="images/others/banner_left.jpg" alt="banner" />
								<div className="text">
									<h2>new products</h2>
									<h6>save up to <br /> <strong>40%</strong>off</h6>
								</div>
        					</aside>
        				</div>
        			</div>
        			<div className="col-lg-9 col-12 order-1 order-lg-2">
        				<div className="row">
        					<div className="col-lg-12">
								<div className="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between">
									<div className="shop__list nav justify-content-center" role="tablist">
			                            <a  className="nav-item nav-link active" data-toggle="tab" href="#nav-grid" role="tab"><i className="fa fa-th"></i></a>
			                            <a  className="nav-item nav-link" data-toggle="tab" href="#nav-list" role="tab"><i className="fa fa-list"></i></a>
			                        </div>
			                        <p>Showing 1–12 of 40 results</p>
			                        <div className="orderby__wrapper">
			                        	<span>Sort By</span>
			                        	<select className="shot__byselect">
			                        		<option>Default sorting</option>
			                        		<option>HeadPhone</option>
			                        		<option>Furniture</option>
			                        		<option>Jewellery</option>
			                        		<option>Handmade</option>
			                        		<option>Kids</option>
			                        	</select>
			                        </div>
		                        </div>
        					</div>
        				</div>
        				<div className="tab__container">
	        				<div className="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
								
	        					<div className="row">

								{productShopGrid}	        						        					
	        						
		        					
		        					
	        					</div>
	        					{/* <ul className="wn__pagination">
	        						<li className="active"><NavLink  to="#">1</NavLink></li>
	        						<li><NavLink  to="#">2</NavLink></li>
	        						<li><NavLink  to="#">3</NavLink></li>
	        						<li><NavLink  to="#">4</NavLink></li>
	        						<li><NavLink  to="#"><i className="zmdi zmdi-chevron-right"></i></NavLink></li>
	        					</ul> */}
	        				</div>
	        				
							
							
							
							<div className="shop-grid tab-pane fade" id="nav-list" role="tabpanel">
	        					<div className="list__view__wrapper">
	        						
								{productShopList}	
	        						
	        						
	        					</div>
	        				</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>

            </div>
        )
    }
}

export default connect(null, null)(Shop)