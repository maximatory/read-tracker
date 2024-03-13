import NoteList from '../NoteList/NoteList';
import styles from './History.module.scss';

export default function History({history}) {
  
  return (
    <div className={styles.history}>
        <NoteList history={history}/>
    </div>
  )
}