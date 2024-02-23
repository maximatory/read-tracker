import styles from './Skeleton.module.scss'

export default function Skeleton({count=5}) {
    return (
        <>
                <ul className={styles.skeleton__list}>
                    {[...Array(count)].map((_, index) => {
                        return (
                            <li key={index} className={styles.skeleton__item}></li>
                        )
                    })}
                </ul>
        </>
    )
}