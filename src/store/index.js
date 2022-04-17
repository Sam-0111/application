import { createStore, combineReducers } from 'redux';
import { loginReducer } from './reducers/loginReducer';
import { popupReducer } from './reducers/popupReducer';

const rootReducer = combineReducers({
  popup: popupReducer,
  login : loginReducer
})
export const store = createStore(rootReducer)