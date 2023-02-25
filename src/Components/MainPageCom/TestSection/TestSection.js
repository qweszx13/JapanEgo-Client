import { tesUrl } from "../../../Apis/auth/auth"

export default function TestSection(){
  async function successOk(){
    try{
      const result = tesUrl();
      console.log(result);
    }catch({response:{data:{result}}}){
      console.log(result)
    }
  }

  return(
    <div>
      <button onClick={successOk}>hi</button>
    </div>
  )
}