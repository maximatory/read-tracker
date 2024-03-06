import BookItem from "../BookItem/BookItem"
import styles from './BooksList.module.scss'

export default function BooksList({ books }) {
  console.log('books', books)
  return (
      <ul className={styles.booksList}>
        {
          books?.map((book, index) => {
            const bookInfo = book.volumeInfo
            const bookId = book.id
            return (
              <BookItem 
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
