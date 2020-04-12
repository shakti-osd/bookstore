import React, {useState} from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

import Login from '../auth/Login'
import Address from './Address'

import StripeButtonCheckout from './Stripe-Button-Checkout';


function Checkout(props) {

	  
    // toggle Login Form
	const [loginToggle, setLoginToggle] = useState({addClass:false})	
	const toggleLogin = () => {
		setLoginToggle({addClass:!loginToggle.addClass})
    }
    
    var loginClass = ["checkout_login"];	
	
	if(loginToggle.addClass) {
		loginClass.push('show');
    }
    
    // toggle Coupon Form
	const [couponToggle, setCouponToggle] = useState({addClass:false})	
	const toggleCoupon = () => {
		setCouponToggle({addClass:!couponToggle.addClass})
    }
    
    var couponClass = ["checkout_coupon"];	
	
	if(couponToggle.addClass) {
		couponClass.push('show');
	}

	// Check Loggedin User
	var loggedIn = ["checkout_info"];
	if(props.auth.isAuthenticated){
		loggedIn.push('hide')
	}

	// Cart Items
    const items = props.cart.cartItems;
    const cartPriceTotal = items.reduce((prev, cur) => prev + cur.price*cur.quantity, 0);

    const cartItems = items.map(item => {
        return (
            <li key={item.id}>{item.name} × {item.quantity}<span>${item.price * item.quantity}</span></li>           
        )
    })


    console.log('Checkout', props.auth.isAuthenticated)

    return (
        <>
            <div className="ht__bradcaump__area bg-image--4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Checkout</h2>
                                <nav className="bradcaump-content">
                                <NavLink className="breadcrumb_item" to="index.html">Home</NavLink>
                                <span className="brd-separetor">/</span>
                                <span className="breadcrumb_item active">Checkout</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="wn__checkout__area section-padding--lg bg__white">
        	<div className="container">
        		<div className="row">
        			<div className="col-lg-12">
        				<div className="wn_checkout_wrap">
        					<div className={loggedIn.join(' ')}>
        						<span>Returning customer ?</span>
        						<NavLink className="showlogin" to="#" onClick={toggleLogin}>Click here to login</NavLink>
        					</div>
        					<div className={loginClass.join(' ')}>
								<p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>

								<Login  history={props.history}/>         						
        					</div>
        					<div className="checkout_info">
        						<span>Have a coupon? </span>
        						<NavLink className="showcoupon" to="#" onClick={toggleCoupon}>Click here to enter your code</NavLink>
        					</div>
        					<div className={couponClass.join(' ')}>
        						<form action="#">
        							<div className="form__coupon">
        								<input type="text" placeholder="Coupon code" />
        								<button>Apply coupon</button>
        							</div>
        						</form>
        					</div>
        				</div>
        			</div>
        		</div>
        		<div className="row">
        			
					<Address />
					
					<div className="col-lg-6 col-12 md-mt-40 sm-mt-40">
        				<div className="wn__order__box">
        					<h3 className="onder__title">Your order</h3>
        					<ul className="order__total">
        						<li>Product</li>
        						<li>Total</li>
        					</ul>
        					<ul className="order_product">
        						{cartItems}
        					</ul>
        					<ul className="shipping__method">
        						<li>Cart Subtotal <span>${cartPriceTotal}</span></li>
        						<li>Shipping 
        							<ul>
        								<li>
        									<input name="shipping_method[0]" data-index="0" value="legacy_flat_rate" checked="checked" type="radio" readOnly />
        									<label>Flat Rate: $48.00</label>
        								</li>
        								
        							</ul>
        						</li>
        					</ul>
        					<ul className="total__amount">
        						<li>Order Total <span>${cartPriceTotal + 48}</span></li>
        					</ul>
        				</div>

						<div id="accordion" className="checkout_accordion mt--30" role="tablist">
							<div className="wn__order__box">
							
								<div className="payment">
									<div className="che__header" role="tab" id="headingOne">
										<div className="checkout__title">
											<h3>Stripe Payment</h3>
										</div>
									</div>
									<div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
										<div className='test-warning'>
											*Please use the following test credit card for payments*
											<br />
											4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
										</div>	
										<StripeButtonCheckout price={cartPriceTotal + 48} />
									</div>
								</div>
																						
							</div>
						</div>	

        			</div>
        		</div>
        	</div>
        </section>

        
        </>
    )
}


const mapStateToProps = state => ({
	cart: state.cart,
	auth: state.auth
  });


  export default connect(
    mapStateToProps
  )(Checkout);