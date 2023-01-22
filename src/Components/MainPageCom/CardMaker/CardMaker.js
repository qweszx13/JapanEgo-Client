import { Card, List, Badge } from 'antd';
import { useDispatch,useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { wordList } from '../../../Apis/word/word';
import { useRef } from 'react';
import { SmileOutlined }  from '@ant-design/icons';

let page = 1;
let initData = [];

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

  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getMoreItem = async () => {
    setIsLoaded(true);
    if(!isEndScroll){
      await new Promise((resolve) => setTimeout(resolve, 1000));//시간끌기
      getEgoWord(page,20);
    }
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  const endTarget = useRef();
  const [isEndScroll,setIsEndScroll] = useState(false);
  
  const dataSet = (data)=>{
    initData = initData.concat(data);
    dispatch({type:"KANJI_LIST_INFO",listInfo:initData});//데이터 보내서 카드 생성
    page++;
   }
 
   async function getEgoWord(page,size){
     try{
        const result = await wordList(page,size,"");
        if (result.data.length !== 0){
          dataSet(result.data);
        }else{
          setIsEndScroll(true);
          setIsLoaded(false);
          setTarget(false);
          endTarget.current.hidden = false;
        }
        
     }catch({response:{data:{result}}}){
       console.log(result);
     }
   }

   

  useEffect(() => {
    if(!isEndScroll){
      let observer;
      if (target) {
        observer = new IntersectionObserver(onIntersect, {
          threshold: 0.4,//40%보이면 
        });
        observer.observe(target);
      }
      return () => {
        observer && observer.disconnect();
      }
    }
  }, [target  ]);

  const ribbonColor = {
    1:"red",
    2:"pink",
    3:"purple",
    4:"volcano",
    5:"cyan"
  }

  
  return(
    <InfiniteScroll
      dataLength={16}
      hasMore={true}
      scrollableTarget="scrollableDiv"
    >
      <List
        className="bg-none"
        bordered={true}
        style={{padding:"8px",justifyContent:"center"}}
        size='small'
        dataSource={listData}
        renderItem={item =>   (
          <List.Item>
            <Badge.Ribbon text={"N"+item.grade} color={ribbonColor[item.grade]}>
              <Card id={item.no} 
              className="hover:animate-eventhover active:animate-eventclick" 
              style={{backgroundColor:"#c1d6f4",borderRadius:"10px",width:"180px",boxShadow:"3px 3px gray"}}  
              onClick={(e)=>{cardOnClick(e)}}
              >
                <div className='font-bold text-xl text-center'>{item.word}</div>
                <hr className='border-[2px]'></hr>
                <div className='font-bold text-m text-center'>{item.mean}</div>
              </Card>
            </Badge.Ribbon>
          </List.Item>
        )}
      />
      <div ref={endTarget} hidden={true} className="h-10 text-center text-3xl text-stone-400">
        <SmileOutlined style={{fontSize:"40px"}} /><br></br>
          No More Data      
      </div>
      <div ref={setTarget} className="Target-Element" style={{width:'100%',height:"80px"}}>
        {isLoaded && <Loader />}
      </div>
    </InfiniteScroll>
  )
  
}