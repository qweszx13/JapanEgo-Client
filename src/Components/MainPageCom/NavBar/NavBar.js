import { HomeOutlined,ContactsOutlined,TranslationOutlined,PieChartOutlined } from '@ant-design/icons';
import { useDispatch,useSelector } from 'react-redux';

export default function NavBar(){

  //navSelectPage use Redux Start
  const pageDispatch = useDispatch();

  const switchPageDispatch = (page)=>{
    pageDispatch({type:"PAGE_SWITCH",pageNum:page})
    //store page 설정 부분
  }
  
  const userPage = useSelector((state)=>{
    return state.mainPageStatus;
  })
  //navSelectPage use Redux End

  //titleIcons 배열 스타일정의 부문
  const color = "#222a6e";
  const iconStyle = "text-2xl rounded-full border-4 border-[#222a6e] p-1 hover:animate-beat shadow-sm shadow-black sm:text-3xl";
  const titleStyle = "font-sans font-semibold text-[#222a6e]"
  //titleIcons 배열 스타일정의 End

  //titleNav 및 title 자료 Object
  const titleIcons = [{
    navIcon:<HomeOutlined style={{color:color}} className={iconStyle} onClick={()=>{switchPageDispatch(0);}}></HomeOutlined>,
    navTitle:<label className={titleStyle}>行語</label>,
    icon:<HomeOutlined style={{color:"#222a6e"}} className="animate-appear"></HomeOutlined>
  },{
    navIcon:<ContactsOutlined style={{color:color}} className={iconStyle} onClick={()=>{switchPageDispatch(1);}}></ContactsOutlined>,
    navTitle:<label className={titleStyle}>단어장</label>,
    icon:<ContactsOutlined style={{color:"#222a6e"}} className="animate-appear"></ContactsOutlined>,
  },{
    navIcon:<TranslationOutlined style={{color:color}} className={iconStyle} onClick={()=>{switchPageDispatch(2);}}></TranslationOutlined>,
    navTitle:<label className={titleStyle}>테스트</label>,
    icon:<TranslationOutlined style={{color:"#222a6e"}} className="animate-appear"></TranslationOutlined>,
  },{
    navIcon:<PieChartOutlined style={{color:color}} className={iconStyle} onClick={()=>{switchPageDispatch(3);}}></PieChartOutlined>,
    navTitle:<label className={titleStyle}>통계</label>,
    icon:<PieChartOutlined style={{color:"#222a6e"}} className="animate-appear"></PieChartOutlined>,
  }]
  //titleNav 및 title 자료 Object End

  //nav 생성 func
  const createNav = (pageNum)=>{
    return(
      <div className="flex flex-col text-center justify-items-center mr-3" key={"nav"+pageNum}>
        {titleIcons[pageNum].navTitle}
        {titleIcons[pageNum].navIcon}
      </div>
    )
  }
  //nav 생성 func End

  return(
    <div id="header" className="h-20 w-full bg-gray-300 fixed flex z-10">
      <div className="h-full flex items-center w-full justify-between ">
        <div id="iconMenu" className="h-full flex items-center w-1/4 pl-5 lg:justify-around sm:justify-start">
          {//titleIcons 수만큼 맵 
          titleIcons.map((_,index)=>{
            return createNav(index);
          })
          }
        </div>
        <div id="logo" className="text-4xl w-fit mr-4 sm:text-[4rem] sm:mr-0 sm:w-2/4 h-full flex justify-center items-center ">
          {titleIcons[userPage].icon}
          {titleIcons[userPage].navTitle}
        </div>
        <div id="air" className="w-1/7 hidden sm:block overflow-hidden md:w-1/4">

        </div>
      </div>
    </div>
  )
} 