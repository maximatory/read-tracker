import styles from './SearchBookItem.module.scss'
import { Link } from 'react-router-dom'

export default function BookItem({ bookInfo, bookId }) {
    return (
        <Link to={`/search/${bookId}`}>
            <div className={styles.card}>
                <div className={styles.card__imageWrapper} style={{backgroundImage: `url(${bookInfo.imageLinks.thumbnail})`}}>
                    {
                        bookInfo.imageLinks.thumbnail
                            ?
                            (<img
                                src={bookInfo.imageLinks.thumbnail}
                                alt={bookInfo.title}
                            />)
                            :
                            (
                                <div className={styles.notImage}>Изображение отсутствует</div>
                            )
                    }
                </div>
                <div className={styles.card__contentWrapper}>
                    <div className={styles.card__author}>{bookInfo.authors}</div>
                    <div className={styles.card__title}>{bookInfo.title}</div>
                </div>
            </div>
        </Link>
    )
}
