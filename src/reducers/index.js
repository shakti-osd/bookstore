import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';
import contactReducer from './contactReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart','wishlist','contact']
};



const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  contact: contactReducer
});

export default persistReducer(persistConfig, rootReducer);


