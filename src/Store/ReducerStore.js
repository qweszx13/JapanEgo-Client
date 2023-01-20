

export default function ReducerStore(currentState,action){
  
  
  if(currentState === undefined){
    return{
      stateSignupModalFlag:false,
      //회원가입모달
      stateLoginModalFlag:false,
      //로그인모달-SingupPage()
      stateTestModalFlag:false,
      //신규유저 인가? True,False-SignupPage(TestModal)
      stateMainPageStatus:0,
      //0->Ego,1->Vocabulary,2->Test,3->Chart 메인페이지상태용
      stateKanjiModalFlag:false,
      //한자 카드 모달
      stateKanjiCardInfo:{},
      //한자 카드 번호
      stateListModalFlag:false,
      //유저리스트모달스위치
      stateKanjiListInfo:[],
      //유저한자리스트정보->추천단어,유저개인단어장속 한자 리스트
      stateVocaListInfo:{list:"VOCA_MAIN"},
      //단어장리스트정보-> list: 'JLPT2급준비4',total: 200,unRemember: 30,listNumber:7
      stateEmailVerificationModalFlag:false,
      //이메일 인증 모달
    };
  }
  const newState = {...currentState};

  const CommonParameter = {
    SIGNUP_MODAL_FLAG:"SIGNUP_MODAL_FLAG",
    LOGIN_MODAL_FLAG:"LOGIN_MODAL_FLAG",
    TEST_MODAL_FLAG:"TEST_MODAL_FLAG",
    MAIN_PAGE_STATUS:"MAIN_PAGE_STATUS",
    KANJI_MODAL_FLAG:"KANJI_MODAL_FLAG",
    LIST_MODAL_FLAG:"LIST_MODAL_FLAG",
    KANJI_LIST_INFO:"KANJI_LIST_INFO",
    VOCA_LIST_INFO:"VOCA_LIST_INFO",
    EMAIL_MODAL_FLAG:"EMAIL_MODAL_FLAG",
  }

  // for(let i=0; i<Object.keys(CommonParameter).length;i++){
  //  if(action.type === Object.values(CommonParameter)[i]){
  //  }
  // }

  //모달용
  switch(action.type){
    case CommonParameter.SIGNUP_MODAL_FLAG ://stateSignupModalFlag->[SignupPage,SignupModal,LoginModal]
      newState.stateSignupModalFlag = !newState.stateSignupModalFlag; 
      break
    case CommonParameter.LOGIN_MODAL_FLAG ://stateLoginModalFlag->[SignupPage,LoginModal]
      newState.stateLoginModalFlag = !newState.stateLoginModalFlag; 
      break
    case CommonParameter.TEST_MODAL_FLAG ://stateTestModalFlag->[LoginModal,TestModal]
      newState.stateTestModalFlag = !newState.stateTestModalFlag; 
      break
    case CommonParameter.MAIN_PAGE_STATUS ://stateMainPageStatus(pageNum)->[MainPage,NavBar]
      newState.stateMainPageStatus = action.pageNum; 
      break
    case CommonParameter.KANJI_MODAL_FLAG ://stateKanjiModalFlag,stateKanjiCardInfo(action.kanjiCardInfo)->[KanjiCardModal,CardMaker]
      if(action.status){
        newState.stateKanjiModalFlag = !newState.stateKanjiModalFlag;
        newState.stateKanjiCardInfo = action.kanjiCardInfo;
      }else{
        newState.stateKanjiModalFlag = !newState.stateKanjiModalFlag;
      }
      break
    case CommonParameter.LIST_MODAL_FLAG ://stateListModalFlag->[KanjiCardModal,CardBookMarkModal]
      newState.stateListModalFlag = !newState.stateListModalFlag;
      break
    case CommonParameter.KANJI_LIST_INFO ://stateKanjiListInfo(action.listInfo)->[VocaSectionCard,EgoSection,CardMaker,]
      console.log(action.listInfo);
      newState.stateKanjiListInfo = action.listInfo;
      break
    case CommonParameter.VOCA_LIST_INFO ://stateVocaListInfo(action.VocaInfo)->[VocabularyNavCard,VocabularySection,VocaSectionCard]
      newState.stateVocaListInfo = action.vocaInfo;
      break
    case CommonParameter.EMAIL_MODAL_FLAG ://statteEmailVerificationModalFlag -> [EmailVerificationModal,]
      newState.stateEmailVerificationModalFlag = !newState.stateEmailVerificationModalFlag;
      break;
    default:console.log("Error");
  }
  return newState;
} 