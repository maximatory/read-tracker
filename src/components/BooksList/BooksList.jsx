import BookItem from "../BookItem/BookItem"
import styles from './BooksList.module.scss'

export default function BooksList({ books }) {
  return (
    <ul className={styles.booksList}>
      {
        books?.map((book) => {
          const bookInfo = book.volumeInfo
          console.log(bookInfo)
          return (
            <BookItem key={bookInfo.infoLink} bookInfo={bookInfo} />
          )
        })
      }
    </ul>
  )
}
