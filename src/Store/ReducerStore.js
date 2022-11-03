

export default function ReducerStore(currentState,action){
  
  
  if(currentState === undefined){
    return{
      signupModalSwitch:false,
      //회원가입모달
      loginModalSwitch:false,
      //로그인모달-SingupPage()
      userStatus:false,
      //신규유저 인가? True,False-SignupPage(TestModal)
      mainPageStatus:0,
      //0->Ego,1->Vocabulary,2->Test,3->Chart 메인페이지상태용
      kanjiCardSwitch:false,
      //한자 카드 스위치
      kanjiCardInfo:{},
      //한자 카드 번호
      userListModalSwitch:false,
      //유저리스트모달스위치
      userListInfo:[],
      //유저한자리스트정보->추천단어,유저개인단어장속 한자 리스트
      vocaListInfo:{list:"VOCA_MAIN"},
      //단어장리스트정보-> list: 'JLPT2급준비4',total: 200,unRemember: 30,listNumber:7
    };
  }
  const newState = {...currentState};

  const CommonParameter = {
    SIGNUP_SWITCH:"SIGNUP_SWITCH",
    LOGIN_SWITCH:"LOGIN_SWITCH",
    NEW_USER_STATUS:"NEW_USER_STATUS",
    PAGE_SWITCH:"PAGE_SWITCH",
    KANJI_CARD_SWITCH:"KANJI_CARD_SWITCH",
    LIST_MODAL_SWITCH:"LIST_MODAL_SWITCH",
    LIST_INFO:"LIST_INFO",
    VOCA_LIST_INFO:"VOCA_LIST_INFO",
  }

  // for(let i=0; i<Object.keys(CommonParameter).length;i++){
  //  if(action.type === Object.values(CommonParameter)[i]){
  //  }
  // }

  //모달용
  switch(action.type){
    case CommonParameter.SIGNUP_SWITCH ://signupModalSwitch
      newState.signupModalSwitch = !newState.signupModalSwitch; 
      break
    case CommonParameter.LOGIN_SWITCH ://loginModalSwitch
      newState.loginModalSwitch = !newState.loginModalSwitch; 
      break
    case CommonParameter.NEW_USER_STATUS ://userStatus
      newState.userStatus = !newState.userStatus; 
      break
    case CommonParameter.PAGE_SWITCH ://mainPageStatus
      newState.mainPageStatus = action.pageNum; 
      break
    case CommonParameter.KANJI_CARD_SWITCH ://kanjiCardSwitch()
      if(action.status){
        newState.kanjiCardSwitch = !newState.kanjiCardSwitch;
        newState.kanjiCardInfo = action.kanjiInfo;
      }else{
        newState.kanjiCardSwitch = !newState.kanjiCardSwitch;
      }
      break
    case CommonParameter.LIST_MODAL_SWITCH ://userListModalSwitch
      newState.userListModalSwitch = !newState.userListModalSwitch;
      break
    case CommonParameter.LIST_INFO ://userListInfo(action.listInfo)
      newState.userListInfo = action.listInfo;
      break
    case CommonParameter.VOCA_LIST_INFO :
      newState.vocaListInfo = action.vocaInfo;
      break
    default:console.log("Error");
  }
  return newState;
} 