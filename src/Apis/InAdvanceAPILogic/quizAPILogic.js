import { requestQuiz,wellcomeQuiz } from "../quiz/quiz";

//GET
async function requestQuizSuccess(){
  try{
    let wordBankNo = 1;// 워드뱅크 번호
    const result = await requestQuiz(wordBankNo);
    console.log(result);//결과
  }catch({response: { data: { result }}}){
    console.log(result);
  }
}

//GET
async function wellcomeQuizSuccess(){
  try{
    const result = await wellcomeQuiz();
    console.log(result);
  }catch({response: { data: { result }}}){
   console.log(result); 
  }
}