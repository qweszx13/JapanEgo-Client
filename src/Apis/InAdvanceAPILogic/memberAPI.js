import { passowordRest,profile,memberDelete,signup,email_confirm } from "../member/member"



//import { useNavigate } from 'react-router-dom';
//const navigate = useNavigate();

//POST
async function password_resetSuccess(){//비밀번호 초기화
  try{
    const passwordResetInfo = {
      email : "qweszx13@naver.com",
      password : "1234",
      newPassword : "12345"
    }
    const result = await passowordRest(passwordResetInfo);
    console.log(result.data);
    alert("비밀번호 변경완료");
    console.log("new password 통보");
  }catch ({
    response: {
      data: { result },
    },
    }) {
      alert(result);
    }
};
// GET
// async function profileLookup(){//폼 전송 성공 기능 삭제
//   try{
//     let userEmail = "qweszx13@naver.com"
//     const result = await profile(email));
//     console.log(result.data+"조회된 데이터");
//   }catch ({
//     response: {
//       data: { result },
//     },
//     }) {
//       alert(result);
//     }
// }; 


//import { useNavigate } from 'react-router-dom';
//const navigate = useNavigate();

//DELETE
async function memberDeleteSuccess(){//멤버 삭제
  try{
    const memberInfo = {
      email : "qweszx13@naver.com",
      password : "1234",
    }
    const result = await passowordRest(memberInfo);
    //navigate('/');
    alert("회원탈퇴 완료");
  }catch ({
    response: {
      data: { result },
    },
    }) {
      alert(result);
    }
};

//POST
async function signupSuccess(){//폼 전송 성공
  try{
    const signupInfo = {
      email : "qweszx13@naver.com",
      password : "1234",
      email_confirm_result : true
    }
    const result = await passowordRest(signupInfo);
    alert("회원가입 완료");
  }catch ({
    response: {
      data: { result },
    },
    }) {
      alert(result);//잘못된부분 알림
    }
};

//POST
async function email_confirmSuccess(){//이메일 인증
  try{
    const userEmail = "qweszx13@naver.com";//ref
    const result = await passowordRest(userEmail);
    alert("메일 전송 완료 확인해주세요");
  }catch ({
    response: {
      data: { result },
    },
    }) {
      alert(result);//email 확인알람
    }
};