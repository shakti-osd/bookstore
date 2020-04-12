import React, { Component } from 'react'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class Address extends Component {
    constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
    }
    
    selectCountry (val) {
    this.setState({ country: val });
    }
    
    selectRegion (val) {
    this.setState({ region: val });
    }


    render() {
        const { country, region } = this.state;

        return (
            <>
              <div className="col-lg-6 col-12">
        				<div className="customer_details">
        					<h3>Billing details</h3>
        					<div className="customar__field">
        						<div className="margin_between">
	        						<div className="input_box space_between">
	        							<label>First name <span>*</span></label>
	        							<input type="text" />
	        						</div>
	        						<div className="input_box space_between">
	        							<label>last name <span>*</span></label>
	        							<input type="text" />
	        						</div>
        						</div>
        						<div className="input_box">
        							<label>Company name <span>*</span></label>
        							<input type="text" />
        						</div>
        						<div className="input_box">
        							<label>Country<span>*</span></label>
        							<CountryDropdown className="select__option"
                                        value={country}
                                        onChange={(val) => this.selectCountry(val)} />

        						</div>
        						<div className="input_box">
        							<label>Address <span>*</span></label>
        							<input type="text" placeholder="Street address" />
        						</div>
        						<div className="input_box">
        							<input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
        						</div>
                                <div className="input_box">
        							<label>City <span>*</span></label>
        							<input type="text" placeholder="City" />
        						</div>
        						<div className="input_box">
        							<label>Region<span>*</span></label>
        							<RegionDropdown className="select__option"
                                        country={country}
                                        value={region}
                                        onChange={(val) => this.selectRegion(val)} />
        						</div>
								<div className="input_box">
									<label>Postcode / ZIP <span>*</span></label>
									<input type="text" />
								</div>
								<div className="margin_between">
									<div className="input_box space_between">
										<label>Phone <span>*</span></label>
										<input type="text" />
									</div>

									<div className="input_box space_between">
										<label>Email address <span>*</span></label>
										<input type="email" />
									</div>
								</div>
        					</div>
        					{/* <div className="create__account">
        						<div className="wn__accountbox">
	        						<input className="input-checkbox" name="createaccount" value="1" type="checkbox" />
	        						<span>Create an account ?</span>
        						</div>
        						<div className="account__field">
        							<form action="#">
        								<label>Account password <span>*</span></label>
        								<input type="text" placeholder="password" />
        							</form>
        						</div>
        					</div> */}
        				</div>
        				{/* <div className="customer_details mt--20">
        					<div className="differt__address">
	        					<input name="ship_to_different_address" value="1" type="checkbox" />
	        					<span>Ship to a different address ?</span>
        					</div>
        					<div className="customar__field differt__form mt--40">
        						<div className="margin_between">
	        						<div className="input_box space_between">
	        							<label>First name <span>*</span></label>
	        							<input type="text" />
	        						</div>
	        						<div className="input_box space_between">
	        							<label>last name <span>*</span></label>
	        							<input type="text" />
	        						</div>
        						</div>
        						<div className="input_box">
        							<label>Company name <span>*</span></label>
        							<input type="text" />
        						</div>
        						<div className="input_box">
        							<label>Country<span>*</span></label>
        							<select className="select__option">
										<option>Select a country…</option>
										<option>Afghanistan</option>
										<option>American Samoa</option>
										<option>Anguilla</option>
										<option>American Samoa</option>
										<option>Antarctica</option>
										<option>Antigua and Barbuda</option>
        							</select>
        						</div>
        						<div className="input_box">
        							<label>Address <span>*</span></label>
        							<input type="text" placeholder="Street address" />
        						</div>
        						<div className="input_box">
        							<input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
        						</div>
        						<div className="input_box">
        							<label>District<span>*</span></label>
        							<select className="select__option"> 
										<option>Select a country…</option>
										<option>Afghanistan</option>
										<option>American Samoa</option>
										<option>Anguilla</option>
										<option>American Samoa</option>
										<option>Antarctica</option>
										<option>Antigua and Barbuda</option>
        							</select>
        						</div>
								<div className="input_box">
									<label>Postcode / ZIP <span>*</span></label>
									<input type="text" />
								</div>
								<div className="margin_between">
									<div className="input_box space_between">
										<label>Phone <span>*</span></label>
										<input type="text" />
									</div>
									<div className="input_box space_between">
										<label>Email address <span>*</span></label>
										<input type="email" />
									</div>
								</div>
        					</div>
        				</div>
        			 */}
					</div>
        			  
            </>
        )
    }
}

export default Address
