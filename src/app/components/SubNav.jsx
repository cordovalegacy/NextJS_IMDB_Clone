import SubNavItem from "./SubNavItem"

const Nav = () => {
    return(
        <div className="flex justify-center gap-10 bg-gray-700 text-gray-50 p-4 dark:bg-gray-500 dark:text-white">
            <SubNavItem title="Trending" params="fetchTrending" />
            <SubNavItem title="Top Rated" params="fetchTopRated" />
        </div>
    )
}

export default Nav