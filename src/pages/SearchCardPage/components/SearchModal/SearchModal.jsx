import Button from '../Button/Button';
import { MdClose } from "react-icons/md";
import styles from './SearchModal.module.scss'
import { useState } from 'react';

export default function SearchModal({ cardBook, setIsModal }) {
    const [comment, setComment] = useState('')

    const closeModal = ()=>{
        setComment('')
        setIsModal(false)
    }

    return (
        <div className={styles.modal} onClick={closeModal}>
            <form className={styles.modal__form} onClick={(e)=> {
                e.stopPropagation()
                e.preventDefault()
            }}>
                <div className={styles.modal__title}>Напишите себе комментарий о том, что заинтересовало в этой книге?</div>
                <textarea 
                    className={styles.modal__textArea} 
                    onChange={(e)=> setComment(e.target.value)}
                />
                <div className={styles.modal__buttons}>
                    <Button
                        name="вишлист"
                        card={{...cardBook, comment}}
                        type="wishlist"
                        setIsModal={setIsModal}
                    />
                    <Button
                        name="библиотеку"
                        card={{...cardBook, comment}}
                        type="library"
                        setIsModal={setIsModal}
                    /> 
                </div>
                <div 
                    className={styles.cancelButton}
                    onClick={closeModal}
                >
                    <MdClose />
                </div>
            </form>
        </div>
    )
}
