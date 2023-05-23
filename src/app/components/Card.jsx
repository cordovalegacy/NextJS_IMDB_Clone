import Link from "next/link"
import Image from 'next/image'
import { AiOutlineLike } from 'react-icons/ai'

const Card = ({ movies }) => {
    return (
        <div className="cursor-pointer hover:z-30 transform hover:bg-slate-500 hover:scale-105 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-300 sm:p-3 ">
            <Link href={`/movie/${movies.id}`}>
                <Image
                    width={500}
                    height={500}
                    className="rounded-lg"
                    alt="movie picture"
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }}
                    src={`https://image.tmdb.org/t/p/original/${movies.poster_path || movies.backdrop_path}`} alt="" />
            </Link>
            <p className="overflow-hidden line-clamp-2 my-3">{movies.overview}</p>
            <h2 className="font-extrabold text-left">{movies.original_title ? movies.original_title : movies.name}</h2>
            <div className="flex items-center justify-between">
                <p>{movies.release_date}</p>
                <p>Rating: {movies.vote_average}</p>
                <div className="flex items-center justify-center gap-1"><AiOutlineLike className="hover:text-amber-500 transition duration-300 font-bold" /><p>{movies.vote_count}</p></div>
            </div>
        </div>
    )
}

export default Card