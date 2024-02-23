import { useState } from 'react'
import { apiBooks } from './api/apiBooks'
import BooksList from './components/BooksList/BooksList';

export default function App() {
    const [foundBooks, setFoundBooks] = useState([]);
    const [search, setSearch] = useState('');

    const getBooks = async (search) => {
        const books = await apiBooks(search)
        setFoundBooks(books)
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
           <BooksList books={foundBooks}/>
        </>
    );
}

