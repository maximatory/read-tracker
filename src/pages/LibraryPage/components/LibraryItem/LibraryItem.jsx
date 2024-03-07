import { Link } from 'react-router-dom';
import styles from './LibraryItem.module.scss';

export default function LibraryItem({ book }) {
    return (
        <Link to={`/library/${book.id}`}>
            <div className={styles.card}>
                <div className={styles.card__imageWrapper}>
                    {
                        book.img
                            ?
                            (
                                <img src={book.img.thumbnail}
                                    alt="poster" />
                            )
                            :
                            (
                                <div>Изображение отсутствует</div>
                            )
                    }
                </div>
                <div className={styles.card__description}>
                    <div>{book.title}</div>
                    <div>{book.authors}</div>
                </div>
            </div>
        </Link>
    )
}
