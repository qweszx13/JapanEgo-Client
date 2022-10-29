import { Modal,Button,Form,Input,Row,Col } from "antd";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
//import "../../../GlobalStyle/ModalStyle/antModalStyle.css"
import TestModal from "../TestModal/TestModal";


export default function LoginModal(){
  const modalDispatch = useDispatch();
  const [form] = Form.useForm();
  
  const navigate = useNavigate();

  /*Redux 스위치 호출문*/
  const modalSwitch = useSelector((state)=>{
    return state.loginModalSwitch
  })
  
  const switchModalDispatch = ()=>{
    modalDispatch({type:"LOGIN_SWITCH"});
  }
  const changeModalDispatch = ()=>{
    modalDispatch({type:"LOGIN_SWITCH"});
    form.resetFields();
    modalDispatch({type:"SIGNUP_SWITCH"});
  }
  
  const handleOk = () => {
    form.submit();
  };
  
  const handleSuccess = () =>{
    alert("값 들어옴 ㅇㅇ");
    form.resetFields();
    let dummyUserStatus = true;//               더미 데이터 true= 신규 false= 구회원
    
    if(dummyUserStatus === true){//신규
      modalDispatch({type:"NEW_USER_STATUS"});
      switchModalDispatch();
    }else{//구회원
      switchModalDispatch();
      navigate("/Main");
    }
    
  }

  const handleFailed = ()=>{
    alert("값입력해주셈");
  }

  const handleCancel = () => {
    switchModalDispatch();
    form.resetFields();
  };
  /*모달 관련 문 끝 */

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  return(
    <div>
      <Modal
        open={modalSwitch}
        onCancel={handleCancel}
        title="JapanEgo 로그인"
        footer={null}
        >
        <div>
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={handleSuccess}
        onFinishFailed={handleFailed}
        scrollToFirstError
        >
          
          <Form.Item
            label="이메일"
            name="user_email"
            tooltip="저희 JapanEgo 는 아이디를 이메일 형식으로 지원합니다. "
            rules={[
              {
                type: "email",
                message: "유효하지 않은 이메일 입니다!",
              },
              {
                required: true,
                message: "이메일을 입력해주세요!",
              }
            ]}
          >
            <Row gutter={8}>
              <Col span={24}>
                <Input /*ref={email}*/ name="user_email" />
              </Col>  
            </Row>
          </Form.Item>
              
          {/*()=>{
            emailCheckInput === true
            ?setUserVerificationCheck(true)
            :setUserVerificationCheck(false)
          }*/}

          <Form.Item label="이메일 인증" style={ {marginBottom:"0px"} } hidden="true" /*hidden={userVerification}*/>
            <Row gutter={8}>
              <Col span={16}>
                <Form.Item
                  name="verification"
                  rules={[
                    {
                      len:6,
                      message:"인증번호는 6자 입니다!"
                    },
                    {
                    //required:true,
                    message:"인증번호를 입력해주세요!"
                    },
                    {
                    
                    }
                  ]}
                >
                  <Input /*ref={userVerification}*/ id="user_verification"/>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Button /*onClick={()=>{onVerificationCheck()}}*/>인증번호 확인</Button>
              </Col>
            </Row>
          </Form.Item>
        
          <Form.Item
            name="password"
            label="비밀번호"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
        </Form>
        <div className="text-center">
          아직 가입하지않으셨나요? <a href="##" onClick={()=>{
            changeModalDispatch();
          }}>회원가입</a>
        </div>
        </div>
        <div>
          <a href="##"
            className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-black hover:bg-gray-100 hover:text-indigo-400"
            onClick={handleOk}>로그인
          </a>
        </div>
      </Modal>
      <TestModal></TestModal>
    </div>
  );

}