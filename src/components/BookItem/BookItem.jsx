import styles from './BookItem.module.scss'

export default function BookItem({bookInfo}) {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.card__imageWrapper}>
                    {
                        bookInfo.imageLinks
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
                    <div className={styles.card__description}>{bookInfo.description}</div>
                </div>
                <div className={styles.card__buttonWrapper}>
                    <button>Подробнее</button>
                    <button>Добавить в библиотеку</button>
                </div>
            </div>
        </div>
    )
}
