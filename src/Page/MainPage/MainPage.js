import React from 'react';
import 'antd/dist/antd.min.css';
import NavBar from '../../Components/MainPageCom/NavBar/NavBar';


export default function MainPage(){
  return(
    <div className="h-full bg-gray-600 ">
      <NavBar></NavBar>
      <div id="bodyWrap" className='h-screen flex pt-20 sm:flex'>
        <div id="body" className='h-full w-full flex-row ml-auto mr-auto rounded-2xl bg-white sm:flex sm:flex-nowrap sm:h-full sm:w-3/5'>
          <section className="h-full bg-gray-200 rounded-2xl p-2 w-full sm:w-full">
          </section>
        </div>
      </div>
    </div>
  )
};