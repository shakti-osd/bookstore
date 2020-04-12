import React from 'react';

import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <div className="ht__bradcaump__area bg-image--5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bradcaump__inner text-center">
                        	<h2 className="bradcaump-title">404</h2>
                            <nav className="bradcaump-content">
                              <NavLink className="breadcrumb_item" to="/">Home</NavLink>
                              <span className="brd-separetor">/</span>
                              <span className="breadcrumb_item active">404</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="page_error section-padding--lg bg--white">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="error__inner text-center">
							<div className="error__logo">
								<NavLink to="#"><img src="images/others/404.png" alt="error" /></NavLink>
							</div>
							<div className="error__content">
								<h2>error - not found</h2>
								<p>It looks like you are lost! Try searching here</p>
								<div className="search_form_wrapper">
									<form action="#">
										<div className="form__box">
											<input type="text" placeholder="Search..." />
											<button><i className="fa fa-search"></i></button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    </div>
  );
};

export default NotFound