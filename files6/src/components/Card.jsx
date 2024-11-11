import { Link } from "react-router-dom";

const Card = ({ movie, apiPath }) => {
    const imgUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : `https://placehold.co/300x450?text=${movie.original_title}`
    return (
        <>
            <Link to={`/movie/${movie.id}`} className="max-w-72 border rounded-2xl p-3 hover:cursor-pointer m-2">
                <img className="rounded-lg" src={imgUrl} alt="Product" />
                <h1 className="text-xl mb-3 mt-5 pb-2 border-b font-bold">
                    {movie.original_title}
                </h1>
                <div >
                    <div className={`${movie.vote_average > 6.0 ? 'bg-green-500' :
                        movie.vote_average > 4 ? 'bg-yellow-500' :
                            'bg-red-500'} inline-block text-white rounded-full px-3 py-1 text-sm font-bold`} >
                        {parseFloat(movie.vote_average).toFixed(1)}/10
                    </div>
                    <div className={`${movie.original_language === "en" ? 'bg-blue-500 ' : 'bg-gray-500'} inline-block text-white rounded-full ml-2 py-1 text-sm px-2.5 font-bold`}>
                        {String(movie.original_language).toUpperCase()}
                    </div>
                </div >
                <p>
                    {`${movie.overview.substring(0, 120)}${movie.overview.length > 120 ? '...' : ''}`}
                </p>
                <p className="text-gray-600 italic pt-2">
                    {apiPath === "movie/upcoming" ? "Will be released on:" : "Released on:"} {movie.release_date}
                </p>
            </Link >
        </>
    );
};

export { Card }