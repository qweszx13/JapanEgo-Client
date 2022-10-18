import { useSelector,useDispatch } from "react-redux"




export default function EachSectionMbti(){
 
  const section = useSelector((state)=>{
    return state.sectionArray
  })

  return(
    <div className={"w-full h-full block"} style={{backgroundColor:section[4]}}>
      {section[0]}
    </div>
  )
}