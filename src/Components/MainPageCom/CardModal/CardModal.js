import { Modal } from "antd";
import { useSelector,useDispatch } from "react-redux";
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

  return(
    <div>
      <Modal
        open={modalSwitch}
        onCancel={handleCancel}
        title={cardInfo.grade}
        footer={null}
        >
        <div className="flex flex-row bg-gray-300 w-full h-96 ">
          <div className="flex flex-col justify-between w-1/2 bg-white border-solid border-r-2">
            <div id="kanji" className="h-1/3 text-6xl flex justify-center items-center sm:text-7xl border-solid border-b-2">
              <p className="rounded-[2rem] border-solid border-2 border-black bg-gray-300 m-0 p-2">漢字</p>
            </div>
            <div id="korean" className="h-1/3 border-solid border-b-2">
            korean
            </div>
            <div id="grade" className="h-1/3">
            N1
            </div>

          </div>
          <div className="flex flex-col justify-between w-1/2 bg-white">
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
      </Modal>
    </div>
  );

}