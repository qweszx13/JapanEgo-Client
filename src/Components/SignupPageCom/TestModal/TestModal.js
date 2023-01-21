import { Modal,Checkbox,Form } from "antd";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

//import '../../../GlobalStyle/ModalStyle/antModalStyle.css';
let dummyData = [
  {
    no:0,
    word:"はい",
    grade:1,
  },
  {
    no:1,
    word:"はい2",
    grade:1,
  },
  {
    no:2,
    word:"はい3",
    grade:1,
  },
  {
    no:3,
    word:"はい4",
    grade:1,
  },
  {
    no:4,
    word:"はい5",
    grade:1,
  },
  {
    no:5,
    word:"はい6",
    grade:2,
  },
  {
    no:6,
    word:"はい6",
    grade:2,
  },
  {
    no:7,
    word:"はい6",
    grade:2,
  },
  {
    no:8,
    word:"はい6",
    grade:2,
  },
  {
    no:9,
    word:"はい6",
    grade:2,
  },
  {
    no:10,
    word:"はい6",
    grade:2,
  },
  {
    no:11,
    word:"はい6",
    grade:2,
  },
  {
    no:12,
    word:"はい6",
    grade:2,
  },
  {
    no:13,
    word:"はい6",
    grade:2,
  },
  {
    no:14,
    word:"はい6",
    grade:2,
  },
  {
    no:15,
    word:"はい6",
    grade:2,
  },
  {
    no:16,
    word:"はい6",
    grade:2,
  },
  {
    no:17,
    word:"はい6",
    grade:2,
  },
  {
    no:18,
    word:"はい6",
    grade:2,
  },
  {
    no:19,
    word:"はい6",
    grade:2,
  },
  {
    no:20,
    word:"はい6",
    grade:2,
  },
  {
    no:21,
    word:"はい6",
    grade:2,
  },
  {
    no:22,
    word:"はい6",
    grade:2,
  },
  {
    no:23,
    word:"はい6",
    grade:2,
  },
  {
    no:24,
    word:"はい6",
    grade:2,
  }
]


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
  const [pageShowData,setPageShowData] = useState([]);

  useEffect(()=>{
    setPageShowData(makeCheckBox(dummyData));
  },[])
  
  const makeCheckBox = (data)=>{
    let result = [];
    
    console.log(data);
    
    for(let i=0;i<5;i++){
      result.push(<div key={data[i].no+"div"} className="w-full text-[16px] font-bold">{"N"+(i+1)}</div>);
      for(let j=0;j<5;j++){
        result.push(
          <Form.Item key={data[(i*5)+j].no+data[(i*5)+j].word} valuePropName="checked" className="ml-2" style={{margin:"0 auto"}}>
            <Checkbox key={data[(i*5)+j].no+"checkBox"+i} id={data[(i*5)+j].no} onChange={(e)=>{
              console.log(e);
            }}>{data[(i*5)+j].word}</Checkbox>
          </Form.Item>
        )
      }
    }
    return result;
  }

  return(
    <div>
      <Modal
        open={modalSwitch}
        onCancel={handleCancel}
        title="JapanEgo 를 더 편하게 이용하기 위헤 레벨 테스트를 진행합니다!"
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
            {
              pageShowData
            }
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