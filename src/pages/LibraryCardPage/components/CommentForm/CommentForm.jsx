import { useState } from 'react'
import styles from './CommentForm.module.scss'
import { useEditBookLibraryMutation, useGetCardByIdQuery } from '../../../../store/services/libraryApi'
import { useParams } from 'react-router-dom';
import { createHistoryItem } from '../../../../helpers/createHistoryItem';


export default function CommentForm() {
    const { cardId } = useParams();
    const { data:card } = useGetCardByIdQuery(cardId)
    const [editCard, {isLoading}] =  useEditBookLibraryMutation(cardId)
    const [comment, setComment] = useState('')
    const [type, setType] = useState('Заметка')

    const handleType = (value)=>{
        setType(value)
    }

    const handleComment = (value)=>{
        setComment(value)
    }

    const saveNewComment = ()=>{
        const newComment = createHistoryItem(comment, type)
        editCard({
            ...card,
            history: [...card.history, newComment]
        })
        setComment('')
    }

    return (
        <form className={styles.form} onSubmit={(e)=> {
            e.preventDefault()
            saveNewComment()
        }}>
            <div className={styles.form__title}>Добавить новую запись</div>
            <label>Тип записи: 
                <select onChange={(e)=> handleType(e.target.value)}>
                    <option name='Note'>Заметка</option>
                    <option name='Quote'>Цитата</option>
                </select>
            </label>
            <textarea value={comment} onChange={(e)=> handleComment(e.target.value)}/>
            <button disabled={comment.length === 0}>{isLoading ? 'Отправка' : 'Отправить'}</button>
        </form>
    )
}