import { Route, Routes } from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages"

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="movies/popular" element={<MovieList />} />
                <Route path="movies/top" element={<MovieList />} />
                <Route path="movies/upcoming" element={<MovieList />} />
                <Route path="search" element={<Search />} />

                <Route path="movie/:id" element={<MovieDetail />} />

                <Route path="*" element={<MovieList />} />
            </Routes>
        </>
    );
};

export { AllRoutes }
