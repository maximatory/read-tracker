import { useEffect, useState } from "react";
import { useGetLibraryQuery } from "../../store/services/libraryApi";

export default function useCollection(type) {
const {data, isLoading, isSuccess} = useGetLibraryQuery();
const [state, setState] = useState([]);

useEffect(()=>{
    if(isSuccess){
        const filteredLibrary = data.filter(card=> card.type === type)
        setState(filteredLibrary)
    }
}, [isSuccess, data, type])

  return (
    {state, isLoading, data}
  )
}
