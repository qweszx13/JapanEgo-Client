import { password_reset,profile,memberDelete,signup,email_confirm } from "../member/member"



//import { useNavigate } from 'react-router-dom';
//const navigate = useNavigate();

async function password_resetSuccess(){//폼 전송 성공
  
  try{
    console.log(await password_reset(passwordInfo));
    //navigate('/');
    alert("로그아웃 완료")
  }catch ({
    response: {
      data: { result },
    },
    }) {
      alert(result);
    }
};