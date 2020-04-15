import React from 'react'
import {NavLink} from 'react-router-dom'

function ThankYou() {
    return (
        <>
            <div className="ht__bradcaump__area bg-image--3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Thank You</h2>
                                <nav className="bradcaump-content">
                                <NavLink className="breadcrumb_item" to="/">Home</NavLink>
                                <span className="brd-separetor">/</span>
                                <span className="breadcrumb_item active">Thank You</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-about about_area bg--white section-padding--lg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section__title--3 text-center pb--30">
                                <h2>Thank you for your query</h2>
                                <p>We will contact you soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou
