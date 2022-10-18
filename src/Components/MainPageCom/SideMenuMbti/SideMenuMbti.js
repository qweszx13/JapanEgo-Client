import React from 'react';
import 'antd/dist/antd.min.css';
import { mbtiInfo } from '../../../lib/infoMbti';
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';



function itemChild(key,icon,index,useIcon,tailCss){
  if(useIcon===true){
    return {
      key: `sub${key}`,
      icon: React.createElement(mbtiInfo[index].mbtiFigure),
      label: mbtiInfo[index].mbtiTyoe,
      className: tailCss,
      children: new Array(4).fill(null).map((_, j) => {
        //3,7,11,15
        const subKey = index-3+j;
        return {
          key: subKey,
          label: mbtiInfo[subKey].mbtiKinds,
        };
      }),
    };
  }
}

const items2 = mbtiInfo.map((icon, index) => {
  const key = String(index + 1);
  if((index+1)%4 === 0){
    return itemChild(key,icon,index,true,'border-solid border-2 border-sky-500 mt-2 ');
  }
  return console.log("사이드 메뉴 엠비티아이 생성");
});

export default function SideMenuMbti(){

  const sectionDispatch = useDispatch();

  const switchSection = (sectionNum,mbtiType)=>{
    sectionDispatch({type:"SETSECTION",valuse:sectionNum,mbtiType})
  }
  return(
    <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{
      height: '100%',
      borderRight: 0,
      borderRadius: '16px',
      backgroundColor: 'yellow',
      padding:'0px'
    }}
    onClick={(e)=>{
      switchSection(mbtiInfo[e.key],mbtiInfo[e.key].mbtiKinds);
      console.log(mbtiInfo[e.key].mbtiKinds);
    }}
    items={items2}
  />
  )
}
