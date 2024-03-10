import { useDeleteBookLibraryMutation, useEditBookLibraryMutation } from '../../../../store/services/libraryApi';
import styles from './WishlistItem.module.scss';

export default function WishlistItem({ book }) {
    const [updateLibrary] = useEditBookLibraryMutation()
    const [deleteBookLibrary] = useDeleteBookLibraryMutation()
    
    const moveToLibrary = () => {
        const updateCardBook = {...book, type: 'library'}
        updateLibrary(updateCardBook)
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img src={book.img.thumbnail} alt="poster" />
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__authors}>{book.authors}</div>
                <div className={styles.card__title}>{book.title}</div>
            </div>
            <div className={styles.card__comment}>
                <span>Комментарий: </span>
                {book.comment}
            </div>
            <div className={styles.card__buttons}>
                <button onClick={moveToLibrary}>Переместить в библиотеку</button>
                <button onClick={() => deleteBookLibrary(book.id)}>Удалить</button>
            </div>
        </div>
    )
}
