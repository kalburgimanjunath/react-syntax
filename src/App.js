import React from 'react';
import './style.css';
import { Home } from './pages/index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './redux/userSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
console.log(store);
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}
