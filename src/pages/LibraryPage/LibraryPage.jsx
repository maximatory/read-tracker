import useCollection from "../../helpers/hooks/useLibrary";
import LibraryList from "./components/LibraryList/LibraryList";

export default function LibraryPage() {
  const {state: books, isLoading, data} = useCollection('library')
  return (
    <>
      <h1>Мои книги</h1>
      <LibraryList books={books}/>
    </>
  )
}
