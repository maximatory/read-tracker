import NoteItem from "../NoteItem/NoteItem";
import styles from './NoteList.module.scss';

export default function NoteList({history}) {
  return (
    <ul className={styles.list}>
    {history.map(note=>{
      return(
        <NoteItem key={note.id} note={note}/>
      )
    })}
  </ul>
  )
}