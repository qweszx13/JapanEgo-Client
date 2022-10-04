import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignupPage from './Page/SignupPage/SignupPage';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

function signupReducer(currentState,action){
  if(currentState === undefined){
    return{
      modalSwitch:false,
    };
  }
  const newState = {...currentState};
  if(action.type === "SWITCH"){
    newState.modalSwitch = !newState.modalSwitch;
  }
  return newState;
} 

const signupStore = createStore(signupReducer);

root.render(
  <React.StrictMode>
    <Provider store={signupStore}>  
      <SignupPage />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


