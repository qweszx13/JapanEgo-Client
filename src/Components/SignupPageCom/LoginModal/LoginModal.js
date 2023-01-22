import {
    Modal,
    Form,
    Input,
    Row,
    Col,
    notification
} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
//import "../../../GlobalStyle/ModalStyle/antModalStyle.css"
import TestModal from "../TestModal/TestModal";
import EmailVerificationModal from "../EmailVerificationModal/EmailVerificationModal";
import {login} from "../../../Apis/auth/auth";
import {SmileOutlined} from '@ant-design/icons';
import {useRef} from "react";

const openNotification = () => {
    notification.open(
        {message: '회원가입을 환영합니다~!', description: '저희 JapanEgo를 이용하기위해서는 Email 인증이 필요합니다~! 이메일 인증을 진행해주세요~!', icon: <SmileOutlined style={{
                color: '#108ee9'
            }}/>}
    );
};

export default function LoginModal() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    /*Redux 스위치 호출문*/
    const loginModalFlag = useSelector((state) => {
        return state.stateLoginModalFlag
    })

    const switchLoginModalDispatch = () => {
        dispatch({type: "LOGIN_MODAL_FLAG"});
    }

    const moveSignupModalDispatch = () => {
        switchLoginModalDispatch();
        dispatch({type: "SIGNUP_MODAL_FLAG"});
    }

    const moveEmailModalDispatch = () => {
        switchLoginModalDispatch();
        dispatch({type: "EMAIL_MODAL_FLAG"});
    }

    const handleOk = () => { //폼 성공여부
        form.submit();
    };

    const userId = useRef();
    const userPw = useRef();

    async function handleSuccess() { //폼 전송 성공
        let userInfo = {
            email: userId.current.input.value,
            password: userPw.current.input.value
        }
        try {
            //console.log(await login(userInfo)); navigate('/Main'); alert("값 들어옴 ㅇㅇ");
            form.resetFields();
            //await post 요청 dispatch 유저 정보
            let dummyUserStatus = true; //더미 데이터 true= 신규 false= 구회원
            let dummyEmailStatus = false
            if (dummyEmailStatus === true) { //이메일 인증 안한 회원
                moveEmailModalDispatch();
                openNotification();
            } else {
                if (dummyUserStatus === true) { //신규회원
                    dispatch({type: "TEST_MODAL_FLAG"});
                    switchLoginModalDispatch();
                } else { //구회원
                    switchLoginModalDispatch();
                    navigate("/Main");
                }
            }
        } catch ({
            response: {
                data: {
                    result
                }
            }
        }) {
            alert(result);
        }
    };

    const handleFailed = () => { //폼 전송 실패
        alert("값입력해주셈");
    }

    const handleCancel = () => { //작성 취소
        switchLoginModalDispatch();
        form.resetFields();
    };
    /*모달 관련 문 끝 */

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24
            },
            sm: {
                span: 8
            }
        },
        wrapperCol: {
            xs: {
                span: 24
            },
            sm: {
                span: 16
            }
        }
    };

    return (
        <div>
            <Modal
                open={loginModalFlag}
                onCancel={handleCancel}
                title="JapanEgo 로그인"
                footer={null}>
                <div>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={handleSuccess}
                        onFinishFailed={handleFailed}
                        scrollToFirstError="scrollToFirstError">

                        <Form.Item
                            label="이메일"
                            name="user_email"
                            tooltip="저희 JapanEgo 는 아이디를 이메일 형식으로 지원합니다. "
                            rules={[
                                {
                                    type: "email",
                                    message: "유효하지 않은 이메일 입니다!"
                                }, {
                                    required: true,
                                    message: "이메일을 입력해주세요!"
                                }
                            ]}>
                            <Row gutter={8}>
                                <Col span={24}>
                                    <Input ref={userId} name="user_email"/>
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="비밀번호"
                            rules={[{
                                    required: true,
                                    message: "비밀번호를 입력해주세요!"
                                }
                            ]}
                            hasFeedback="hasFeedback">
                            <Input.Password ref={userPw}/>
                        </Form.Item>
                    </Form>
                    <div className="text-center">아직 가입하지않으셨나요?
                        <a
                            href="##"
                            onClick={() => {
                                moveSignupModalDispatch();
                            }}>회원가입</a>
                    </div>
                </div>

                <div>
                    <a
                        href="##"
                        className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-black hover:bg-gray-100 hover:text-indigo-400"
                        onClick={() => {
                            handleOk();
                        }}>로그인</a>
                </div>
            </Modal>
            <EmailVerificationModal></EmailVerificationModal>
            <TestModal></TestModal>
        </div>
    );

}