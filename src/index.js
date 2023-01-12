import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './Page/MainPage/MainPage'
import SignupPage from './Page/SignupPage/SignupPage';
import reportWebVitals from './lib/reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import ReducerStore from './Store/ReducerStore';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Store = createStore(ReducerStore);//redux Store 생성

root.render(
  //<React.StrictMode>
    <Provider store={Store}>{/*reduxStore 적용*/}
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SignupPage/>} />{/*시작 페이지*/}
          <Route path="/Main" exact element={<MainPage/>} />{/*메인 페이지*/}
        </Routes>
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
);
reportWebVitals();


