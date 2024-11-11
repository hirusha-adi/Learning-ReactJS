import { Route, Routes } from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages"

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
                <Route path="movies/popular" element={<MovieList apiPath="movie/popular" />} />
                <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" />} />
                <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" />} />
                <Route path="search" element={<Search apiPath="search/movie" />} />

                <Route path="movie/:id" element={<MovieDetail />} />

                <Route path="*" element={<MovieList />} />
            </Routes>
        </>
    );
};

export { AllRoutes }
