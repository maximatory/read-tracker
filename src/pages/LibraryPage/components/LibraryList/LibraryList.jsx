import LibraryItem from "../LibraryItem/LibraryItem"
import styles from './LibraryList.module.scss'

export default function LibraryList({ books }) {
    return (
        <ul className={styles.list}>
            {
                books.map(book => {
                    return (
                       <LibraryItem book={book} key={book.id}/>
                    )
                })
            }
        </ul>

    )
}
