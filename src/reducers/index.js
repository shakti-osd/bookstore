import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import cartReducer from './cartReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};



const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);


