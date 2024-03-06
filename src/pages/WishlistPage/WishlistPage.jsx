import {useGetLibraryQuery} from '../../store/services/libraryApi'

export default function WishlistPage() {

  const {data} = useGetLibraryQuery()
  console.log(data)

  return (
    <div>Wishlist</div>
  )
}
