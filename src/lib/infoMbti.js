// import INTJimg from "./mbtiImage/INTJ.png"
// import INTPimg from "./mbtiImage/INTP.png"
// import INFJimg from "./mbtiImage/INFJ.png"
// import INFPimg from "./mbtiImage/INFP.png"
// import ISTJimg from "./mbtiImage/ISTJ.png"
// import ISFJimg from "./mbtiImage/ISFJ.png"
// import ISTPimg from "./mbtiImage/ISTP.png"
// import ISFPimg from "./mbtiImage/ISFP.png"
// import ENTJimg from "./mbtiImage/ENTJ.png"
// import ENTPimg from "./mbtiImage/ENTP.png"
// import ENFJimg from "./mbtiImage/ENFJ.png"
// import ENFPimg from "./mbtiImage/ENFP.png"
// import ESTJimg from "./mbtiImage/ESTJ.png"
// import ESFJimg from "./mbtiImage/ESFJ.png"
// import ESTPimg from "./mbtiImage/ESTP.png"
// import ESFPimg from "./mbtiImage/ESFP.png"
import {ReactComponent as Square} from '../Assets/images/square.svg'
import {ReactComponent as Shield} from '../Assets/images/shield.svg'
import {ReactComponent as Circle} from '../Assets/images/circle.svg'
import {ReactComponent as Triangle} from '../Assets/images/triangle.svg'

//const mbtiSvg = [Square,Circle,Triangle,Shield];

//const mbti = ["INTJ","INTP","INFJ","INFP","ISTJ","ISFJ","ISTP","ISFP","ENTJ","ENTP","ENFJ","ENFP","ESTJ","ESFJ","ESTP","ESFP"];

export const mbtiInfo = [
  {
    mbtiKinds:"INTJ",
    mbtiFigure:Square,
    // mbtiImage:INTJimg,
    mbtiExplanation:"용의 주도한 전략가",
    mbtiCharacteristic:"상상력이 풍부하며 철두철미한 계획을 세우는 전략가형",
    mbtiTyoe:"분석가형",
    color:"#E7DFEA"
  },
  {
    mbtiKinds:"INTP",
    mbtiFigure:Square,
    // mbtiImage:INTPimg,
    mbtiExplanation:"논리적인 사색가",
    mbtiCharacteristic:"끊임없이 새로운 지식에 목말라 하는 혁신가형",
    mbtiTyoe:"분석가형",
    color:"#E7DFEA"
  },
  {
    mbtiKinds:"ENTJ",
    mbtiFigure:Square,
    // mbtiImage:ENTJimg,
    mbtiExplanation:"대담한 통솔자",
    mbtiCharacteristic:"대담하면서도 상상력이 풍부한 강한 의지의 소유자로 다양한 방법을 모색하거나 여의치 않을 경우 새로운 방안을 창출하는 리더형",
    mbtiTyoe:"분석가형",
    color:"#E7DFEA"
  },
  {
    mbtiKinds:"ENTP",
    mbtiFigure:Square,
    // mbtiImage:ENTPimg,
    mbtiExplanation:"뜨거운 논쟁을 즐기는 변론가",
    mbtiCharacteristic:"지적인 도전을 두려워하지 않는 똑똑한 호기심형",
    mbtiTyoe:"분석가형",
    color:"#E7DFEA"
  },
  {
    mbtiKinds:"INFJ",
    mbtiFigure:Circle,
    // mbtiImage:INFJimg,
    mbtiExplanation:"선의의 옹호자",
    mbtiCharacteristic:"조용하고 신비로우며 샘솟는 영감으로 지칠 줄 모르는 이상주의자",
    mbtiTyoe:"외교관형",
    color:"#D6EAE1"
  },
  {
    mbtiKinds:"INFP",
    mbtiFigure:Circle,
    // mbtiImage:INFPimg,
    mbtiExplanation:"열정적인 중재자",
    mbtiCharacteristic:"상냥한 성격의 이타주의자로 건강하고 밝은 사회 건설에 앞장서는 낭만형",
    mbtiTyoe:"외교관형",
    color:"#D6EAE1"
  },
  {
    mbtiKinds:"ENFJ",
    mbtiFigure:Circle,
    // mbtiImage:ENFJimg,
    mbtiExplanation:"정의로운 사회운동가",
    mbtiCharacteristic:"넘치는 카리스마와 영향력으로 청중을 압도하는 리더형",
    mbtiTyoe:"외교관형",
    color:"#D6EAE1"
  },
  {
    mbtiKinds:"ENFP",
    mbtiFigure:Circle,
    // mbtiImage:ENFPimg,
    mbtiExplanation:"재기발랄한 활동가",
    mbtiCharacteristic:"창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과 자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자",
    mbtiTyoe:"외교관형",
    color:"#D6EAE1"
  },
  {
    mbtiKinds:"ISTJ",
    mbtiFigure:Triangle,
    // mbtiImage:ISTJimg,
    mbtiExplanation:"청렴결백한 논리주의자",
    mbtiCharacteristic:"사실에 근거하여 사고하며 이들의 행동이나 결정 사항에 한 치의 의심을 사지 않는 현실주의자형",
    mbtiTyoe:"관리자형",
    color:"#D9E8F0"
  },
  {
    mbtiKinds:"ISFJ",
    mbtiFigure:Triangle,
    // mbtiImage:ISFJimg,
    mbtiExplanation:"용감한 수호자",
    mbtiCharacteristic:"소중한 이들을 수호하는 데 심혈을 기울이는 헌신적이며 성실한 방어자형",
    mbtiTyoe:"관리자형",
    color:"#D9E8F0"
  },
  {
    mbtiKinds:"ESTJ",
    mbtiFigure:Triangle,
    // mbtiImage:ESTJimg,
    mbtiExplanation:"엄격한 관리자",
    mbtiCharacteristic:"사물이나 사람을 관리하는 데 타의 추종을 불허하는 뛰어난 실력을 갖춘 관리자형",
    mbtiTyoe:"관리자형",
    color:"#D9E8F0"
  },
  {
    mbtiKinds:"ESFJ",
    mbtiFigure:Triangle,
    // mbtiImage:ESFJimg,
    mbtiExplanation:"사교적인 외교관",
    mbtiCharacteristic:"타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며, 타인을 돕는데 열성적인 세심형",
    mbtiTyoe:"관리자형",
    color:"#D9E8F0"
  },
  {
    mbtiKinds:"ISTP",
    mbtiFigure:Shield,
    // mbtiImage:ISTPimg,
    mbtiExplanation:"만능 재주꾼",
    mbtiCharacteristic:"대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한 탐험형",
    mbtiTyoe:"탐험가형",
    color:"#F9ECD5"
  },
  {
    mbtiKinds:"ISFP",
    mbtiFigure:Shield,
    // mbtiImage:ISFPimg,
    mbtiExplanation:"호기심 많은 예술가",
    mbtiCharacteristic:"항시 새로운 것을 찾아 시도하거나 도전할 준비가 되어 있는 융통성 있는 성격의 매력 넘치는 예술가형",
    mbtiTyoe:"탐험가형",
    color:"#F9ECD5"
  },
  {
    mbtiKinds:"ESTP",
    mbtiFigure:Shield,
    // mbtiImage:ESTPimg,
    mbtiExplanation:"모험을 즐기는 사업가",
    mbtiCharacteristic:"벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형",
    mbtiTyoe:"탐험가형",
    color:"#F9ECD5"  
  },
  {
    mbtiKinds:"ESFP",
    mbtiFigure:Shield,
    // mbtiImage:ESFPimg,
    mbtiExplanation:"자유로운 영혼의 연예인",
    mbtiCharacteristic:"주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는 연예인형",
    mbtiTyoe:"탐험가형",
    color:"#F9ECD5"
  }

]

