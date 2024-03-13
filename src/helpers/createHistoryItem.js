import { getDate } from "./dateCreator"
import { v4 as generateId } from 'uuid'

export function createHistoryItem(comment, type) {
    return {
        comment,
        type,
        date: getDate(),
        id: generateId()
    }
}
