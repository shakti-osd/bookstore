import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

import {removeItem} from '../../actions/cartAction'

function CartItem(props) {
    console.log('CartItems',props.products)
    const allItems = props.products;
   
    const miniCartItems = allItems.map(item => {
        return (
            <div key={item.id} className="item01 d-flex">
                <div className="thumb">
                    <NavLink to="product-details.html"><img src={item.image} alt={item.name} /></NavLink>
                </div>
                <div className="content">
                    <h6><NavLink to="product-details.html">{item.name}</NavLink></h6>
                    <span className="prize">${item.price}</span>
                    <div className="product_prize d-flex justify-content-between">
                        <span className="qun">Qty: {item.quantity}</span>
                        <ul className="d-flex justify-content-end">
                            {/* <li><NavLink to="#"><i className="zmdi zmdi-settings"></i></NavLink></li> */}
                            <li><span onClick={() => props.removeItem(item)}><i className="zmdi zmdi-delete"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {(allItems.length > 0) ? miniCartItems : 'No cart items exist'}
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
  });

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartItem);