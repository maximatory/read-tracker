import {useState} from 'react'
import {apiBooks} from './api/apiBooks'

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const getBooks = async (search)=>{
      const books = await apiBooks(search)
      setData(books)
      console.log(data)
  }

  return (
    <>
        <div className="search">
            <form onSubmit={(e)=> e.preventDefault()}>
                <input type="text" onChange={(e)=> {
                    setSearch(e.target.value)
                }}/>
                <button onClick={()=> getBooks(search)}>Search</button>
            </form>
        </div>
    </>
  );
}

