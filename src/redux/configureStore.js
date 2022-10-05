import { configureStore, combineReducers } from '@reduxjs/toolkit';
import coinListReducer from './coinList/coinList';

const rootReducer = combineReducers({
  coins: coinListReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
