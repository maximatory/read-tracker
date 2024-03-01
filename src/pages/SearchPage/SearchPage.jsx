import { useState } from 'react';
import { apiBooks } from '../../api/apiBooks';
import BooksList from '../../components/BooksList/BooksList';
import Skeleton from '../../components/Skeleton/Skeleton';
import { Outlet } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { setBooks } from '../../store/slices/searchSlice';

export default function SearchPage() {
  const dispatch = useDispatch()
  const {searchQuery, books} = useSelector(state=> state.books.books)
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const getBooks = async (search) => {
    try {
      if(search.length){
        setIsLoading(true)
        const data = await apiBooks(search)
        dispatch(setBooks({searchQuery: search, books: data}))
        setSearch('')
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)      
    }
  }
  
  const resetSearch = ()=>{
    dispatch(setBooks({
      searchQuery: '',
      books: []
    }))
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
          <button onClick={()=> resetSearch()}>Reset search</button>
        </form>
      </div>
      <h2>{searchQuery ? `Результаты поиска ${searchQuery}` : 'Список пуст'}</h2>
      {!isLoading ? <BooksList books={books} /> : <Skeleton />}
      <Outlet/>
    </>
  )
}
