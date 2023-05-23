

const Results = ({ res }) => {
    return (
        <main className="flex min-h-screen flex-col items-center gap-2 p-10">
            <h1 className='font-bold text-2xl mb-10'>Home</h1>
            <div className="flex flex-wrap justify-evenly items-center">
                {res.map((movies) => (
                    <div
                    key={movies.id} 
                    className="flex flex-col mb-4 justify-start border p-2 rounded-md w-96 h-80 text-center">
                        <div>
                            <h2>{movies.original_title ? movies.original_title : movies.name}</h2>
                            <p>Release Date: {movies.release_date}</p>
                            <p>Average Movie Rating: {movies.vote_average}</p>
                        </div>
                        <div className="mt-4 overflow-auto p-2 text-center">
                            <p>{movies.overview}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </main>
    )
}

export default Results