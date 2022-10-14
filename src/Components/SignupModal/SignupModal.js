import { Modal,Button,Form,Input,Checkbox,AutoComplete,Row,Col } from "antd";
import { useSelector,useDispatch } from "react-redux";


export default function SignupModal(){
  const modalDispatch = useDispatch();
  const [form] = Form.useForm();
  
  /*Redux 스위치 호출문*/
  const modalSwitch = useSelector((state)=>{
    return state.modalSwitch
  })
  
  const switchModalDispatch = ()=>{
    modalDispatch({type:"SWITCH"})
  }

  const handleOk = () => {
    form.submit();
  };
  const handleSuccess = () =>{
    alert("값 들어옴 ㅇㅇ");
    form.resetFields();
    switchModalDispatch();
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
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return(
    <div>
      <Modal
        open={modalSwitch}
        onCancel={handleCancel}
        title="新規会員登録"
        footer={null}>
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
            label="아이디"
            name="user_id"
            tooltip="아이디는 다른 사람에게 보이는 이름 정보입니다."
            rules={[
              {
                required: true,
                message: "아이디를 입력해주세요!",
                whitespace: true,
              },
            ]}
          >
            <Row gutter={8}>
              <Col span={14}>
                <Input /*ref={id}*/ 
                className="success:border-solid border-1 border-amber-500"
                name="user_id" />
              </Col>
              <Col span={8}>
                <Button /* onClick={()=>{onIdCheck()}}*/>ID 確認</Button>
              </Col>
            </Row>
          </Form.Item>
          
          <Form.Item
            label="이메일"
            name="user_email"
            tooltip="위티는 대림대 전용 커뮤니케이션입니다 @email.daelim.ac.kr 로 가입해주세요"
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

          <Form.Item
            name="confirm"
            label="비밀번호 확인"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "비밀번호 확인을 입력해주세요!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("비밀번호와 일치하지 않습니다!")
                  );
                },
              }),
            ]}
          >
              <Input.Password />
            </Form.Item>

          <Form.Item
            name="introduction"
            label="자기소개"
          >
            <Input name="introduction"/>
          </Form.Item>
              
          <Form.Item
            name="user_department"
            label="학과"
            rules={[{ required: true, message: "학과를 선택해 주세요!" }]}
          >
            <AutoComplete
              style={{
                width: 200,
              }}
              /*options={majarOptions}*/
              placeholder="학과"
              filterOption={(inputValue, option) =>
                option.value.indexOf(inputValue) !== -1
              }
            />
          </Form.Item>
          
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                required: true,
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("개인정보 처리방침에 동의해주세요!")
                      ),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              <a href="##">개인정보 처리방침</a>에 동의합니다
            </Checkbox>
          </Form.Item>
          
        </Form>
         
        </div>
        <div>
          <a href="##"
            className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-black hover:bg-gray-100 hover:text-indigo-400"
            onClick={handleOk}>확인 한자로 변경요망
          </a>
        </div>
      </Modal>
    </div>
  );

}