
const Card = ({ movie }) => {
    return (
        <>
            <div className="max-w-72 border rounded-2xl p-3 hover:cursor-pointer m-2">
                <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="Product" />
                <h1 className="text-xl mb-3 mt-5 pb-2 border-b font-bold">
                    {movie.original_title}
                </h1>
                <div >
                    {movie.adult &&
                        <div className="inline-block bg-red-600 text-white rounded-full px-3 py-1 text-sm font-bold">
                            18+
                        </div>
                    }
                </div>
                <p>
                    {`${movie.overview.substring(0, 120)}${movie.overview.length > 120 ? '...' : ''}`}
                </p>

            </div>
        </>
    );
};

export { Card }