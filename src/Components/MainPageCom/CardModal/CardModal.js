import { Modal } from "antd";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { ReactComponent as BookMarkAdd } from '../../../Assets/svg/bookmarkAdd.svg';
import { ReactComponent as BookMarkArleady } from '../../../Assets/svg/bookmarkAlready.svg';
import CardBookMarkModal from "../CardBookMarkModal/CardBookMarkModal";
//import "../../../GlobalStyle/ModalStyle/antModalStyle.css"


export default function CardModal(KanjiData){
  const modalDispatch = useDispatch();
  
  /*Redux 스위치 호출문*/
  const modalSwitch = useSelector((state)=>{
    return state.kanjiCardSwitch
  });

  const cardInfo = useSelector((state)=>{
    return state.kanjiCardInfo
  });
  
  const switchModalDispatch = ()=>{
    modalDispatch({type:"KANJI_CARD_SWITCH"});
  }

  const handleOk = () => {
    switchModalDispatch();
  };
  
  const handleCancel = () => {
    switchModalDispatch();
  };
  /*모달 관련 문 끝 */

  const bookmarkModalSwitch = ()=>{
    modalDispatch({type:"LIST_MODAL_SWITCH"});
  }
  const [bookmarkSwitch,setBookmarkSwitch] = useState(false);
  //북마크

  return(
    <div>
      <Modal
        open={modalSwitch}
        onCancel={handleCancel}
        title={cardInfo.grade}
        footer={null}
        >
        <div className="flex flex-row bg-gray-300 w-full h-96 rounded-xl border-solid border-2 border-black">
          <div className="flex flex-col justify-between w-full p-2 border-solid border-r-2 rounded-xl">
            <div className="h-1/3 flex flex-row justify-between border-solid border-b-2">
              <div id="kanji" className="h-full text-6xl flex sm:text-7xl">
                <p className="rounded-xl m-0 p-2 mb-2 bg-white ">{cardInfo.kanji}</p>
              </div>
              <div>
                {
                bookmarkSwitch
                ?<BookMarkArleady className="hover:animate-beat" onClick={()=>{setBookmarkSwitch(!bookmarkSwitch)}}></BookMarkArleady>
                :<BookMarkAdd className="hover:animate-beat" onClick={()=>{bookmarkModalSwitch()}}></BookMarkAdd>
                }
                
              </div>
            </div>
            
            <div id="korean" className="h-1/3 border-solid border-b-2">
            korean
            </div>
            <div id="grade" className="h-1/3">
            N1
            </div>
            <div id="description1" className="h-1/2 border-solid border-b-2">
            음독? 
            </div>
            <div id="description2" className="h-1/2">
            훈독?
            </div>

          </div>
         
        </div>

        <div>

          <a href="##"
            className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-black hover:bg-gray-100 hover:text-indigo-400"
            onClick={handleOk}>일단 확인
          </a>
        </div>
      <CardBookMarkModal></CardBookMarkModal>
      </Modal>
    </div>
  );

}