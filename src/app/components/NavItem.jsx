import Link from "next/link"


const NavItem = ({title, address, Icon}) => {
    return(
            <Link className="flex items-center gap-2" href={address}>
                <Icon className="text-2xl hover:text-amber-700 dark:hover:text-amber-500 hidden sm:inline" /> 
                <h3 className="hover:text-amber-700 dark:hover:text-amber-500">{title}</h3>
            </Link>
    )
}

export default NavItem