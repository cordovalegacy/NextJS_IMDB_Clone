
const About = () => {
    return (
        <div className="flex min-h-screen flex-col items-center gap-4 w-3/5 mx-auto my-10">
            <h1 className="font-bold text-amber-500 text-2xl w-full">About</h1>
            <div className="flex gap-12">
                <p>
                    Welcome to our
                    <span className="dark:text-amber-300 text-amber-600"> movie database </span>
                    website! We are a team of movie
                    enthusiasts who have created a
                    one stop shop of all the movies
                    on the internet!
                </p>
                <p>
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