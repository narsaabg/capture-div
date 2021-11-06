import react,{useEffect} from "react";
// import axios from 'axios'
import html2canvas from 'html2canvas';



const Div = (props)=>{
    function takeshot(id) {
        console.log('div'+id)
        html2canvas(document.getElementById('div'+id)).then(canvas => {
            document.body.appendChild(canvas)
        });
    }
return(
        <>
        {/* //style={{ backgroundImage: `url("https://picsum.photos/200/300/?blur")` }} */}
            <div id={'div'+props.id}  key={props.id} className="p-2 m-2   h-60 flex flex-wrap content-center border rounded" style={{backgroundImage: `url(${props.id+'.jpg'})`}}>
               
                <p className="text-white font-bold">{props.name}</p>
                <button onClick={()=>takeshot(props.id)}>Take Shot</button>
            </div>
        </>
    )
}

export default Div;