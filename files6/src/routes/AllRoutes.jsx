import { Route, Routes } from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages"

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Now Playing" />} />
                <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
                <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
                <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
                <Route path="search" element={<Search apiPath="search/movie" />} />

                <Route path="movie/:id" element={<MovieDetail />} />
                {/* note we dont need to pass in the :id as props */}

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export { AllRoutes }
