import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'

import Login from '../auth/Login'
import Register from '../auth/Register'
class CreateAccount extends Component {
    render() {
        return (
            <>
                <div className="ht__bradcaump__area bg-image--6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title">My Account</h2>
                                    <nav className="bradcaump-content">
                                    <NavLink className="breadcrumb_item" to="/">Home</NavLink>
                                    <span className="brd-separetor">/</span>
                                    <span className="breadcrumb_item active">My Account</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="my_account_area pt--80 pb--55 bg--white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <Login  history={this.props.history}/>                                
                            </div>
                            <div className="col-lg-6 col-12">
                                <Register  history={this.props.history}/>                                
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default connect(null,null)(withRouter(CreateAccount))
