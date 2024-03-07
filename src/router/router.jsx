import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SearchPage from "../pages/SearchPage/SearchPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage";
import SearchCardPage from "../pages/SearchCardPage/SearchCardPage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import LibraryCardPage from "../pages/LibraryCardPage";

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
                path: "/search/:bookId",
                element: <SearchCardPage/>
            },
            {
                path: "/library",
                element: <LibraryPage/>,
            },
            {
                path: "/library/:cardId",
                element: <LibraryCardPage/>,
            },
            {
                path: "/statistics",
                element: <StatisticsPage/>,
            },
            {
                path: "/wishlist",
                element: <WishlistPage/>,
            }
        ]
    },
]);