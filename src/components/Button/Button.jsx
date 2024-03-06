import { useEffect, useState } from "react"
import { useSetBookToLibraryMutation } from "../../store/services/libraryApi"

export default function Button({ name, card, type }) {
    const [setBookToLibrary, { isLoading, isSuccess, isError }] = useSetBookToLibraryMutation()
    const [status, setStatus] = useState('Отправить')

    useEffect(() => {
        if (isLoading) {
            setStatus('Отправка')
        }
        if (isSuccess) {
            setStatus('Отправлено')
        }
        if (isError) {
            ('Не отправлено')
        }
    }, [isLoading, isSuccess, isError])

    const addCardToWishlist = (type) => {
        const cardBook = {...card, type}
        try {
            setBookToLibrary(cardBook)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button
            onClick={()=> addCardToWishlist(type)}
        >{status} в {name}</button>
    )
}
