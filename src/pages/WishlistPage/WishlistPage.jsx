import useCollection from '../../helpers/hooks/useLibrary'
import WishlistList from './components/WishlistList/WishlistList'
import Skeleton from '../../components/Skeleton/Skeleton'

export default function WishlistPage() {
  const {state: books, isLoading} = useCollection('wishlist')
  
  return (
    <>
      <div>Wishlist</div>
      {isLoading ? <Skeleton/> : <WishlistList books={books}/>}
    </>
  )
}
