import { Card, List } from 'antd';
import { useDispatch,useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const data = [//더미 데이터 카드(홈화면에 표시되는 카드)에 표시할 데이터 더미
  {
    kanji: 'kanji 17',
    grade: 'N1',
    dataNum: 17
  },
  {
    kanji: 'kanji 18',
    grade: 'N2',
    dataNum: 18
  },
  {
    kanji: 'kanji 19',
    grade: 'N3',
    dataNum: 19
  },
  {
    kanji: 'kanji 20',
    grade: 'N4',
    dataNum: 20
  },{
    kanji: 'kanji 21',
    grade: 'N1',
    dataNum: 21
  },
  {
    kanji: 'kanji 22',
    grade: 'N2',
    dataNum: 22
  },
  {
    kanji: 'kanji 23',
    grade: 'N3',
    dataNum: 23
  },
  {
    kanji: 'kanji 24',
    grade: 'N4',
    dataNum: 24
  },{
    kanji: 'kanji 25',
    grade: 'N1',
    dataNum: 25
  },
  {
    kanji: 'kanji 26',
    grade: 'N2',
    dataNum: 26
  },
  {
    kanji: 'kanji 27',
    grade: 'N3',
    dataNum: 27
  },
  {
    kanji: 'kanji 28',
    grade: 'N4',
    dataNum: 28
  },{
    kanji: 'kanji 29',
    grade: 'N1',
    dataNum: 29
  },
  {
    kanji: 'kanji 30',
    grade: 'N2',
    dataNum: 30
  }
];//더미끝 

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

  const dataAdd = ()=>{
    console.log("합쳐짐 ㅇㅇ")
    dispatch({type:"KANJI_LIST_INFO",listInfo:listData.concat(data)});//데이터 보내서 카드 생성
  }

  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));//시간끌기
    dataAdd();
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,//40%보이면 
      });
      observer.observe(target);
    }
    return () => {
      console.log("옵저버 사라짐");
      observer && observer.disconnect();
    }
  }, [target  ]);

  
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
      <div ref={setTarget} className="Target-Element" style={{width:'100%',height:"80px"}}>
        {isLoaded && <Loader />}
      </div>
    </InfiniteScroll>
  )
  
}