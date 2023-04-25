import Link from "next/link"


const NavItem = ({title, address, Icon}) => { {/*destructure props*/}
    return( /*Both the home and about links and icons*/
            <Link className="flex items-center gap-2" href={address}>
                <Icon className="text-2xl transition hover:text-amber-700 dark:hover:text-amber-500 md:hidden" /> 
                <h3 className="hover:text-amber-700 transition dark:hover:text-amber-500 hidden sm:inline">{title}</h3>
            </Link>
    )
}

export default NavItem