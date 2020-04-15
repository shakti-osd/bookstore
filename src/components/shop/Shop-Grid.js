import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import {addItem} from '../../actions/cartAction'
import {addWishlistItem, removeWishlistItem} from '../../actions/wishListAction'

function ShopGrid(props) {
    const productUrl = '/single-product/';

    return (
        <>
           <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="product__thumb">
                    <NavLink  className="first__img" to={productUrl+props.product.id}><img src={props.product.image} alt={props.product.name} /></NavLink>
                    <NavLink  className="second__img animation1" to={productUrl+props.product.id}><img src={props.product.image} alt="product" /></NavLink>
                    <div className="hot__box">
                        <span className="hot-label">BEST SALLER</span>
                    </div>
                </div>
                <div className="product__content content--center">
                    <h4><NavLink  to={productUrl+props.product.id}>{props.product.name}</NavLink></h4>
                    <ul className="prize d-flex">
                        <li>${props.product.price}</li>
                        <li className="old_prize">${props.product.discount}</li>
                    </ul>
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">                                
                                <li><span className="cart" onClick={() => props.addItem(props.product)}><i className="bi bi-shopping-bag4"></i></span></li>
                                <li><span  className="wishlist" onClick={() => props.addWishlistItem(props.product)}><i className="bi bi-shopping-cart-full"></i></span></li>
                                <li><NavLink  className="compare" to="#"><i className="bi bi-heart-beat"></i></NavLink></li>
                                <li><NavLink  data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" to="#productmodal"><i className="bi bi-search"></i></NavLink></li>
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
		        					 
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    addWishlistItem: item => dispatch(addWishlistItem(item)),
    removeWishlistItem: item => dispatch(removeWishlistItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShopGrid);
