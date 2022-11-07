import { Card, List } from 'antd';
import { useDispatch,useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function CardMake(){
  
  const dispatch = useDispatch();

  const switchModalDispatch = (data)=>{
    if(data !== undefined){// 없을때 에러 혹은 없음 부분 제작요망
      dispatch({type:"KANJI_MODAL_FLAG",status:true,kanjiCardInfo:data});
    }
  }
  
  function cardOnClick(e){
    switchModalDispatch(listData[e.currentTarget.id-1]);
  }

  const listData = useSelector((state)=>{//리스트 정보를 가져와서 카드생성 카드 한자정보,급수정보,아이템순서
    return state.stateKanjiListInfo
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
            <Card id={item.dataNum} 
            className="hover:animate-eventhover active:animate-eventclick" 
            style={{backgroundColor:"#c1d6f4",borderRadius:"10px",width:"110px",boxShadow:"3px 3px gray"}} 
            title={item.kanji} 
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