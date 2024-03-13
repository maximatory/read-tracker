import styles from './NoteItem.module.scss'

export default function NoteItem({note}) {
    return (
        <div key={note.id} className={styles.note}>
            <span className={styles.note__date}>{note.date}</span>
            <div>
                <p className={styles.note__comment}>
                    <span className={styles.note__type}>{note.type}</span>
                    : {note.comment}
                </p>
            </div>
        </div>
    )
}
