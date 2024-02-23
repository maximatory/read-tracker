import { useState } from 'react'
import { apiBooks } from './api/apiBooks'
import BookItem from './components/BookItem/BookItem';

export default function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const getBooks = async (search) => {
        const books = await apiBooks(search)
        setData(books)
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
            {
                data?.map((item) => {
                    const bookInfo = item.volumeInfo
                    console.log(bookInfo)
                        return (
                            <BookItem key={bookInfo.infoLink} bookInfo={bookInfo}/>
                        )
                })
            }
        </>
    );
}

