import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

import {addItem, removeItem} from '../../actions/cartAction'

function Cart(props) {
    const items = props.cart.cartItems;
    const cartPriceTotal = items.reduce((prev, cur) => prev + cur.price*cur.quantity, 0);

    const cartItems = items.map(item => {
        return (
            <tr key={item.id}>
                <td className="product-thumbnail"><NavLink to="#"><img src={item.image} alt={item.name} /></NavLink></td>
                <td className="product-name"><NavLink to="#">{item.name}</NavLink></td>
                <td className="product-price"><span className="amount">${item.price}</span></td>
                <td className="product-quantity"><input type="number" value={item.quantity} />
                    <span>
                        <button type="button" className="plus" onClick={() => props.addItem(item)}>+</button>
                        <button type="button" className="minus" onClick={() => props.removeItem(item)}>-</button>
                    </span>
                </td>
                <td className="product-subtotal">${item.price * item.quantity}</td>
                <td className="product-remove"><button onClick={() => props.removeItem(item)}>X</button></td>
            </tr>  
        )
    })

    return (
        <>
        <div className="ht__bradcaump__area bg-image--3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bradcaump__inner text-center">
                        	<h2 className="bradcaump-title">Shopping Cart</h2>
                            <nav className="bradcaump-content">
                              <NavLink className="breadcrumb_item" to="/">Home</NavLink>
                              <span className="brd-separetor">/</span>
                              <span className="breadcrumb_item active">Shopping Cart</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="cart-main-area section-padding--lg bg--white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 ol-lg-12">
                        <form action="#">               
                            <div className="table-content wnro__table table-responsive">
                                <table>
                                    <thead>
                                        <tr className="title-top">
                                            <th className="product-thumbnail">Image</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems}                            
                                    </tbody>
                                </table>
                            </div>
                        </form> 
                        <div className="cartbox__btn">
                            <ul className="cart__btn__list d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                                <li><NavLink to="#">Coupon Code</NavLink></li>
                                <li><NavLink to="#">Apply Code</NavLink></li>
                                <li><NavLink to="#">Update Cart</NavLink></li>
                                <li><NavLink to="/checkout">Check Out</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="cartbox__total__area">
                            <div className="cartbox-total d-flex justify-content-between">
                                <ul className="cart__total__list">
                                    <li>Cart total</li>
                                    <li>Sub Total</li>
                                </ul>
                                <ul className="cart__total__tk">
                                    <li>${cartPriceTotal}</li>
                                    <li>${cartPriceTotal}</li>
                                </ul>
                            </div>
                            <div className="cart__total__amount">
                                <span>Grand Total</span>
                                <span>${cartPriceTotal}</span>
                            </div>
                        </div>
                    </div>
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
    removeItem: item => dispatch(removeItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);