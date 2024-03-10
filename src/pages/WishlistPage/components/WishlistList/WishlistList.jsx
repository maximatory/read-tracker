import WishlistItem from '../WishlistItem/WishlistItem'

export default function WishlistList({books}) {
  return (
    <ul>
        {books.map(book=>{
            return(
               <WishlistItem key={book.id} book={book}/>
            )
        })}
    </ul>
  )
}

