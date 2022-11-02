import { Card, List, Popconfirm, Input } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch,useSelector } from "react-redux";
import { FileAddOutlined } from '@ant-design/icons';
import { useRef,useState } from 'react';


export default function VocabularySection(){

  

  const modalDispatch = useDispatch();

  const switchListModalDispatch = ()=>{
    modalDispatch({type:"LIST_MODAL_SWITCH"});
  }
  
  function cardAddOnClick(){
    switchListModalDispatch();
  }

  const listData = useSelector((state)=>{
    return state.userListInfo
  })

  const userListData = [
    {
      list: '아 안외워져',
      total: 150,
      unRemember: 112
    },
    {
      list: '넌 뭐야',
      total: 14,
      unRemember: 1
    },
    {
      list: '이단어 극혐',
      total: 130,
      unRemember: 12
    },
    {
      list: '火모음집',
      total: 14,
      unRemember: 11
    },
    {
      list: 'JLPT2급준비',
      total: 200,
      unRemember: 50
    },
    {
      list: 'JLPT2급준비2',
      total: 200,
      unRemember: 40
    },
    {
      list: 'JLPT2급준비3',
      total: 200,
      unRemember: 30
    },
    {
      list: 'JLPT2급준비4',
      total: 200,
      unRemember: 30
    }
  ];
  userListData.push({
    list:'last',
    isLast:true
  });

  const createListInputRef = useRef();

  const [createListInputNum,setCreateListInputNum] = useState("");

 
  return(
    <div className="h-full w-full overflow-auto animate-smoothy">
      <InfiniteScroll
        dataLength={10}
        hasMore={userListData.length < 11}
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
          dataSource={userListData}
          renderItem={item =>(
            <List.Item>
              {item.isLast !== true
              ?<Card id={item.list} className="hover:animate-eventhover active:animate-eventclick" style={{backgroundColor:"#c798f9",borderRadius:"10px",width:"150px",boxShadow:"3px 3px gray"
                }} title={item.list} onClick={(e)=>{}}>
                  <div className="flex flex-col justify-between">
                    <div>단어갯수 :  {item.total}</div>
                    <div>미암기 : {item.unRemember}</div>
                  </div>
                </Card>
              :<Popconfirm 
              title={<Input showCount maxLength={20} ref={createListInputRef} onChange={(e)=>{setCreateListInputNum(e.target.value);}} value={createListInputNum} />}
              icon={<FileAddOutlined style={{top:'25%',color: 'blue' }} />}
              okText="작성"
              cancelText="취소"
              onConfirm={()=>{
                console.log(createListInputRef.current.input.value);
              }}
              onOpenChange={()=>{
                setCreateListInputNum("");
              }}
              >
                <Card id={item.list} className="hover:animate-eventhover active:animate-eventclick" style={{fontSize:"65px",textAlign:"center",backgroundColor:"#c798f9",borderRadius:"10px",width:"150px",boxShadow:"3px 3px gray"
                }} onClick={()=>{cardAddOnClick()}}>
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