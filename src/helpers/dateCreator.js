export const getDate = ()=>{
    const date = new Date()

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric',
    }

    return date.toLocaleDateString("ru", options)  
}