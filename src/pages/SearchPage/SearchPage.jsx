import { useState } from 'react';
import BooksList from '../../components/BooksList/BooksList';
import Skeleton from '../../components/Skeleton/Skeleton';
import { Outlet } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchQuery} from '../../store/slices/searchSlice'
import { useGetBooksQuery } from '../../store/services/booksApi';

export default function SearchPage() {
  const dispatch = useDispatch()
  const {searchQuery} = useSelector(state=>state.search)
  const [search, setSearch] = useState('')

  const { 
    data:books, 
    error, 
    isLoading,
    originalArgs,
  } = useGetBooksQuery(searchQuery, {
    skip: !searchQuery
  })

  const getBooks = () =>{
    if(search.length>0){
      dispatch(setSearchQuery(search))
      setSearch('')
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
          <button onClick={getBooks}>Search</button>
        </form>
      </div>
      <h2>{originalArgs ? `Результаты поиска ${originalArgs}` : 'Список пуст'}</h2>
      {error && <p>Произошла ошибка</p>}
      {!isLoading ? <BooksList books={books?.items} /> : <Skeleton />}
      
      <Outlet/>
    </>
  )
}
