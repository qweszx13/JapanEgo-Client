import { logout } from "../auth/auth"



//import { useNavigate } from 'react-router-dom';
//const navigate = useNavigate();

async function logoutSuccess(){//폼 전송 성공
  
  try{
    console.log(await logout());
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