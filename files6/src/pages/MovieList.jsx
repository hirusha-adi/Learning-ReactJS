import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";


const MovieList = () => {
    const { data: movies } = useFetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1")

    return (
        <>
            <main>
                <section className="max-w-7xl mx-auto py-7 items-center">
                    <div className="flex justify-center flex-wrap ">
                        {movies.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export { MovieList }