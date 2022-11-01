import { useEffect } from 'react';
import CardModal from '../CardModal/CardModal';
import CardMake from '../CardMake/CardMake';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';



export default function VocabularySection(){

  const { Option } = Select;

  useEffect(()=>{
    //한자 추가될때,한자 삭제 될때
    dataSet();
  },[]);

  const data = [
    {
      kanji: 'page11',
      grade: 'N1',
      dataNum: 1
    },
    {
      kanji: 'page12',
      grade: 'N2',
      dataNum: 2
    },
    {
      kanji: 'page13',
      grade: 'N3',
      dataNum: 3
    },
    {
      kanji: 'page14',
      grade: 'N4',
      dataNum: 4
    },{
      kanji: 'page15',
      grade: 'N1',
      dataNum: 5
    },
    {
      kanji: 'page16',
      grade: 'N2',
      dataNum: 6
    },
    {
      kanji: 'page17',
      grade: 'N3',
      dataNum: 7
    },
    {
      kanji: 'page18',
      grade: 'N4',
      dataNum: 8
    },{
      kanji: 'page19',
      grade: 'N1',
      dataNum: 9
    }
  ];
  const data2 = [
    {
      kanji: 'dummy21',
      grade: 'N1',
      dataNum: 1
    },
    {
      kanji: 'dummy22',
      grade: 'N2',
      dataNum: 2
    },
    {
      kanji: 'dummy23',
      grade: 'N3',
      dataNum: 3
    },
    {
      kanji: 'dummy24',
      grade: 'N4',
      dataNum: 4
    },{
      kanji: 'dummy25',
      grade: 'N1',
      dataNum: 5
    },
    {
      kanji: 'dummy26',
      grade: 'N2',
      dataNum: 6
    },
    {
      kanji: 'dummy27',
      grade: 'N3',
      dataNum: 7
    },
  ];


  const listDumy = [
    {list:"응 나의 메모장"},
    {list:"잘안외워지네.."},
    {list:"어렵뜨아"},
    {list:"N4랄까?"},
    ]
    const listDispatch = useDispatch();
    const dataSet = ()=>{
      listDispatch({type:"LIST_INFO",listInfo:data});
    }
    const dataSet2 = ()=>{
      listDispatch({type:"LIST_INFO",listInfo:data2});
    }

  return(
    
    <div className="h-full w-full overflow-auto animate-smoothy">
     
      <div className='flex justify-end pr-9 pb-2'>
        <label className="relative block w-2/4 ml-auto mr-auto mb-3 mt-3 text-center">   
          <p className="mb-0 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-gray-400">{listDumy[0].list}</p>
        </label>
        <div className="w-1/4 flex flex-col justify-center">
          <Select className="w-full bg-gray-400" defaultValue={listDumy[0].list} onChange={(e)=>{e==="응 나의 메모장"?dataSet():dataSet2()}}>
            {listDumy.map((value,index)=>{
              return <Option key={value.list+"optionKey"} value={value.list}>{value.list}</Option>
            })}
            <Option style={{textAlign:"center",backgroundColor:"#E2DCDE"}} key="plusButton" value={"+"}>{}</Option>
          </Select>
        </div>
      </div>
     <CardMake></CardMake>
     <CardModal></CardModal>
    </div>
  )
}