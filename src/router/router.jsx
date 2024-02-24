import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SearchPage from "../pages/SearchPage/SearchPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                path: "/search",
                element: <SearchPage/>,
            },
            {
                path: "/library",
                element: <LibraryPage/>,
            },
            {
                path: "/statistics",
                element: <StatisticsPage/>,
            }
        ]
    },
]);