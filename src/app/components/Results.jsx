

const Results = ({ res }) => {
    return (
        <main className="flex min-h-screen flex-col items-center gap-2 p-24">
            <h1 className='font-bold'>Home</h1>
            <div className="flex flex-wrap justify-evenly items-center">
                {res.map((movies) => (
                    <div className="flex flex-col border bg-gray-800 p-2 rounded-md">
                        <h2>{movies.title}</h2>
                    </div>
                ))
                }
            </div>
        </main>
    )
}

export default Results