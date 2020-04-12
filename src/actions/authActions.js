import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, API_URL } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post(`${API_URL}/users/registe`, userData)
    .then(res => history.push('/'))
    .catch(err => {
     
      if(err.response === undefined){
        dispatch({
          type: GET_ERRORS,
          payload: {server:'Server error'}
        })
      }else{
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      }
      
    })
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post(`${API_URL}/users/login`, userData)
    .then(res => {
        const { token } = res.data;
     
        localStorage.setItem('jwtToken', token);
      
        setAuthToken(token);
      
        const decoded = jwt_decode(token);
      
        dispatch(setCurrentUser(decoded));
           
    })
    .catch(err => {
     
      if(err.response === undefined){
        dispatch({
          type: GET_ERRORS,
          payload: {server:'Server error'}
        })
      }else{
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      }
      
    }
     
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
