import BooksList from "../../components/BooksList/BooksList";
import useCollection from "../../helpers/hooks/useLibrary";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function LibraryPage() {
  const {state: books, isLoading, data} = useCollection('library')
  console.log(books)
  return (
    <>
      <div>LibraryPage</div>
      <ul>
        {
          books.map(book=>{
            return(
              <div key={book.googleId}>
                <div>{book.title}</div>
                <div>{book.authors}</div>
              </div>
            )
          })
        }
      </ul>

    </>
  )
}
