// 출처
//- Demo at CodePen: https://codepen.io/hideya/pen/Jamabx
//- GH gist: https://gist.github.com/hideya/16ed168a42f74eb5d2162b4e743940ff


export default function flexWrapAni(){
    let targetClassName = 'ant-list-items';//고정?
    let defaultDuration = '0.5s';
    let dummyList = [];
    let conts = document.getElementsByClassName(targetClassName);

    for (let i = 0, max = conts.length; i < max; i++) {
      let cont = conts[i];
      cont.style.position = 'relative';//자기자신을 기준으로 위치를 잡는 스타일 relative 화
      let duration = defaultDuration;// 시간 설정

      let items = cont.getElementsByClassName('ant-list-item');//16개 배열 생성

      for (let i = 0, max = items.length; i < max; i++) {//16번
        addDummy(items[i], duration);
      }
    }

    function addDummy(item, duration) {
      let top = item.offsetTop;//배열들의 위쪽 기준점 
      let left = item.offsetLeft;//배열들의 아래쪽 기준점 

      setTimeout(()=>{
        item.style.position = 'absolute';//부모 기준으로 위치 배치
        item.style.top = top + 'px';
        item.style.left = left + 'px';
  
        let dummyDiv = document.createElement('div');
        dummyDiv.classList.add(targetClassName + '-dummy');
        let rect = item.getBoundingClientRect();
        dummyDiv.style.width = rect.width + 'px';
        dummyDiv.style.height = rect.height + 'px';
        dummyDiv.style.visibility = 'hidden';
        dummyDiv['__' + targetClassName + '_pair'] = item;
        dummyDiv['__' + targetClassName + '_duration'] = duration;
        item.parentNode.appendChild(dummyDiv);
        dummyList.push(dummyDiv);
      }, 0);
    }
    
    window.addEventListener('resize', function(event) {
      dummyList.map((dummyDiv,index)=>{
        let item = dummyDiv['__' + targetClassName + '_pair'];
        let duration = dummyDiv['__' + targetClassName + '_duration'];
        if (item.offsetTop !== dummyDiv.offsetTop) {
          item.style.transition = 'all ' + duration;
          item.style.top = dummyDiv.offsetTop + 'px';
          item.style.left = dummyDiv.offsetLeft + 'px';
        } else {
          item.style.transition = '';
          item.style.left = dummyDiv.offsetLeft + 'px';
        }
        return null;
      });
  });
}
