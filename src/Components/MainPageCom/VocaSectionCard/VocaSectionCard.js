import { useEffect } from 'react';
import CardModal from '../CardModal/CardModal';
import CardMake from '../CardMake/CardMake';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Back } from '../../../Assets/svg/back.svg';



export default function VocaSectionCard(){

  useEffect(()=>{
    dataSet();
    //한자 추가될때,한자 삭제 될때
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

    const listDispatch = useDispatch();

    const dataSet = ()=>{
      listDispatch({type:"LIST_INFO",listInfo:data});
    }

    const backToMain = ()=>{
      listDispatch({type:"VOCA_LIST_INFO",vocaInfo:{list:"VOCA_MAIN"}})
    }


    const listData = useSelector((state)=>{
      return state.vocaListInfo
    })
  return(
    
    <div className="h-full w-full overflow-auto animate-smoothy">
      
      <div className='flex flex-row justify-end'>
        <div className='mt-auto mb-auto'>
          <Back className='active:animate-backclick' onClick={()=>{
            backToMain();
          }}></Back>
        </div>
        <div className="relative block w-2/4 ml-auto mr-auto mb-3 mt-3 pr-[40px] text-center">   
          <p className="mb-0 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-gray-400">{listData.list}</p>
        </div>
      </div>
     <CardMake></CardMake>
     <CardModal></CardModal>
    </div>
  )
}