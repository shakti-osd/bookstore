import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

import {contactSubmit} from '../../actions/contactAction'
import TextFieldGroup from '../common/TextFieldGroup';

import './Contact.css'

class Contact extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			fname: '',
			lname: '',
			email: '',
			website: '',
			subject: '',
			message: '',
			errors: {}
		  };
	  
		  this.onChange = this.onChange.bind(this);
		  this.onSubmit = this.onSubmit.bind(this);
	}


	static getDerivedStateFromProps(nextProps, prevState) {

		if (nextProps.errors !== prevState.errors) {
		  return { errors: nextProps.errors };
		}   
	
		return null
	  }
	
	  componentDidUpdate(prevProps, prevState) {
		if (prevProps.errors !== this.props.errors) {
		  this.setState({ errors: this.props.errors })
		}
	  }



	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	  }
	
	  onSubmit(e) {
		e.preventDefault();
	
		const contactMsg = {
		  fname: this.state.fname,
		  lname: this.state.lname,
		  email: this.state.email,
		  website: this.state.website,
		  subject: this.state.subject,
		  message: this.state.message
		};
		//console.log(contactMsg)
		this.props.contactSubmit(contactMsg, this.props.history);
	  }
	

	render(){	

		const { errors } = this.state;	
		console.log('errors', errors)
	
    return (
        <div>
            <div className="ht__bradcaump__area bg-image--6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Contact Us</h2>
                                <nav className="bradcaump-content">
                                <NavLink className="breadcrumb_item" to="/">Home</NavLink>
                                <span className="brd-separetor">/</span>
                                <span className="breadcrumb_item active">Contact Us</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <section className="wn_contact_area bg--white pt--80 pb--80">
			<div className="google__map pb--80">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div id="googleMap"></div>
						</div>
					</div>
				</div>
        	</div>
        	<div className="container">
        		<div className="row">
        			<div className="col-lg-8 col-12">
        				<div className="contact-form-wrap">
        					<h2 className="contact__title">Get in touch</h2>
        					<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. </p>
                            <form onSubmit={this.onSubmit}>
                                <div className="single-contact-form space-between">
								<TextFieldGroup
									placeholder="First Name*"
									name="fname"
									value={this.state.fname}
									onChange={this.onChange}
									error={errors.fname}
								/>
                                <TextFieldGroup
									placeholder="Last Name*"
									name="lname"
									value={this.state.lname}
									onChange={this.onChange}
									error={errors.lname}
								/>
                                </div>
                                <div className="single-contact-form space-between">
								<TextFieldGroup
									placeholder="Email*"
									name="email"
									value={this.state.email}
									onChange={this.onChange}
									error={errors.email}
								/>
                                <TextFieldGroup
									placeholder="Website*"
									name="website"
									value={this.state.website}
									onChange={this.onChange}
									error={errors.website}
								/>
                                </div>
                                <div className="single-contact-form">
								<TextFieldGroup
									placeholder="Subject*"
									name="subject"
									value={this.state.subject}
									onChange={this.onChange}
									error={errors.subject}
								/>
                                </div>
                                <div className="single-contact-form message">
								<TextFieldGroup
									placeholder="Message*"
									name="message"
									value={this.state.message}
									onChange={this.onChange}
									error={errors.message}
								/>
                                </div>
                                <div className="contact-btn">
                                    <button type="submit">Send Email</button>
                                </div>
                            </form>
                        </div> 
                        <div className="form-output">
                            <p className="form-messege"></p>
                        </div>
        			</div>
        			<div className="col-lg-4 col-12 md-mt-40 sm-mt-40">
        				<div className="wn__address">
        					<h2 className="contact__title">Get office info.</h2>
        					<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. </p>
        					<div className="wn__addres__wreapper">

        						<div className="single__address">
        							<i className="icon-location-pin icons"></i>
        							<div className="content">
        								<span>address:</span>
        								<p>666 5th Ave New York, NY, United</p>
        							</div>
        						</div>

        						<div className="single__address">
        							<i className="icon-phone icons"></i>
        							<div className="content">
        								<span>Phone Number:</span>
        								<p>716-298-1822</p>
        							</div>
        						</div>

        						<div className="single__address">
        							<i className="icon-envelope icons"></i>
        							<div className="content">
        								<span>Email address:</span>
        								<p>716-298-1822</p>
        							</div>
        						</div>

        						<div className="single__address">
        							<i className="icon-globe icons"></i>
        							<div className="content">
        								<span>website address:</span>
        								<p>716-298-1822</p>
        							</div>
        						</div>

        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>




        </div>
	)
	
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
	contact: state.contact
  });
  
  export default connect(mapStateToProps, { contactSubmit })(Contact);