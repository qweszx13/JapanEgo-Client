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

const root = ReactDOM.createRoot(document.getElementById('root'));



function Reducer(currentState,action){
  
  
  if(currentState === undefined){
    return{
      signupModalSwitch:false,
      //회원가입모달
      loginModalSwitch:false,
      //로그인모달-SingupPage()
      userStatus:false,
      //신규유저 인가? True,False-SignupPage(TestModal)
      mainPageStatus:0,
      //0->Ego,1->Vocabulary,2->Test,3->Chart 메인페이지상태용
      kanjiCardSwitch:false,
      //한자 카드 스위치
      kanjiCardInfo:{}
      //한자 카드 번호

    };
  }
  const newState = {...currentState};
  //모달용
  if(action.type === "SIGNUP_SWITCH"){
    newState.signupModalSwitch = !newState.signupModalSwitch;
  }
  if(action.type === "LOGIN_SWITCH"){
    newState.loginModalSwitch = !newState.loginModalSwitch;
  } 
  if(action.type === "NEW_USER_STATUS"){
    newState.userStatus = !newState.userStatus;
  }
  if(action.type === "PAGE_SWITCH"){
    newState.mainPageStatus = action.pageNum;
  }
  if(action.type === "KANJI_CARD_SWITCH"){
    if(action.status){
      newState.kanjiCardSwitch = !newState.kanjiCardSwitch;
      newState.kanjiCardInfo = action.kanjiInfo;
    }else{
      newState.kanjiCardSwitch = !newState.kanjiCardSwitch;
    }
  }
  return newState;
} 

const Store = createStore(Reducer);




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


