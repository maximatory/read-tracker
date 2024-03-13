import { useState } from 'react';
import SearchBooksList from './components/SearchBooksList/SearchBooksList';
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
      <div>{originalArgs ? `Результаты поиска ${originalArgs}` : 'Список пуст'}</div>
      {error && <p>Произошла ошибка</p>}
      {!isLoading 
        ? <SearchBooksList books={books?.items} /> 
        : <Skeleton count='9' type='banner' direction='rows'/> }     
      <Outlet/>
    </>
  )
}
