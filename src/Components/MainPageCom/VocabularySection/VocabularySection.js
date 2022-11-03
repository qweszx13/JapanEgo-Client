import { useState } from 'react';
import { useSelector } from 'react-redux';
import VocabularyNavCard from '../VocabularyNavCard/VocabularyNavCard';
import VocaSectionCard from '../VocaSectionCard/VocaSectionCard';


export default function VocabularySection(){

  const listData = useSelector((state)=>{
    return state.vocaListInfo
  })


  const [vocaSectionContent,setVocaSectionContent] = useState("VOCA_MAIN");

  return(
    <div className="h-full w-full overflow-auto animate-smoothy">
      {
       listData.list === "VOCA_MAIN"
       ?<VocabularyNavCard></VocabularyNavCard>
       :<VocaSectionCard></VocaSectionCard>
      }
    </div>
    
  )
}