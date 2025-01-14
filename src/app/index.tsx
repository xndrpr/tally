import { globalStyles } from "./styled";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { MoviesPage } from "@/pages/movies";
import { TvShowsPage } from "@/pages/tv-shows";

export const App = () => {
    return (
        <div>
            <Global styles={globalStyles} />
            <Router>
                <Routes>
                    <Route path="/" element={<MoviesPage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/tv-shows" element={<TvShowsPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    );
};
