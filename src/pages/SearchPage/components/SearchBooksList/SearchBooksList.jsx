import SearchBookItem from "../SearchBookItem/SearchBookItem"
import styles from './SearchBooksList.module.scss'

export default function SearchBooksList({ books }) {
  return (
      <ul className={styles.booksList}>
        {
          books?.map((book, index) => {
            const bookInfo = book.volumeInfo
            const bookId = book.id
            return (
              <SearchBookItem 
                key={index} 
                bookInfo={bookInfo} 
                bookId={bookId}
              />
            )
          })
        }
      </ul>
  )
}
