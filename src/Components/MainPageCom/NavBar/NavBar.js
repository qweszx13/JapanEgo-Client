import { HomeOutlined,ContactsOutlined,TranslationOutlined,PieChartOutlined } from '@ant-design/icons';
import { useDispatch,useSelector } from 'react-redux';


const titleIcons = [{
  icon:<HomeOutlined style={{color:"#222a6e"}} className="animate-appear"></HomeOutlined>,
  title:<label style={{color:"#222a6e"}}>行語</label>
},{
  icon:<ContactsOutlined style={{color:"#222a6e"}} className="animate-appear"></ContactsOutlined>,
  title:<label style={{color:"#222a6e"}}>단어장</label>
},{
  icon:<TranslationOutlined style={{color:"#222a6e"}} className="animate-appear"></TranslationOutlined>,
  title:<label style={{color:"#222a6e"}}>테스트</label>
},{
  icon:<PieChartOutlined style={{color:"#222a6e"}} className="animate-appear"></PieChartOutlined>,
  title:<label style={{color:"#222a6e"}}>통계</label>
}]

export default function NavBar(){

  const pageDispatch = useDispatch();

  const switchSignupModalDispatch = (page)=>{
    pageDispatch({type:"PAGE_SWITCH",pageNum:page})
  }

  const userPage = useSelector((state)=>{
    return state.mainPageStatus;
  })

  return(
    <div id="header" className="h-20 w-full bg-gray-300 fixed flex">
      <div className="h-full flex items-center w-full justify-between ">
        <div id="iconMenu" className="h-full flex items-center w-1/4 pl-5 lg:justify-around sm:justify-start">
          <div className="flex flex-col text-center justify-items-center mr-3">
            <label className="font-sans font-semibold text-[#222a6e]">行語</label>
            <HomeOutlined style={{color:"#222a6e"}} className="text-2xl rounded-full border-4 border-[#222a6e] p-1 hover:animate-beat shadow-sm shadow-black sm:text-3xl"
              onClick={()=>{
                switchSignupModalDispatch(0);
              }}
            />
          </div>
          <div className="flex flex-col text-center justify-items-center mr-3">
            <label className="font-sans font-semibold text-[#222a6e]">단어장</label>
            <ContactsOutlined style={{color:"#222a6e"}} className="text-2xl rounded-full border-4 border-[#222a6e] p-1 hover:animate-beat shadow-sm shadow-black sm:text-3xl"
              onClick={()=>{
                switchSignupModalDispatch(1);
              }}
            />
          </div>
          <div className="flex flex-col text-center justify-items-center mr-3">
            <label className="font-sans font-semibold text-[#222a6e]">테스트</label>
            <TranslationOutlined style={{color:"#222a6e"}} className="text-2xl rounded-full border-4 border-[#222a6e] p-1 hover:animate-beat shadow-sm shadow-black sm:text-3xl"
              onClick={()=>{
                switchSignupModalDispatch(2);
              }}
            />
          </div>
          <div className="flex flex-col text-center justify-items-center mr-3">
            <label className="font-sans font-semibold text-[#222a6e]">통계</label>
            <PieChartOutlined style={{color:"#222a6e"}} className="text-2xl rounded-full border-4 border-[#222a6e] p-1 hover:animate-beat shadow-sm shadow-black sm:text-3xl"
              onClick={()=>{
                switchSignupModalDispatch(3);
              }}
            />
          </div>
        </div>
        <div id="logo" className="text-4xl sm:text-[4rem]  w-2/4 h-full flex justify-center items-center ">
          {titleIcons[userPage].icon}
          {titleIcons[userPage].title}
        </div>
        <div id="air" className="w-1/4 hidden sm:block">

        </div>
      </div>
    </div>
  )
} 