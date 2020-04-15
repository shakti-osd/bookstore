import axios from 'axios';

import { GET_ERRORS, API_URL } from './types';

// Contact Form
export const contactSubmit = (contactData, history) => dispatch => {
 // console.log('contactData', contactData);
  axios
    .post(`${API_URL}/forms/contact`, contactData)
    .then(res => history.push('/thank-you'))
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
