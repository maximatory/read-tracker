import styles from './Banner.module.scss'

export default function Banner({data}) {
    return (
        <div className={styles.imageWrapper} style={{ backgroundImage: `url(${data.img.thumbnail})` }}>
            <img src={data.img.thumbnail} />
        </div>
    )
}
