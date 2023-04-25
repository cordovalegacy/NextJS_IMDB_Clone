import Link from "next/link"


const MenuItem = ({title, address, Icon}) => {
    return(
        <div>
            <Link className="flex items-center gap-2 text-lg" href={address}>
                <Icon className="text-2xl" /> 
                <h3 className="hidden sm:inline">{title}</h3>
            </Link>
        </div>
    )
}

export default MenuItem