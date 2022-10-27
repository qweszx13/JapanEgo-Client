import { Card, List } from 'antd';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ReactComponent as Search } from '../../../Assets/svg/search.svg';
import '../../../GlobalStyle/antUlStyle.css';
import flexWrapAni from '../../../lib/flexWrapAni';

export default function EgoSection(){
  
  useEffect(()=>{
    flexWrapAni();
  },[]);

  
  const data = [
    {
      kanji: 'kanji 1',
      grade: 'N1'
    },
    {
      kanji: 'kanji 2',
      grade: 'N2'
    },
    {
      kanji: 'kanji 3',
      grade: 'N3'
    },
    {
      kanji: 'kanji 4',
      grade: 'N4'
    },{
      kanji: 'kanji 5',
      grade: 'N1'
    },
    {
      kanji: 'kanji 6',
      grade: 'N2'
    },
    {
      kanji: 'kanji 7',
      grade: 'N3'
    },
    {
      kanji: 'kanji 8',
      grade: 'N4'
    },{
      kanji: 'kanji 9',
      grade: 'N1'
    },
    {
      kanji: 'kanji 10',
      grade: 'N2'
    },
    {
      kanji: 'kanji 11',
      grade: 'N3'
    },
    {
      kanji: 'kanji 12',
      grade: 'N4'
    },{
      kanji: 'kanji 13',
      grade: 'N1'
    },
    {
      kanji: 'kanji 14',
      grade: 'N2'
    },
    {
      kanji: 'kanji 15',
      grade: 'N3'
    },
    {
      kanji: 'kanji 16',
      grade: 'N4'
    },
  ];
  
  return(
    <div className="h-full w-full overflow-auto animate-smoothy">

      <label className="relative block w-3/4 ml-auto mr-auto mb-3 mt-3">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
          <Search></Search>
        </span>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
      </label>
      <InfiniteScroll
        dataLength={10}
        hasMore={data.length < 50}
        scrollableTarget="scrollableDiv"
      >
        <List
          className="bg-none"
          bordered={true}
          style={{padding:"8px",justifyContent:"center"}}
          size='small'
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card style={{backgroundColor:"#c1d6f4",borderRadius:"10px",width:"110px"}} title={item.kanji} >
                {item.grade}
              </Card>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  )
  
}