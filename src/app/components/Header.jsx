import Link from "next/link"
import NavItem from "./HeaderItem"
import DarkModeSwitch from "./DarkModeSwitch"
//these are actually functions below:
//which means we can use it as a component tag instead of an img tag
import { AiFillHome } from 'react-icons/ai'
import { AiFillInfoCircle } from 'react-icons/ai'


const Header = () => {
    return (
        <nav className="flex justify-around items-center p-5"> {/*nav bar*/}
            <div className="flex items-center gap-5 py-4"> {/*nav items (home and about links)*/}
                <NavItem title={"Home"} address={"/"} Icon={AiFillHome} />
                <NavItem title={"About"} address={"/about"} Icon={AiFillInfoCircle} />
            </div>
            <div className="flex items-center space-x-10"> {/*dark/light mode switch and logo*/}
                <DarkModeSwitch />
                <Link href={'/'} className="flex items-center">
                    <h2 className="text-2xl flex items-center gap-1">
                        <span className="bg-amber-500 font-bold rounded-lg py-1 px-2">IMDb</span>
                        <span className="text-xl hidden sm:inline">Clone</span>
                    </h2>
                </Link>
            </div>
        </nav>
    )
}

export default Header