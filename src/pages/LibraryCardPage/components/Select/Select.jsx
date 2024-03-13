import { useParams } from "react-router-dom";
import { useEditBookLibraryMutation, useGetCardByIdQuery } from "../../../../store/services/libraryApi"
import { getDate } from "../../../../helpers/dateCreator";
import { v4 as generateId } from 'uuid'
import { createHistoryItem } from "../../../../helpers/createHistoryItem";

export default function Select({ selectData }) {
    const { cardId } = useParams();
    const { data:card } = useGetCardByIdQuery(cardId)
    const [editHistory, {isLoading, isSuccess}] = useEditBookLibraryMutation(cardId)
    const { title, options, name } = selectData
    
    const handleSubmit = (value)=>{
        const newHistoryItem = createHistoryItem(value, title)
        editHistory({
            ...card,
            history : [...card.history, newHistoryItem],
            [name]: value
        })
    }

    return (
        <div>
            <label>{title}: </label>
                <select defaultValue={card[name]} onChange={(e)=> handleSubmit(e.target.value)}>
                    {options.map((option, index)=>{
                        return(
                            <option 
                                key={index} 
                                value={option}
                            >{option}</option>
                        )
                    })}
                </select>
                {isLoading && 'Загрузка'}
                {isSuccess && 'Сохранено'}
        </div>
    )
}