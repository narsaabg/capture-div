import react from "react";
import {Link} from 'react-router-dom'

const Header =()=>{
    return(
        <>
            <div className=" p-3 row w-100 flex font-semibold text-white bg-black">
                <div className="mx-2 w-50 text-left">
                    Practing React
                </div>
                <ul className="w-50 flex text-end justify-end">
                    <li className="mx-2" ><Link to='/'>Home</Link></li>
                    <li className="mx-2"><Link to='/about'>About</Link></li>
                    <li className="mx-2"><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header;