import MenuItem from "./MenuItem"
//this is actually a function which means we can use it as a component tag instead of an image
import {AiFillHome} from 'react-icons/ai' 
// import {IoInformationCircle} from 'react-icons'

const Header = () => {
    return(
        <nav className="flex justify-around items-center bg-gray-600 p-5">
            <div className="flex items-center gap-5">
                <MenuItem title={"Home"} address={"/"} Icon={AiFillHome}/>
                {/* <MenuItem title={"ABOUT"} address={"/about"} Icon={IoInformationCircle}/> */}
            </div>
            <div className="flex items-center gap-5">
                <h2>Link</h2>
                <h2>Logo</h2>
            </div>
        </nav>
    )
}

export default Header