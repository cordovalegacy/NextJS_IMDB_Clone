import Link from "next/link"

const SubNavItem = ({title, params}) => {

    return(
    <>
        <Link href={`/?genre=${params}`} className="hover:text-amber-300 transition">{title}</Link>
    </>
    )
}

export default SubNavItem