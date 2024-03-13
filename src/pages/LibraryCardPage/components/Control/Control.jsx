import SelectBlock from '../SelectBlock/SelectBlock'
import CommentForm from '../CommentForm/CommentForm'
import { useNavigate } from 'react-router-dom'
import { useDeleteBookLibraryMutation } from '../../../../store/services/libraryApi'
import styles from './Control.module.scss'

export default function Control({ id }) {
  const [deleteCard] = useDeleteBookLibraryMutation()
  const navigate = useNavigate()

  const deleteBook = () => {
    deleteCard(id)
    navigate("/library", { replace: true });
  }

  return (
    <div className={styles.control}>
      <button onClick={deleteBook}>Удалить книгу</button>
      <SelectBlock/>
      <CommentForm/>
    </div>
  )
}
