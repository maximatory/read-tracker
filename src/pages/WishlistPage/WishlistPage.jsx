import useCollection from '../../helpers/hooks/useLibrary'
import WishlistList from './components/WishlistList/WishlistList'
import Skeleton from '../../components/Skeleton/Skeleton'

export default function WishlistPage() {
  const {state: books, isLoading} = useCollection('wishlist')
  
  return (
    <>
      <h1>Wishlist</h1>
      {!isLoading && !books.length && <div>Список пуст</div>}
      {!isLoading 
        ? <WishlistList books={books}/>
        : <Skeleton count='5' type='row' direction='column'/>
      }
    </>
  )
}
