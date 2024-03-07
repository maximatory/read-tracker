import useCollection from "../../helpers/hooks/useLibrary";
import Skeleton from "../../components/Skeleton/Skeleton";
import LibraryList from "./components/LibraryList/LibraryList";

export default function LibraryPage() {
  const {state: books, isLoading, data} = useCollection('library')
  console.log(books)
  return (
    <>
      <h1>Мои книги</h1>
      <LibraryList books={books}/>
    </>
  )
}
