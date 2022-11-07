import React from 'react';
import 'antd/dist/antd.min.css';
import { useSelector } from 'react-redux';
import NavBar from '../../Components/MainPageCom/NavBar/NavBar';
import EgoSection from '../../Components/MainPageCom/EgoSection/EgoSection';//sectionNum=>0
import VocabularySection from '../../Components/MainPageCom/VocabularySection/VocabularySection';//sectionNum=>1
import TestSection from '../../Components/MainPageCom/TestSection/TestSection';//sectionNum=>2
import ChartSection from '../../Components/MainPageCom/ChartSection/ChartSection';//sectionNum=>3

const sectionArray = [<EgoSection/>,<VocabularySection/>,<TestSection/>,<ChartSection/>];

export default function MainPage(){

  const userPage = useSelector((state)=>{
    return state.stateMainPageStatus;
  })

  return(
    <div className="h-full bg-gray-600 ">
      <NavBar></NavBar>
      <div id="bodyWrap" className='h-screen flex pt-20 sm:flex'>
        <div id="body" className='h-full w-full flex-row ml-auto mr-auto pt-2 pb-1 rounded-2xl bg-gray-600 sm:flex sm:flex-nowrap sm:h-full sm:w-3/5'>
          <section className="h-full bg-gray-200 rounded-2xl p-2 w-full  sm:w-full ">
            {sectionArray[userPage]}
          </section>
        </div>
      </div>
    </div>
  )
};