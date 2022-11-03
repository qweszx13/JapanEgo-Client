import { Modal } from "antd";
import { useSelector,useDispatch } from "react-redux";
import { CheckOutlined } from '@ant-design/icons';



export default function CardBookMarkModal(){
  const modalDispatch = useDispatch();
  
  /*Redux 스위치 호출문*/
  const modalSwitch = useSelector((state)=>{
    return state.userListModalSwitch
  });
  
  const switchModalDispatch = ()=>{
    modalDispatch({type:"LIST_MODAL_SWITCH"});
  }
  
  const handleCancel = () => {
    switchModalDispatch();
  };
  /*모달 관련 문 끝 */

  const listDumy = [
    {list:"응 나의 메모장",status:true},
    {list:"잘안외워지네..",status:false},
    {list:"어렵뜨아",status:true},
    {list:"N4랄까?",status:false},
    ]

   

  return(
    <Modal
      open={modalSwitch}
      onCancel={handleCancel}
      title="나의 단어장 리스트"
      footer={null}
      >
        <div>
          {listDumy.map((value,index)=>{
            return(
              <a href="##"
                key={value.list+"listKey"}
                className="block w-full bg-gray-50 px-5 py-3 text-left font-medium text-black hover:bg-gray-100 hover:text-indigo-400 mb-2 rounded-xl border-solid border-[1px] border-gray-400 flex justify-between"
                >
                  <div>{value.list}</div>
                  <div>{value.status===true?<CheckOutlined style={{fontSize:"20px"}} />:null}</div>
              </a>
            )
          })}
        </div>  
        <a href="##"
          className="block w-full bg-emerald-50 px-5 py-3 text-center font-medium text-black hover:bg-emerald-100 hover:text-blue -400"
          >+
        </a>
    </Modal>
  );

}