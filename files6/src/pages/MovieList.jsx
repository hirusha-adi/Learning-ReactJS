import { useState, useEffect } from "react";
import { Card } from "../components/Card";


const MovieList = () => {

    const [movies, setMovies] = useState([])



    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch()
            const data = await response.json()
            setMovies(data.results)
        }
    }, [])

    return (
        <>
            <main>
                <section className="max-w-7xl mx-auto py-7 items-center">
                    <div className="flex justify-center flex-wrap ">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
            </main>
        </>
    );
};

export { MovieList }