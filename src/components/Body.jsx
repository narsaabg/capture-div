import react,{useEffect} from "react";
 import list from './List'
 import Div from './Div'
 import axios from 'axios'


const Body =()=>{

    

    return(
        <>
            <div className="grid grid-rows-1 grid-flow-col gap-4" id="div">
                {
                    list.map((list,index)=>{
                        return(
                        <>
                        <Div  key={index} id={list.id} name={list.name} />
                        {/* <button onClick={()=>takeshot(list.id)}>Take Shot</button> */}
                        </>)
                    })
                }
            </div>
        </>
    )
}

export default Body;