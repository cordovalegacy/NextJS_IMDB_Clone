
const About = () => {
    return (
        <div className="flex min-h-screen flex-col items-center gap-4 max-w-6xl w-1/2 mx-auto my-10">
            <h1 className="font-bold text-amber-500 text-2xl w-full px-5">About</h1>
            <div className="flex max-w-2xl">
                <p className="px-5">
                    Welcome to our
                    <span className="dark:text-amber-300 text-amber-600"> movie database </span>
                    website! We are a team of movie
                    enthusiasts who have created a
                    one stop shop of all the movies
                    on the internet!
                </p>
                <p className="px-5">
                    <span className="dark:text-amber-300 text-amber-600">IMDb </span>
                    is an online database of information
                    related to films, television series,
                    podcasts, home videos, video games, and
                    streaming content online – including
                    cast, production crew and personal biographies,
                    plot summaries, trivia, ratings, and fan and
                    critical reviews.
                    <span className="dark:text-amber-300 text-amber-600"> You need info about something digital? We got it!
                    </span>
                </p>
            </div>
        </div>
    )
}

export default About