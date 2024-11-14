import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


const Search = ({ apiPath }) => {
    const [searchParams] = useSearchParams()
    const queryTerm = searchParams.get("q")
    const { data: movies } = useFetch(apiPath, queryTerm)

    useEffect(() => {
        document.title = `Results for: ${queryTerm}`
    })

    return (
        <>
            <main>
                <section className="max-w-7xl mx-auto py-7 items-center">
                    <h1 className="text-2xl mb-5 py-7 text-center">
                        {movies.length === 0 ? `No results found for: ${queryTerm}` : `Search results for: ${queryTerm}`}
                    </h1>
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

export { Search }