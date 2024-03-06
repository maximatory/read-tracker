import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SearchPage from "../pages/SearchPage/SearchPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage";
import BookCardPage from "../pages/BookCardPage/BookCardPage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";


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
                element: <BookCardPage/>
            },
            {
                path: "/library",
                element: <LibraryPage/>,
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