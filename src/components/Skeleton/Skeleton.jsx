import styles from './Skeleton.module.scss'

export default function Skeleton({count=1, type='rows', direction='column'}) {
    return (
        <>
                <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
                    {[...Array(Number(count))].map((_, index) => {
                        return (
                            <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
                        )
                    })}
                </ul>
        </>
    )
}