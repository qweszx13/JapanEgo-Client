import { addWord,deleteWord } from "../w_m_relation/w_m_relation";

//PUT
async function addWordSuccess(){
  try{
    let wtomInfo = {
      wordNo : 1,
      memberNo : 2
    }
    const reuslt = await addWord(wtomInfo);
    alert("북마크 추가");
    console.log(reuslt);
  }catch({response: { data: { result }}}){
    console.log(result);
  }
}

//DELETE
async function deleteWordSuccess(){
  try{
    let wtomInfo = {
      wordNo : 1,
      memberNo : 2
    }
    const reuslt = await deleteWord(wtomInfo);
    alert("북마크 삭제");
    console.log(reuslt);
  }catch({response: { data: { result }}}){
    console.log(result);
  }
}

