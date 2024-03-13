import Skeleton from "../../components/Skeleton/Skeleton";
import useCollection from "../../helpers/hooks/useLibrary";
import LibraryList from "./components/LibraryList/LibraryList";

export default function LibraryPage() {
  const {state: books, isLoading} = useCollection('library')
  return (
    <>
      <h1>Мои книги</h1>
      {!isLoading && !books.length && <div>Список пуст</div>}
      {!isLoading 
        ? <LibraryList books={books}/>
        : <Skeleton count='9' type='banner' direction='rows'/>  
      }
    </>
  )
}
