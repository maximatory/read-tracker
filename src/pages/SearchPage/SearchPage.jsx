import { useState } from 'react';
import { apiBooks } from '../../api/apiBooks';
import BooksList from '../../components/BooksList/BooksList';
import Skeleton from '../../components/Skeleton/Skeleton';
import { Outlet } from 'react-router-dom';

export default function SearchPage() {
  const [foundBooks, setFoundBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getBooks = async (search) => {
    try {
      if(search.length){
        setIsLoading(true)
        const books = await apiBooks(search)
        // console.log(books)
        setFoundBooks(books)
        setSearch('')
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)      
    }
  }

  return (
    <>
      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text"
            value={search} 
            style={{marginBottom: '10px'}}
            onChange={(e) => {
            setSearch(e.target.value)
          }} />
          <button onClick={() => getBooks(search)}>Search</button>
        </form>
      </div>
      {!isLoading ? <BooksList books={foundBooks} /> : <Skeleton />}
      <Outlet/>
    </>
  )
}
