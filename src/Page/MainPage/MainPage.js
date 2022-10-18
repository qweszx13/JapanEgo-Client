import React from 'react';
import 'antd/dist/antd.min.css';
import SideMenuMbti from '../../Components/MainPageCom/SideMenuMbti/SideMenuMbti';
import EachSectionMbti from '../../Components/MainPageCom/EachSectionMbti/EachSectionMbti';



export default function MainPage(){
  return(
    <div className="h-full bg-gray-600 ">
      <div id="header" className="h-16 w-full bg-gray-400 fixed">
        a
      </div>
      <div id="bodyWrap" className='h-screen flex pt-16 sm:flex'>
        <div id="body" className='h-full w-full flex-row ml-auto mr-auto rounded-2xl bg-white sm:flex sm:flex-nowrap sm:h-full sm:w-3/4'>
          <aside className="bg-red-200 h-fit w-full rounded-2xl w-full p-1 sm:w-60 sm:h-full sm:block">

            {
              //사이드 바꾸던가 하셈 ㅇㅇ 
            }
          <SideMenuMbti></SideMenuMbti>
          </aside>
          <section className="h-full bg-gray-200 rounded-2xl p-2 w-full sm:w-full sm:ml-7">
            <EachSectionMbti></EachSectionMbti>
          </section>
        </div>
      </div>
    </div>
  )
};