import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import {addItem} from '../../actions/cartAction'

import HorizontalGallery from 'react-dynamic-carousel'

function ProductCrasual(props) {
    const productItems = props.items;
    //console.log('productItems',productItems)
    const productUrl = '/single-product/';
    return (
        <>

        <HorizontalGallery
            tiles={productItems.map((product) => (
             <div className="product product__style--3 col-12">
                <div className="product__thumb">
                    <NavLink  className="first__img" to={productUrl+product.id}><img src={product.image} alt={product.name} /></NavLink>
                    <NavLink  className="second__img animation1" to={productUrl+product.id}><img src={product.image} alt="product" /></NavLink>
                    <div className="hot__box">
                        <span className="hot-label">BEST SALLER</span>
                    </div>
                </div>
                <div className="product__content content--center">
                    <h4><NavLink  to={productUrl+product.id}>{product.name}</NavLink></h4>
                    <ul className="prize d-flex">
                        <li>${product.price}</li>
                        <li className="old_prize">${product.discount}</li>
                    </ul>
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">                                
                                <li><span className="cart" onClick={() => props.addItem(product)}><i className="bi bi-shopping-bag4"></i></span></li>
                                <li><NavLink  className="wishlist" to="wishlist.html"><i className="bi bi-shopping-cart-full"></i></NavLink></li>
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
            ))}
            elementWidth={270}
            fadeDistance={1}
            minPadding={5}
        />


           		        					 
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductCrasual);