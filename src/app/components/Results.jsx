import Card from "./Card"

const Results = ({ res }) => {
    return (
        <main className="flex min-h-screen flex-col items-center gap-2 p-10">
            <h1 className='font-bold text-2xl mb-10'>Home</h1>
            <div  className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto">
                {res.map((movies) => (
                    <Card key={movies.id} movies={movies} />
                ))
                }
            </div>
        </main>
    )
}

export default Results