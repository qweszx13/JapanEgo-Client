/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import CardMake from '../CardMaker/CardMaker';
import CardModal from '../KanjiCardModal/KanjiCardModal';
import { ReactComponent as Search } from '../../../Assets/svg/search.svg';

export default function EgoSection(){

  const inputRef = useRef();
  
  return(
    <div className="h-full w-full overflow-auto animate-smoothy">

      <label className="relative block w-3/4 ml-auto mr-auto mb-3 mt-3">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
          <Search></Search>
        </span>
        <input ref={inputRef} onChange={(e)=>{
          console.log(inputRef.current.value);
        }} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
      </label>
      <label className="relative block w-3/4 ml-auto mr-auto mb-3 mt-3 text-center">
        <ruby>
          
          <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-400">今日の漢字</p>
          <rt className="text-sm dark:text-gray-400 md:text-lg lg:text-2xl">きょうのかんじ</rt>
        </ruby>
      </label>
      <CardMake></CardMake>
      <CardModal></CardModal>
    </div>
  )
  
}