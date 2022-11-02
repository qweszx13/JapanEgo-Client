import { Card, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch,useSelector } from "react-redux";


export default function CardMake(){
  
  const modalDispatch = useDispatch();

  const switchModalDispatch = (data)=>{
    if(data !== undefined){
      modalDispatch({type:"KANJI_CARD_SWITCH",status:true,kanjiInfo:data});
    }
  }
  
  function cardOnClick(e){
    switchModalDispatch(listData[e.currentTarget.id-1]);
  }

  const listData = useSelector((state)=>{
    return state.userListInfo
  })
  

  return(
    <InfiniteScroll
      dataLength={10}
      hasMore={listData.length < 50}
      scrollableTarget="scrollableDiv"
    >
      <List
        className="bg-none"
        bordered={true}
        style={{padding:"8px",justifyContent:"center"}}
        size='small'
        dataSource={listData}
        renderItem={item => (
          <List.Item>
            <Card id={item.dataNum} className="hover:animate-eventhover active:animate-eventclick" style={{backgroundColor:"#c1d6f4",borderRadius:"10px",width:"110px",boxShadow:"3px 3px gray"}} title={item.kanji} 
              onClick={(e)=>{cardOnClick(e)}}
            >
              {item.grade}
            </Card>
          </List.Item>
        )}
      />
    </InfiniteScroll>
  )
  
}