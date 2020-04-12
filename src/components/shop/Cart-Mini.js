import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import CartItem from './Cart-Item'

function CartMini(props) {
	
	const {toggleCart, cartClass, cart} = props;
	const cartPriceTotal = cart.cartItems.reduce((prev, cur) => prev + cur.price*cur.quantity, 0);
	const cartItemTotal = cart.cartItems.reduce((prev, cur) => prev + cur.quantity, 0);

    
	
    return (
        <div>
            <div className={cartClass}>
									<div className="minicart-content-wrapper">
										<div className="micart__close" onClick={toggleCart}>
											<span>close</span>
										</div>
										<div className="items-total d-flex justify-content-between">
											<span>{cartItemTotal} items</span>
											<span>Cart Subtotal</span>
										</div>
										<div className="total_amount text-right">
											<span>${cartPriceTotal}</span>
										</div>
										<div className="mini_action checkout">
											<NavLink className="checkout__btn" to="/checkout">Go to Checkout</NavLink>
										</div>
										<div className="single__items">
											<div className="miniproduct">
												<CartItem products={cart.cartItems} />											
																								
											</div>
										</div>
										<div className="mini_action cart">
											<NavLink className="cart__btn" to="/cart">View and edit cart</NavLink>
										</div>
									</div>
								</div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
  });
  
  export default connect(
    mapStateToProps,
    null
  )(CartMini);
