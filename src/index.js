import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './Page/MainPage/MainPage'
import SignupPage from './Page/SignupPage/SignupPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import ReducerStore from './Store/ReducerStore';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Store = createStore(ReducerStore);

root.render(
  //<React.StrictMode>
    <Provider store={Store}>  
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SignupPage/>} />
          <Route path="/Main" exact element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


