import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import {addItem} from '../../actions/cartAction'

function ShopList(props) {
    const productUrl = '/single-product/';
    
    return (
        <>
           <div className="list__view">
                <div className="thumb">
                    <NavLink  className="first__img" to={productUrl+props.product.id}><img src={props.product.image} alt={props.product.name} /></NavLink>
                    <NavLink  className="second__img animation1" to={productUrl+props.product.id}><img src={props.product.image} alt={props.product.name} /></NavLink>
                </div>
                <div className="content">
                    <h2><NavLink  to={productUrl+props.product.id}>{props.product.name}</NavLink></h2>
                    <ul className="rating d-flex">
                        <li className="on"><i className="fa fa-star-o"></i></li>
                        <li className="on"><i className="fa fa-star-o"></i></li>
                        <li className="on"><i className="fa fa-star-o"></i></li>
                        <li className="on"><i className="fa fa-star-o"></i></li>
                        <li><i className="fa fa-star-o"></i></li>
                        <li><i className="fa fa-star-o"></i></li>
                    </ul>
                    <ul className="prize__box">
                        <li>${props.product.price}</li>
                        <li className="old__prize">${props.product.discount}</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                    <ul className="cart__action d-flex">
                        <li><span className="cart" onClick={() => props.addItem(props.product)}><i className="bi bi-shopping-bag4"></i></span></li>
                        <li className="wishlist"><NavLink  to="cart.html"></NavLink></li>
                        <li className="compare"><NavLink  to="cart.html"></NavLink></li>
                    </ul>

                </div>
            </div>
		        					 
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
  )(ShopList);