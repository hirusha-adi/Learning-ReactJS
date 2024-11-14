import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";


const MovieList = ({ apiPath, title }) => {
    const { data: movies } = useFetch(apiPath)

    useEffect(() => {
        document.title = `${title} | Movies`
    })

    return (
        <>
            <main>
                <section className="max-w-7xl mx-auto py-7 items-center">
                    <div className="flex justify-center flex-wrap ">
                        {movies.map((movie) => (
                            <Card key={movie.id} movie={movie} apiPath={apiPath} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export { MovieList }