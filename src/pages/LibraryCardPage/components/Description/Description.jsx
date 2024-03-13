import styles from './Description.module.scss';

export default function Description({data}) {
    return (
        <div className={styles.description}>
            <div>{data.authors}</div>
            <div>{data.title}</div>
            <div>{data.description}</div>
            <div>Комментарий: {data.comment ? data.comment : 'данные отсутствуют'}</div>
        </div>
    )
}