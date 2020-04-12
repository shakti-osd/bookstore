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
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount - this.props: ', this.props)
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/shop');
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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                </div>
                <div className="form__btn">
                    <button type="submit">Login</button>
                    <label className="label-for-checkbox">
                        <input id="rememberme" className="input-checkbox" name="rememberme" value="forever" type="checkbox" />
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
