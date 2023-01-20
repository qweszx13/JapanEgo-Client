import { Modal,Button,Form,Input,Row,Col } from "antd";

import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";



export default function EmailVerificationModal(){
  const modalDispatch = useDispatch();
  const [form] = Form.useForm();
  
  /*Redux 스위치 호출문*/
  const modalSwitch = useSelector((state)=>{
    return state.stateEmailVerificationModalFlag
  })
  
  const switchEmailModalDispatch = ()=>{
    modalDispatch({type:"EMAIL_MODAL_FLAG"});
  }

  const moveLoginModalDispatch = ()=>{
    switchEmailModalDispatch();
    modalDispatch({type:"LOGIN_MODAL_FLAG"});
  }

  const handleOk = () => {
    form.submit();
  };
  const handleSuccess = () =>{
    alert("값 들어옴 ㅇㅇ");
    form.resetFields();
    moveLoginModalDispatch();
  }

  const handleFailed = ()=>{
    alert("값입력해주셈");
  }

  const handleCancel = () => {
    switchEmailModalDispatch();
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
        title="Email인증"
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
            tooltip="저희 JapanEgo 를 사용하기위해는 이메일인증이필요합니다. "
            rules={[
              {
                type: "email",
                message: "유효하지 않은 이메일 입니다!",
              },
              {
                required: true,
                message: "이메일을 입력해주세요!",
              },
              {
                //pattern:".+@email\.daelim\.ac\.kr",           이메일 패턴 설정 부문
                //message:"email.daelim.ac.kr로 가입해주세요",
              },
            ]}
          >
            <Row gutter={8}>
              <Col span={14}>
                <Input /*ref={email}*/ name="user_email" />
              </Col>  
              <Col span={8}>
                <Button 
                /*onClick={()=>{onEmailCheck()}}*/
                /*loading={myLoading}*/
                >이메일 인증</Button>
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