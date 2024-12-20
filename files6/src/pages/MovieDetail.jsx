import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

const MovieDetail = () => {

    const params = useParams()
    const { data: movie } = useFetch(`movie/${params.id}`)
    const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : `https://placehold.co/300x450?text=${movie.original_title}`

    useEffect(() => {
        document.title = `${movie.original_title}`
    })

    return (
        <>
            <main>
                <section className="flex justify-around flex-wrap py-5">
                    <div className="max-w-sm">
                        <img src={moviePoster} alt={movie.original_title} className="rounded" />
                    </div>
                    <div className="max-w-2xl text-lg">
                        <h1 className="text-4xl font-bold my-3">
                            {movie.title}
                        </h1>
                        <p className="my-4">{movie.overview}</p>
                        {movie.genres ? (
                            <p className="my-7 flex flex-wrap gap-2">
                                {movie.genres && movie.genres.map((genre) => (
                                    <span className="mr-2 border border-gray-300 rounded p-2" key={genre.id}>{genre.name}</span>
                                ))}
                            </p>
                        ) : ""}
                        <div class="flex items-center">
                            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p class="ms-2 text-sm font-bold text-gray-900">{movie.vote_average}</p>
                            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                            <p class="text-sm font-medium text-gray-900 hover:underline">(from {movie.vote_count} reviews)</p>
                        </div>
                        <div>
                            <p className="my-4">
                                <span className="mr-2 font-bold">Runtime</span>
                                <span>{movie.runtime} min.</span>
                            </p>
                            <p className="my-4">
                                <span className="mr-2 font-bold">Runtime</span>
                                <span>{movie.runtime} min.</span>
                            </p>
                            <p className="my-4">
                                <span className="mr-2 font-bold">Revenue</span>
                                <span>{movie.revenue}</span>
                            </p>
                            <p className="my-4">
                                <span className="mr-2 font-bold">Budget</span>
                                <span>{movie.budget}</span>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export { MovieDetail }