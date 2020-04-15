import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

import {addItem, removeItem} from '../../actions/cartAction'
import {addWishlistItem, removeWishlistItem} from '../../actions/wishListAction'

function Wishlist(props) {
    const items = props.wishlist.wishlistItems;
    
    const wishlistItems = items.map(item => {
        return (
            <tr key={item.id}>
                <td className="product-remove"><button type="button" className="minus btn btn-danger" onClick={() => props.removeWishlistItem(item)}>x</button></td>
                <td className="product-thumbnail"><NavLink to="/"><img src={item.image} alt={item.name} /></NavLink></td>
                <td className="product-name"><NavLink to="">Natoque penatibus</NavLink></td>
                <td className="product-price"><span className="amount">${item.price}</span></td>
        <td className="product-stock-status"><span className="wishlist-in-stock">{item.status}</span></td>
                <td className="product-add-to-cart"><button type="button" className="plus btn btn-primary" onClick={() => props.addItem(item)}> Add to Cart</button></td>
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
                        	<h2 className="bradcaump-title">Wishlist</h2>
                            <nav className="bradcaump-content">
                              <NavLink className="breadcrumb_item" to="/">Home</NavLink>
                              <span className="brd-separetor">/</span>
                              <span className="breadcrumb_item active">Wishlist</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="wishlist-area section-padding--lg bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="wishlist-content">
                            <form action="#">
                                <div className="wishlist-table wnro__table table-responsive">
                                    <table>
                                        <thead>
                                            {wishlistItems}
                                        </thead>
                                        <tbody>
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>  
                            </form>
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
    wishlist: state.wishlist
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addWishlistItem: item => dispatch(addWishlistItem(item)),
    removeWishlistItem: item => dispatch(removeWishlistItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wishlist);