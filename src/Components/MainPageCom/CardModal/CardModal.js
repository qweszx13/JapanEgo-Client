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
        <div className="flex flex-row bg-gray-300 w-full h-96">
          <div className="flex flex-col">
            <div id="kanji" className="">

            </div>
            <div id="korean">

            </div>
            <div id="grade">

            </div>

          </div>
          <div className="flex flex-col">
            <div id="description1">

            </div>
            <div id="description2">

            </div>

          </div>
        {cardInfo.kanji}

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