import useCollection from '../../helpers/hooks/useLibrary'
import {useGetLibraryQuery} from '../../store/services/libraryApi'

export default function WishlistPage() {

  const {state: books, isLoading, data} = useCollection('wishlist')
  console.log(books)

  return (
    <div>Wishlist</div>
  )
}
