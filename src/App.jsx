import { useState } from 'react'
import { apiBooks } from './api/apiBooks'
import BooksList from './components/BooksList/BooksList';
import Skeleton from './components/Skeleton/Skeleton'

export default function App() {
    const [foundBooks, setFoundBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getBooks = async (search) => {
        setIsLoading(true)
        const books = await apiBooks(search)
        setFoundBooks(books)
        setIsLoading(false)
    }

    return (
        <>
            <div className="search">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                    <button onClick={() => getBooks(search)}>Search</button>
                </form>
            </div>
            {!isLoading ? <BooksList books={foundBooks}/> : <Skeleton/>}
        </>
    );
}

