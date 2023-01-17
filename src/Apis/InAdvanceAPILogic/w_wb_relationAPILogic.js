import { addWord,deleteWord } from "../w_wb_relation/w_wb_relation";

//PUT
async function addWordSuccess(){
  try{
    let wtowbInfo = {
      wordNo : 1,
      wordBankNo : 2
    }
    const reuslt = await addWord(wtowbInfo);
    alert("단어장 추가");
    console.log(reuslt);
  }catch({response: { data: { result }}}){
    console.log(result);
  }
}

//DELETE
async function deleteWordSuccess(){
  try{
    let wtowbInfo = {
      wordNo : 1,
      wordBankNo : 2
    }
    const reuslt = await deleteWord(wtowbInfo);
    alert("단어장 삭제");
    console.log(reuslt);
  }catch({response: { data: { result }}}){
    console.log(result);
  }
}

