import { Modal,Checkbox,Form } from "antd";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
//import '../../../GlobalStyle/ModalStyle/antModalStyle.css';


export default function TestModal(){
  const modalDispatch = useDispatch();
  const [form] = Form.useForm();
  
  const navigate = useNavigate();

  /*Redux 스위치 호출문*/
  const modalSwitch = useSelector((state)=>{
    return state.stateTestModalFlag
  })
  
  const switchModalDispatch = ()=>{
    modalDispatch({type:"TEST_MODAL_FLAG"});
  }

  const handleOk = () => {
    form.submit();
  };
  
  const handleSuccess = () =>{
    alert("값 들어옴 ㅇㅇ");
    form.resetFields();
    switchModalDispatch();
    navigate("/Main");
  }

  const handleFailed = ()=>{
    alert("값입력해주셈");
  }

  const handleCancel = () => {
    switchModalDispatch();
    form.resetFields();
  };
  /*모달 관련 문 끝 */

  const getInData = (listNum)=>{//시험 부분 
    const kanjiNum = []
    for(let i=0;i<5;i++){
      kanjiNum.push(
        <Checkbox id={listNum+"_"+i} key={listNum+"_"+i} onChange={(e)=>{
          console.log(e);
        }}>한자</Checkbox>
      )
    }
    return kanjiNum;
  }

  
  const gradeList = ()=>{
    const num = []
    for(let i=0;i<5;i++){
      let grade = "N"+(i+1);
      num.push(
        <Form.Item key={i+"remember"} valuePropName="checked" className="ml-2" label={grade} style={{margin:"0 auto"}}>
          {getInData(i)}
          <hr></hr>
        </Form.Item>
        )
    }
    
    return num;
  }
  

  return(
    <div>
      <Modal
        open={modalSwitch}
        onCancel={handleCancel}
        title="JapanEgo 의 처음 가입하셨네요!"
        footer={null}
        >
        <div>
          <Form
          form={form}
          name="register"
          layout="inline"
          onFinish={handleSuccess}
          onFinishFailed={handleFailed}
          scrollToFirstError
          >
            {gradeList}
          </Form>
        </div>
        <div>
          <a href="##"
            className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-black hover:bg-gray-100 hover:text-indigo-400"
            onClick={handleOk}>제출
          </a>
        </div>
      </Modal>
    </div>
  );

}