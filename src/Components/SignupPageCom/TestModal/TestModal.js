import {Modal, Checkbox, Form} from "antd";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {wellcomeQuiz} from "../../../Apis/quiz/quiz";
import {useNavigate} from 'react-router-dom';

//import '../../../GlobalStyle/ModalStyle/antModalStyle.css';
export default function TestModal() {
    const modalDispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    /*Redux 스위치 호출문*/
    const modalSwitch = useSelector((state) => {
        return state.stateTestModalFlag
    })

    const switchModalDispatch = () => {
        modalDispatch({type: "TEST_MODAL_FLAG"});
    }

    const handleOk = () => {
        form.submit();
    };

    const handleSuccess = () => {
        alert("값 들어옴 ㅇㅇ");
        form.resetFields();
        switchModalDispatch();
        navigate("/Main");
    }

    const handleFailed = () => {
        alert("값입력해주셈");
    }

    const handleCancel = () => {
        switchModalDispatch();
        form.resetFields();
    };
    /*모달 관련 문 끝 */
    const [pageShowData, setPageShowData] = useState([]);

    useEffect(() => {
        getFirstQuiz();
    }, [])

    async function getFirstQuiz() {
        try {
            const result = await wellcomeQuiz();
            setPageShowData(makeCheckBox(result.data));
        } catch ({
            response: {
                data: {
                    result
                }
            }
        }) {
            console.log(result);
        }
    }

    const makeCheckBox = (data) => {
        let result = [];

        console.log(data);

        for (let i = 0; i < 5; i++) {
            result.push(
                <div key={data[i].no + "div"} className="w-full text-[16px] font-bold">{
                        "N" + (
                            i + 1
                        )
                    }</div>
            );
            for (let j = 0; j < 5; j++) {
                result.push(
                    <Form.Item
                        key={data[(i * 5) + j].no + data[(i * 5) + j].word}
                        valuePropName="checked"
                        className="ml-2"
                        style={{
                            margin: "0 auto"
                        }}>
                        <Checkbox
                            key={data[(i * 5) + j].no + "checkBox" + i}
                            id={data[(i * 5) + j].no}
                            onChange={(e) => {
                                console.log(e);
                            }}>{data[(i * 5) + j].word}</Checkbox>
                    </Form.Item>
                )
            }
        }
        return result;
    }

    return (
        <div>
            <Modal
                open={modalSwitch}
                onCancel={handleCancel}
                title="JapanEgo 신규가입 Level 테스트!"
                footer={null}>
                <div>
                    <Form
                        form={form}
                        name="register"
                        layout="inline"
                        onFinish={handleSuccess}
                        onFinishFailed={handleFailed}
                        scrollToFirstError="scrollToFirstError">
                        {pageShowData}
                    </Form>
                </div>
                <div>
                    <a
                        href="##"
                        className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-black hover:bg-gray-100 hover:text-indigo-400"
                        onClick={handleOk}>제출
                    </a>
                </div>
            </Modal>
        </div>
    );

}