import { Card, List, Popconfirm, Input } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from "react-redux";
import { FileAddOutlined } from '@ant-design/icons';
import { useRef,useState } from 'react';

const vocaListData = [//더미 부분
  {
    list: '아 안외워져',
    total: 150,
    unRemember: 112,
    listNumber:0
  },
  {
    list: '넌 뭐야',
    total: 14,
    unRemember: 1,
    listNumber:1
  },
  {
    list: '이단어 극혐',
    total: 130,
    unRemember: 12,
    listNumber:2
  },
  {
    list: '火모음집',
    total: 14,
    unRemember: 11,
    listNumber:3
  },
  {
    list: 'JLPT2급준비',
    total: 200,
    unRemember: 50,
    listNumber:4
  },
  {
    list: 'JLPT2급준비2',
    total: 200,
    unRemember: 40,
    listNumber:5
  },
  {
    list: 'JLPT2급준비3',
    total: 200,
    unRemember: 30,
    listNumber:6
  },
  {
    list: 'JLPT2급준비4',
    total: 200,
    unRemember: 30,
    listNumber:7
  }
];
vocaListData.push({
  list:'last',
  isLast:true
});//더미 끝

export default function VocabularyNavCard(){
  
  const dispatch = useDispatch();

  const createListInputRef = useRef();

  const [createListInputNum,setCreateListInputNum] = useState("");

  const cardOnClickEvent = (itemInfo)=>{
    dispatch({type:"VOCA_LIST_INFO",vocaInfo:itemInfo});
  }

  return(
    <div className='h-full w-full overflow-auto animate-smoothy'>
      <InfiniteScroll
        dataLength={10}
        hasMore={vocaListData.length < 50}
        scrollableTarget="scrollableDiv"
      >
        <label className="relative block w-3/4 ml-auto mr-auto mb-3 mt-3 text-center">
          <ruby>
            <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-400">私のリスト</p>
            <rt className="text-sm dark:text-gray-400 md:text-lg lg:text-2  xl">わたしのりすと</rt>
          </ruby>
        </label>
        <List
          className="bg-none"
          bordered={true}
          style={{padding:"8px",justifyContent:"center"}}
          size='small'
          dataSource={vocaListData}
          renderItem={item =>(
            <List.Item>
              {item.isLast !== true
              ?<Card id={item.list} className="hover:animate-eventhover active:animate-eventclick" style={{backgroundColor:"#c798f9",borderRadius:"10px",width:"150px",boxShadow:"3px 3px gray"}} 
              onClick={()=>{
                item.listNumber !== undefined
                ?cardOnClickEvent(vocaListData[item.listNumber])
                :alert("존재하지않는 카드입니다.")
              }}
              title={item.list}>
                  <div className="flex flex-col justify-between">
                    <div>단어갯수 :  {item.total}</div>
                    <div>미암기 : {item.unRemember}</div>
                  </div>
                </Card>
              :<Popconfirm 
              title={<Input showCount maxLength={20} 
              ref={createListInputRef} //input값 ref
              onChange={(e)=>{setCreateListInputNum(e.target.value);}} //state 값 변경
              value={createListInputNum} />} //value 값 state이용
              icon={<FileAddOutlined style={{top:'25%',color: 'blue' }} />}
              okText="작성"
              cancelText="취소"
              onConfirm={()=>{
                console.log(createListInputRef.current.input.value);//확인버튼 이후 로직 입력 요망
              }}
              onOpenChange={()=>{
                setCreateListInputNum("");//초기화
              }}>
                <Card id={item.list} className="hover:animate-eventhover active:animate-eventclick" style={{fontSize:"65px",textAlign:"center",backgroundColor:"#c798f9",borderRadius:"10px",width:"150px",boxShadow:"3px 3px gray"}}>
                  <p className="m-0">+</p>
                </Card>
              </Popconfirm>
              }
              
            </List.Item>
          )}/>
      </InfiniteScroll>
    </div>
  )
}