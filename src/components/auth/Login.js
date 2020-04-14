import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      rememberMe:true,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);

    this.rmCheck = document.getElementById("rememberMe");
    this.emailInput = document.getElementById("email");

    

  }

  componentDidMount() {
    console.log('componentDidMount - this.props: ', this.props)
    if (this.props.auth.isAuthenticated) {
       this.props.history.push('/shop');
    }

    if (localStorage.checkbox && localStorage.checkbox !== true) {
      //this.rmCheck.setAttribute("checked", "checked");
      this.setState({rememberMe:true})
      this.setState({email:localStorage.username});
    } else {
      this.setState({rememberMe:false})
      this.setState({email:''})
    }
    
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps - nextProps: ', nextProps)

    if (nextProps.auth.isAuthenticated === true) {
        nextProps.history.push('/shop');
    } 
    // if (nextProps.auth.isAuthenticated) {
    //   this.props.history.push('/shop');
    // }

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

  onSubmit(e) {
    e.preventDefault();  
    
    if (this.state.rememberMe === true) {
      localStorage.username = this.state.email;
      localStorage.checkbox = this.state.rememberMe;
    } else {
      localStorage.username = "";
      localStorage.checkbox = "";
    }   

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  
  onCheckChange(e){
    this.setState({rememberMe: !this.state.rememberMe})
  }

  render() {
    
    const { errors } = this.state;
    const { user } = this.props.auth;
    console.log('After Login:', user)

    return (
      <div className="my__account__wrapper">
        <h3 className="account__title">Login</h3>
        <form onSubmit={this.onSubmit}>
            <div className="account__form">
                <div className="input__box">
                    <label>Email address <span>*</span></label>
                    <TextFieldGroup
                      placeholder="Email Address"
                      name="email"
                      id="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                </div>
                <div className="input__box">
                    <label>Password<span>*</span></label>
                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      id="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                </div>
                <div className="form__btn">
                    <button type="submit">Login</button>
                    <label className="label-for-checkbox">
                        <input id="rememberMe" className="input-checkbox" name="rememberMe" value="forever" type="checkbox" onChange={this.onCheckChange}  />
                        <span>Remember me</span>
                    </label> 
                </div>
                <NavLink className="forget_pass" to="#">Lost your password?</NavLink>
            </div>
        </form>
    </div>
      
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
