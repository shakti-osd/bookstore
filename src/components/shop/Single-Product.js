import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

import { connect } from 'react-redux'
import {addItem} from '../../actions/cartAction'

//import ProductCrasual from '../shop/Product-Crasual'

function SingleProduct(props) {

    const [product, setProduct] = useState({p:{}});
    const productId = props.match.params.id;

    const apiData = useCallback(()=> {
        axios.get('/products.js')
        .then(response => {
            
            const allProducts = response.data.results;
            const singleProduct = allProducts.filter(item => item.id === parseInt(productId))  
            console.log('singleProduct', singleProduct[0])          
            setProduct({p: singleProduct[0]})
        })
        .catch(err => console.log(err))
    },[productId])
    
    useEffect(() => apiData(),[productId,apiData])

    
    return (
        <>
            <div className="ht__bradcaump__area bg-image--4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Shop Single</h2>
                                <nav className="bradcaump-content">
                                <NavLink className="breadcrumb_item" to="/">Home</NavLink>
                                <span className="brd-separetor">/</span>
                                <span className="breadcrumb_item active">Shop Single</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="maincontent bg--white pt--80 pb--55">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-12">
                            <div className="wn__single__product">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="wn__fotorama__wrapper">
                                            <div className="fotorama wn__fotorama__action" data-nav="thumbs">
                                                <NavLink to="1.jpg"><img src={window.location.origin + "/images/product/1.jpg"} alt="" /></NavLink>
                                                <NavLink to="2.jpg"><img src={window.location.origin + "/images/product/2.jpg"} alt="" /></NavLink>
                                                <NavLink to="3.jpg"><img src={window.location.origin + "/images/product/3.jpg"} alt="" /></NavLink>
                                                <NavLink to="4.jpg"><img src={window.location.origin + "/images/product/4.jpg"} alt="" /></NavLink>
                                                <NavLink to="5.jpg"><img src={window.location.origin + "/images/product/5.jpg"} alt="" /></NavLink>
                                                <NavLink to="6.jpg"><img src={window.location.origin + "/images/product/6.jpg"} alt="" /></NavLink>
                                                <NavLink to="7.jpg"><img src={window.location.origin + "/images/product/7.jpg"} alt="" /></NavLink>
                                                <NavLink to="8.jpg"><img src={window.location.origin + "/images/product/8.jpg"} alt="" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="product__info__main">
                                            <h1>{product.p.name}</h1>
                                            <div className="product-reviews-summary d-flex">
                                                <ul className="rating-summary d-flex">
                                                    <li><i className="zmdi zmdi-star-outline"></i></li>
                                                    <li><i className="zmdi zmdi-star-outline"></i></li>
                                                    <li><i className="zmdi zmdi-star-outline"></i></li>
                                                    <li className="off"><i className="zmdi zmdi-star-outline"></i></li>
                                                    <li className="off"><i className="zmdi zmdi-star-outline"></i></li>
                                                </ul>
                                            </div>
                                            <div className="price-box">
                                                <span>${product.p.price}</span>
                                            </div>
                                            <div className="product__overview">
                                                <p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.</p>
                                                <p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. </p>
                                            </div>
                                            <div className="box-tocart d-flex">
                                                <span>Qty</span>
                                                <input id="qty" className="input-text qty" name="qty" min="1" value="1" title="Qty" type="number" readOnly />
                                                <div className="addtocart__actions">
                                                    <button className="tocart" type="submit" title="Add to Cart" onClick={() => props.addItem(product.p)}>Add to Cart</button>
                                                </div>
                                                <div className="product-addto-links clearfix">
                                                    <NavLink className="wishlist" to="#"></NavLink>
                                                    <NavLink className="compare" to="#"></NavLink>
                                                </div>
                                            </div>
                                            <div className="product_meta">
                                                <span className="posted_in">Categories:&nbsp; 
                                                    <NavLink to="#">{product.p.category}</NavLink>
                                                </span>
                                            </div>
                                            <div className="product-share">
                                                <ul>
                                                    <li className="categories-title">Share :</li>
                                                    <li>
                                                        <NavLink to="#">
                                                            <i className="icon-social-twitter icons"></i>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">
                                                            <i className="icon-social-tumblr icons"></i>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">
                                                            <i className="icon-social-facebook icons"></i>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">
                                                            <i className="icon-social-linkedin icons"></i>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__info__detailed">
                                <div className="pro_details_nav nav justify-content-start" role="tablist">
                                    <NavLink className="nav-item nav-link active" data-toggle="tab" to="#nav-details" role="tab">Details</NavLink>
                                    <NavLink className="nav-item nav-link" data-toggle="tab" to="#nav-review" role="tab">Reviews</NavLink>
                                </div>
                                <div className="tab__container">
                                    
                                    <div className="pro__tab_label tab-pane fade show active" id="nav-details" role="tabpanel">
                                        <div className="description__attribute">
                                            <p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.</p>
                                            <ul>
                                                <li>• Two-tone gray heather hoodie.</li>
                                                <li>• Drawstring-adjustable hood. </li>
                                                <li>• Machine wash/dry.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="pro__tab_label tab-pane fade" id="nav-review" role="tabpanel">
                                        <div className="review__attribute">
                                            <h1>Customer Reviews</h1>
                                            <h2>Hastech</h2>
                                            <div className="review__ratings__type d-flex">
                                                <div className="review-ratings">
                                                    <div className="rating-summary d-flex">
                                                        <span>Quality</span>
                                                        <ul className="rating d-flex">
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>

                                                    <div className="rating-summary d-flex">
                                                        <span>Price</span>
                                                        <ul className="rating d-flex">
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="rating-summary d-flex">
                                                        <span>value</span>
                                                        <ul className="rating d-flex">
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="review-content">
                                                    <p>Hastech</p>
                                                    <p>Review by Hastech</p>
                                                    <p>Posted on 11/6/2018</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-fieldset">
                                            <h2>You're reviewing:</h2>
                                            <h3>Chaz Kangeroo Hoodie</h3>
                                            <div className="review-field-ratings">
                                                <div className="product-review-table">
                                                    <div className="review-field-rating d-flex">
                                                        <span>Quality</span>
                                                        <ul className="rating d-flex">
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-field-rating d-flex">
                                                        <span>Price</span>
                                                        <ul className="rating d-flex">
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-field-rating d-flex">
                                                        <span>Value</span>
                                                        <ul className="rating d-flex">
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review_form_field">
                                                <div className="input__box">
                                                    <span>Nickname</span>
                                                    <input id="nickname_field" type="text" name="nickname" />
                                                </div>
                                                <div className="input__box">
                                                    <span>Summary</span>
                                                    <input id="summery_field" type="text" name="summery" />
                                                </div>
                                                <div className="input__box">
                                                    <span>Review</span>
                                                    <textarea name="review"></textarea>
                                                </div>
                                                <div className="review-form-actions">
                                                    <button>Submit Review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="wn__related__product pt--80 pb--50">
                                <div className="section__title text-center">
                                    <h2 className="title__be--2">Related Products</h2>
                                </div>
                                <div className="row mt--60">

                                </div>
                            </div>
                            <div className="wn__related__product">
                                <div className="section__title text-center">
                                    <h2 className="title__be--2">upsell products</h2>
                                </div>
                                <div className="row mt--60">
                                    <div className="productcategory__slide--2 arrows_style owl-carousel owl-theme">
                                        
                                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="product__thumb">
                                                <NavLink className="first__img" to="/"><img src={window.location.origin + "/images/books/1.jpg" } alt="product" /></NavLink>
                                                <NavLink className="second__img animation1" to="/"><img src={window.location.origin + "/images/books/2.jpg" } alt="product" /></NavLink>
                                                <div className="hot__box">
                                                    <span className="hot-label">BEST SALLER</span>
                                                </div>
                                            </div>
                                            <div className="product__content content--center">
                                                <h4><NavLink to="/">robin parrish</NavLink></h4>
                                                <ul className="prize d-flex">
                                                    <li>$35.00</li>
                                                    <li className="old_prize">$35.00</li>
                                                </ul>
                                                <div className="action">
                                                    <div className="actions_inner">
                                                        <ul className="add_to_links">
                                                            <li><NavLink className="cart" to="cart.html"><i className="bi bi-shopping-bag4"></i></NavLink></li>
                                                            <li><NavLink className="wishlist" to="wishlist.html"><i className="bi bi-shopping-cart-full"></i></NavLink></li>
                                                            <li><NavLink className="compare" to="#"><i className="bi bi-heart-beat"></i></NavLink></li>
                                                            <li><NavLink data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" to="#productmodal"><i className="bi bi-search"></i></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product__hover--content">
                                                    <ul className="rating d-flex">
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="product__thumb">
                                                <NavLink className="first__img" to="/"><img src={window.location.origin + "/images/books/3.jpg" } alt="product" /></NavLink>
                                                <NavLink className="second__img animation1" to="/"><img src={window.location.origin + "/images/books/4.jpg" } alt="product" /></NavLink>
                                                <div className="hot__box color--2">
                                                    <span className="hot-label">HOT</span>
                                                </div>
                                            </div>
                                            <div className="product__content content--center">
                                                <h4><NavLink to="/">The Remainng</NavLink></h4>
                                                <ul className="prize d-flex">
                                                    <li>$35.00</li>
                                                    <li className="old_prize">$35.00</li>
                                                </ul>
                                                <div className="action">
                                                    <div className="actions_inner">
                                                        <ul className="add_to_links">
                                                            <li><NavLink className="cart" to="cart.html"><i className="bi bi-shopping-bag4"></i></NavLink></li>
                                                            <li><NavLink className="wishlist" to="wishlist.html"><i className="bi bi-shopping-cart-full"></i></NavLink></li>
                                                            <li><NavLink className="compare" to="#"><i className="bi bi-heart-beat"></i></NavLink></li>
                                                            <li><NavLink data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" to="#productmodal"><i className="bi bi-search"></i></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product__hover--content">
                                                    <ul className="rating d-flex">
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="product__thumb">
                                                <NavLink className="first__img" to="/"><img src={window.location.origin + "/images/books/7.jpg" } alt="product" /></NavLink>
                                                <NavLink className="second__img animation1" to="/"><img src={window.location.origin + "/images/books/8.jpg" } alt="product" /></NavLink>
                                                <div className="hot__box">
                                                    <span className="hot-label">HOT</span>
                                                </div>
                                            </div>
                                            <div className="product__content content--center">
                                                <h4><NavLink to="/">Lando</NavLink></h4>
                                                <ul className="prize d-flex">
                                                    <li>$35.00</li>
                                                    <li className="old_prize">$50.00</li>
                                                </ul>
                                                <div className="action">
                                                    <div className="actions_inner">
                                                        <ul className="add_to_links">
                                                            <li><NavLink className="cart" to="cart.html"><i className="bi bi-shopping-bag4"></i></NavLink></li>
                                                            <li><NavLink className="wishlist" to="wishlist.html"><i className="bi bi-shopping-cart-full"></i></NavLink></li>
                                                            <li><NavLink className="compare" to="#"><i className="bi bi-heart-beat"></i></NavLink></li>
                                                            <li><NavLink data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" to="#productmodal"><i className="bi bi-search"></i></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product__hover--content">
                                                    <ul className="rating d-flex">
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="product__thumb">
                                                <NavLink className="first__img" to="/"><img src={window.location.origin + "/images/books/9.jpg" } alt="product" /></NavLink>
                                                <NavLink className="second__img animation1" to="/"><img src={window.location.origin + "/images/books/10.jpg" }alt="product" /></NavLink>
                                                <div className="hot__box">
                                                    <span className="hot-label">HOT</span>
                                                </div>
                                            </div>
                                            <div className="product__content content--center">
                                                <h4><NavLink to="/">Doctor Wldo</NavLink></h4>
                                                <ul className="prize d-flex">
                                                    <li>$35.00</li>
                                                    <li className="old_prize">$35.00</li>
                                                </ul>
                                                <div className="action">
                                                    <div className="actions_inner">
                                                        <ul className="add_to_links">
                                                            <li><NavLink className="cart" to="cart.html"><i className="bi bi-shopping-bag4"></i></NavLink></li>
                                                            <li><NavLink className="wishlist" to="wishlist.html"><i className="bi bi-shopping-cart-full"></i></NavLink></li>
                                                            <li><NavLink className="compare" to="#"><i className="bi bi-heart-beat"></i></NavLink></li>
                                                            <li><NavLink data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" to="#productmodal"><i className="bi bi-search"></i></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product__hover--content">
                                                    <ul className="rating d-flex">
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="product__thumb">
                                                <NavLink className="first__img" to="/"><img src={window.location.origin + "/images/books/11.jpg" }alt="product" /></NavLink>
                                                <NavLink className="second__img animation1" to="/"><img src={window.location.origin + "/images/books/2.jpg" } alt="product" /></NavLink>
                                                <div className="hot__box">
                                                    <span className="hot-label">BEST SALER</span>
                                                </div>
                                            </div>
                                            <div className="product__content content--center content--center">
                                                <h4><NavLink to="/">Animals Life</NavLink></h4>
                                                <ul className="prize d-flex">
                                                    <li>$50.00</li>
                                                    <li className="old_prize">$35.00</li>
                                                </ul>
                                                <div className="action">
                                                    <div className="actions_inner">
                                                        <ul className="add_to_links">
                                                            <li><NavLink className="cart" to="cart.html"><i className="bi bi-shopping-bag4"></i></NavLink></li>
                                                            <li><NavLink className="wishlist" to="wishlist.html"><i className="bi bi-shopping-cart-full"></i></NavLink></li>
                                                            <li><NavLink className="compare" to="#"><i className="bi bi-heart-beat"></i></NavLink></li>
                                                            <li><NavLink data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" to="#productmodal"><i className="bi bi-search"></i></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product__hover--content">
                                                    <ul className="rating d-flex">
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="product__thumb">
                                                <NavLink className="first__img" to="/"><img src={window.location.origin + "/images/books/1.jpg" } alt="product" /></NavLink>
                                                <NavLink className="second__img animation1" to="/"><img src={window.location.origin + "/images/books/6.jpg" } alt="product" /></NavLink>
                                                <div className="hot__box">
                                                    <span className="hot-label">BEST SALER</span>
                                                </div>
                                            </div>
                                            <div className="product__content content--center content--center">
                                                <h4><NavLink to="/">Olio Madu</NavLink></h4>
                                                <ul className="prize d-flex">
                                                    <li>$50.00</li>
                                                    <li className="old_prize">$35.00</li>
                                                </ul>
                                                <div className="action">
                                                    <div className="actions_inner">
                                                        <ul className="add_to_links">
                                                            <li><NavLink className="cart" to="cart.html"><i className="bi bi-shopping-bag4"></i></NavLink></li>
                                                            <li><NavLink className="wishlist" to="wishlist.html"><i className="bi bi-shopping-cart-full"></i></NavLink></li>
                                                            <li><NavLink className="compare" to="#"><i className="bi bi-heart-beat"></i></NavLink></li>
                                                            <li><NavLink data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" to="#productmodal"><i className="bi bi-search"></i></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product__hover--content">
                                                    <ul className="rating d-flex">
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 md-mt-40 sm-mt-40">
                            <div className="shop__sidebar">
                                <aside className="wedget__categories poroduct--cat">
                                    <h3 className="wedget__title">Product Categories</h3>
                                    <ul>
                                        <li><NavLink to="#">Biography <span>(3)</span></NavLink></li>
                                        <li><NavLink to="#">Business <span>(4)</span></NavLink></li>
                                        <li><NavLink to="#">Cookbooks <span>(6)</span></NavLink></li>
                                        <li><NavLink to="#">Health & Fitness <span>(7)</span></NavLink></li>
                                        <li><NavLink to="#">History <span>(8)</span></NavLink></li>
                                        <li><NavLink to="#">Mystery <span>(9)</span></NavLink></li>
                                        <li><NavLink to="#">Inspiration <span>(13)</span></NavLink></li>
                                        <li><NavLink to="#">Romance <span>(20)</span></NavLink></li>
                                        <li><NavLink to="#">Fiction/Fantasy <span>(22)</span></NavLink></li>
                                        <li><NavLink to="#">Self-Improvement <span>(13)</span></NavLink></li>
                                        <li><NavLink to="#">Humor Books <span>(17)</span></NavLink></li>
                                        <li><NavLink to="#">Harry Potter <span>(20)</span></NavLink></li>
                                        <li><NavLink to="#">Land of Stories <span>(34)</span></NavLink></li>
                                        <li><NavLink to="#">Kids' Music <span>(60)</span></NavLink></li>
                                        <li><NavLink to="#">Toys & Games <span>(3)</span></NavLink></li>
                                        <li><NavLink to="#">hoodies <span>(3)</span></NavLink></li>
                                    </ul>
                                </aside>
                                <aside className="wedget__categories pro--range">
                                    <h3 className="wedget__title">Filter by price</h3>
                                    <div className="content-shopby">
                                        <div className="price_filter s-filter clear">
                                            <form action="#" method="GET">
                                                <div id="slider-range"></div>
                                                <div className="slider__range--output">
                                                    <div className="price__output--wrap">
                                                        <div className="price--output">
                                                            <span>Price :</span><input type="text" id="amount" readOnly />
                                                        </div>
                                                        <div className="price--filter">
                                                            <NavLink to="#">Filter</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </aside>
                                <aside className="wedget__categories poroduct--compare">
                                    <h3 className="wedget__title">Compare</h3>
                                    <ul>
                                        <li><NavLink to="#">x</NavLink><NavLink to="#">Condimentum posuere</NavLink></li>
                                        <li><NavLink to="#">x</NavLink><NavLink to="#">Condimentum posuere</NavLink></li>
                                        <li><NavLink to="#">x</NavLink><NavLink to="#">Dignissim venenatis</NavLink></li>
                                    </ul>
                                </aside>
                                <aside className="wedget__categories poroduct--tag">
                                    <h3 className="wedget__title">Product Tags</h3>
                                    <ul>
                                        <li><NavLink to="#">Biography</NavLink></li>
                                        <li><NavLink to="#">Business</NavLink></li>
                                        <li><NavLink to="#">Cookbooks</NavLink></li>
                                        <li><NavLink to="#">Health & Fitness</NavLink></li>
                                        <li><NavLink to="#">History</NavLink></li>
                                        <li><NavLink to="#">Mystery</NavLink></li>
                                        <li><NavLink to="#">Inspiration</NavLink></li>
                                        <li><NavLink to="#">Religion</NavLink></li>
                                        <li><NavLink to="#">Fiction</NavLink></li>
                                        <li><NavLink to="#">Fantasy</NavLink></li>
                                        <li><NavLink to="#">Music</NavLink></li>
                                        <li><NavLink to="#">Toys</NavLink></li>
                                        <li><NavLink to="#">Hoodies</NavLink></li>
                                    </ul>
                                </aside>
                                <aside className="wedget__categories sidebar--banner">
                                    <img src={window.location.origin + "/images/others/banner_left.jpg"} alt="banner" />
                                    <div className="text">
                                        <h2>new products</h2>
                                        <h6>save up to <br /> <strong>40%</strong>off</h6>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = state => ({
    cart: state.cart,
    productLists:state.allProducts
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleProduct);
