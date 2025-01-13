import { globalStyles } from "./styled";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { MePage } from "@/pages/me";
import { PlanPage } from "@/pages/plan";
import { TrackPage } from "@/pages/track";
import { DiscoverPage } from "@pages/discover";

export const App = () => {
    return (
        <div>
            <Global styles={globalStyles} />
            <Router>
                <Routes>
                    <Route path="/" element={<DiscoverPage />} />
                    <Route path="/track" element={<TrackPage />} />
                    <Route path="/plan" element={<PlanPage />} />
                    <Route path="/me" element={<MePage />} />
                </Routes>
            </Router>
        </div>
    );
};
