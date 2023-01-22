import { Modal,Badge,Switch,Avatar } from "antd";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { ReactComponent as BookMarkAdd } from '../../../Assets/svg/bookmarkAdd.svg';
import { ReactComponent as BookMarkArleady } from '../../../Assets/svg/bookmarkAlready.svg';
import { SmileOutlined,MehOutlined }  from '@ant-design/icons';
import CardBookMarkModal from "../CardBookMarkModal/CardBookMarkModal";
//import "../../../GlobalStyle/ModalStyle/antModalStyle.css"


export default function CardModal(){
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  
  /*Redux 스위치 호출문*/
  const modalSwitch = useSelector((state)=>{
    return state.stateKanjiModalFlag
  });

  const cardInfo = useSelector((state)=>{
    return state.stateKanjiCardInfo
  });
  
  const switchModalDispatch = ()=>{
    dispatch({type:"KANJI_MODAL_FLAG"});
  }

  const handleOk = () => {
    switchModalDispatch();
  };
  
  const handleCancel = () => {
    switchModalDispatch();
  };
  /*모달 관련 문 끝 */

  const onChange = (checked) => {
    setShow(checked);
  };

  const bookmarkModalSwitch = ()=>{
    dispatch({type:"LIST_MODAL_FLAG"});
  }

  const [bookmarkSwitch,setBookmarkSwitch] = useState(false);
  //북마크

  const ribbonColor = {
    1:"red",
    2:"pink",
    3:"purple",
    4:"volcano",
    5:"cyan"
  }

  return(
    <div>
      <Modal
        open={modalSwitch}
        onCancel={handleCancel}
        title="단어"
        footer={null}
        >
        <div className="flex flex-row bg-gray-300 w-full h-96 rounded-xl border-solid border-2 border-black">
          <div className="flex flex-col justify-between w-full p-2 border-solid border-r-2 rounded-xl">
            <div className="h-1/3 flex flex-row justify-between">
              <div id="kanji" className="h-full text-6xl flex sm:text-7xl">
                <p className="rounded-xl m-0 p-2 mb-2 bg-white ">{cardInfo.word}</p>
              </div>
              <div>
                {
                bookmarkSwitch
                ?<BookMarkArleady className="hover:animate-beat" onClick={()=>{setBookmarkSwitch(!bookmarkSwitch)}}></BookMarkArleady>
                :<BookMarkAdd className="hover:animate-beat" onClick={()=>{bookmarkModalSwitch()}}></BookMarkAdd>
                }
              </div>
            </div>
            <div id="korean" className="h-1/3 border-solid border-b-2 text-4xl pl-1">{cardInfo.mean}</div>
            <div id="description1" className="h-1/3 border-solid border-b-2 text-[#696969] font-bold flex items-center">후리가나 : {cardInfo.hurigana===null?"無":cardInfo.hurigana}</div>
            <div id="description2" className="h-1/3 border-solid border-b-2 text-[#696969] font-bold flex items-center">요미가나 : {cardInfo.yomigana===null?"無":cardInfo.yomigana}</div>
            <div id="description2" className="h-1/3 border-solid border-b-2 text-[#696969] font-bold flex items-center">오쿠리가나 : {cardInfo.okurigana===null?"無":cardInfo.okurigana}</div>
            <div id="grade" className="h-1/3 flex justify-between">
              <span className="flex items-center">
              <span className="text-[#696969] font-bold mr-2">외움</span>
              <Switch onChange={onChange} checked={show} style={{marginRight:"10px"}}/>
              <Badge dot={show} status="success">
              {show===true
              ?<span className="flex items-center"><SmileOutlined style={{fontSize:"25px"}} /></span>
              :<span className="flex items-center"><MehOutlined style={{fontSize:"23px",marginRight:"5px"}}/><>Not Yet</></span>}
              </Badge>
              </span>
              <Badge.Ribbon text={"N"+cardInfo.grade} color={ribbonColor[cardInfo.grade]}></Badge.Ribbon>
            </div>

          </div>
        </div>

        <div>

          <a href="##"
            className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-black hover:bg-gray-100 hover:text-indigo-400"
            onClick={handleOk}>확인
          </a>
        </div>
      <CardBookMarkModal></CardBookMarkModal>
      </Modal>
    </div>
  );

}